import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  combineLatest,
  map,
  Observable,
  switchMap,
  tap,
  BehaviorSubject,
  filter,
  of,
} from 'rxjs';

import {
  IClass,
  IFullActivity,
} from '@matific/core/interfaces/common.interfaces';
import { NuguCommon } from '@matific/core/utils/common.library';
import { IProgressBar } from '@matific/shared/components/progress-bar/progress-bar.component';
import { NuguActivitiesFilterService } from '../../services/activities-filter.service';
import { NuguClassService } from '../../services/class.service';
import {
  IBarDataSet,
  NuguStatusBarTransformService,
} from '../../services/status-bar-transform.service';
import { TableColumnInterface } from '../../components/reporting-table/reporting-table.component';

export const columns: TableColumnInterface[] = [
  {
    name: 'date',
    title: 'DATE COMPLETED',
  },
  {
    name: 'content',
    title: 'CONTENT',
  },
  {
    name: 'type',
    title: 'TYPE',
  },
  {
    name: 'skill',
    title: 'SKILL',
  },
  {
    name: 'result',
    title: 'RESULT',
  },
  {
    name: 'time',
    title: 'TIME SPENT',
  },
];

@Component({
  selector: 'nugu-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguReportPageComponent {
  _classes$: Observable<IClass[]>;
  _students$: Observable<string[] | undefined>;
  _activities$: Observable<any[]>;
  _filteredActivities$: Observable<IFullActivity[]>;
  _progress$: Observable<IProgressBar[]>;
  _selectedDateRange$: Observable<string>;
  _noDataForStudent$: Observable<string>;
  _hasNotSelectedStudentAndRange: Observable<boolean>;
  _chartData$: Observable<IBarDataSet>;
  _chartIsVisible$: Observable<boolean>;

  _columns: TableColumnInterface[];

  _chartOptions = {
    plugins: {
        legend: {
            display: false,
        }
    }
};

  private _classChanged$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  private _studentChanged$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  private _fromDateChanged$: BehaviorSubject<Date | null> =
    new BehaviorSubject<Date | null>(null);
  private _toDateChanged$: BehaviorSubject<Date | null> =
    new BehaviorSubject<Date | null>(null);

  constructor(
    private _classService: NuguClassService,
    private _activitiesFilterService: NuguActivitiesFilterService,
    private _statusBarTransformService: NuguStatusBarTransformService
  ) {
    this._classes$ = this._classService.classesChanged$;

    this._students$ = this._classChanged$.pipe(
      switchMap((name) => this._classService.getClass$(name)),
      map((value) => value?.students)
    );

    this._selectedDateRange$ = combineLatest([
      this._fromDateChanged$,
      this._toDateChanged$,
    ]).pipe(
      filter((value): value is [Date, Date] => !!value[0] && !!value[1]),
      map(([from, to]) => {
        return `${NuguCommon.getDay(from)} ${NuguCommon.getMonth(
          from
        )} - ${NuguCommon.getDay(to)} ${NuguCommon.getMonth(to)}`;
      })
    );

    this._filteredActivities$ = combineLatest([
      this._classChanged$,
      this._studentChanged$,
      this._fromDateChanged$,
      this._toDateChanged$,
    ]).pipe(
      switchMap(([className, studentName, fromDate, toDate]) => {
        return this._activitiesFilterService.filter$(
          className,
          studentName,
          fromDate,
          toDate
        );
      })
    );

    this._activities$ = this._filteredActivities$.pipe(
      map((filteredActivities) =>
        filteredActivities.map((filteredActivity) => {
          const modifiedActivity = {
            ...filteredActivity,
            date: NuguCommon.getDateWithShortMonth(filteredActivity.date),
            result: filteredActivity.result + '%',
          };
          return modifiedActivity;
        })
      )
    );

    this._progress$ = this._filteredActivities$.pipe(
      switchMap((filteredActivities) => {
        return this._statusBarTransformService.statusTransform$(
          filteredActivities
        );
      })
    );

    this._noDataForStudent$ = this._filteredActivities$.pipe(
      filter((filteredActivities) => filteredActivities.length === 0),
      map(
        () =>
          `No content has been completed by ${this._studentChanged$.getValue()} for ${NuguCommon.tranformDate(
            this._fromDateChanged$.getValue() as Date
          )} to ${NuguCommon.tranformDate(
            this._toDateChanged$.getValue() as Date
          )}`
      )
    );

    this._hasNotSelectedStudentAndRange = combineLatest([
      this._studentChanged$,
      this._fromDateChanged$,
      this._toDateChanged$,
    ]).pipe(
      map(([student, fromDate, toDate]) => !!student && !!fromDate && !!toDate)
    );

    this._chartData$ = this._progress$.pipe(
      switchMap((bars) => {
        return this._statusBarTransformService.getBarChartDataset$(bars);
      })
    );

    this._chartIsVisible$ = combineLatest([
      this._classChanged$,
      this._studentChanged$,
      this._chartData$
    ]).pipe(
      switchMap(([_class, student, data]) => of(!!_class && !student && !!data.datasets[0].data.length))
    )

    this._columns = columns;
  }

  _classChanged({ _, value }: { _: any; value: IClass }): void {
    this._classChanged$.next(value?.name ?? '');
    this._studentChanged$.next('');
  }

  _studentChanged({ _, value }: { _: any; value: string }): void {
    this._studentChanged$.next(value);
  }

  _fromDateChanged(event: Date | null): void {
    this._fromDateChanged$.next(event);
  }

  _toDateChanged(event: Date | null) {
    this._toDateChanged$.next(event);
  }

  _trackBy: (index: number, item: any) => any = (index: number, item: any) => {
    return item.id;
  };
}
