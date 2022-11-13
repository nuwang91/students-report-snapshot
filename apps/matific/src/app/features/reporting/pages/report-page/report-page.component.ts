import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import {
  combineLatest,
  map,
  Observable,
  Subject,
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
import { NuguReportDataService } from '../../services/report-data.service';
import {
  IBarDataSet,
  NuguStatusBarTransformService,
} from '../../services/status-bar-transform.service';

interface NuguTableColumnInterface {
  name: string;
  title?: string;
}

export const columns: NuguTableColumnInterface[] = [
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
export class NuguReportPageComponent implements OnDestroy {
  _classes$: Observable<IClass[]>;
  _students$: Observable<string[] | undefined>;
  _activities$: Observable<any>;
  _filteredActivities$: Observable<IFullActivity[]>;
  _progress$: Observable<IProgressBar[]>;
  _selectedDateRange$: Observable<string>; // '10 Sept - 10 Nov';
  _noDataForStudent$: Observable<string>;
  _hasNotSelectedStudentAndRange: Observable<boolean>;
  _chartData$: Observable<IBarDataSet>;
  _chartIsVisible$: Observable<boolean>;


  _columns: NuguTableColumnInterface[];

  _chartOptions = {
    plugins: {
        legend: {
            display: false,
        }
    }
};

  private _destroyed$: Subject<void> = new Subject();
  private _classChanged$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  private _studentChanged$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  private _fromDateChanged$: BehaviorSubject<Date | null> =
    new BehaviorSubject<Date | null>(null);
  private _toDateChanged$: BehaviorSubject<Date | null> =
    new BehaviorSubject<Date | null>(null);

  private _parametersDataChanged$: Observable<any>;

  progress: IProgressBar[] = [
    { color: '#F2F2F2', percentage: 16, status: 'unassigned' },
    { color: '#D90404', percentage: 18, status: 'weak' },
    { color: '#F26513', percentage: 35, status: 'ok' },
    { color: '#ffc107', percentage: 4, status: 'good' },
    { color: '#4CAF50', percentage: 27, status: 'excellent' },
  ];

  constructor(
    private _classService: NuguClassService,
    private _reportDataService: NuguReportDataService,
    private _activitiesFilterService: NuguActivitiesFilterService,
    private _statusBarTransformService: NuguStatusBarTransformService
  ) {
    this._classes$ = this._classService.classesChanged$
      .pipe
      // takeUntil(this._destroyed$),
      // tap((classes) => this._classChanged$.next(classes[0].name))
      ();

    this._students$ = this._classChanged$.pipe(
      // takeUntil(this._destroyed$),
      switchMap((name) => this._classService.getClass$(name)),
      map((value) => value?.students)
      //,
      // filter((students): students is string[] => !!students),
      // tap((students) => this._studentChanged$.next(students[0]))
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
      // skip(1),
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
      ),
      tap((value) => console.log(value))
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

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  _classChanged({ _, value }: { _: any; value: IClass }): void {
    if (!value || !value.name) {
      return;
    }
    this._classChanged$.next(value.name);
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
