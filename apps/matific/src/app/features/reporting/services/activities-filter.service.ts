import { Injectable } from '@angular/core';
import {
  IActivity,
  IFullActivity,
} from '@matific/core/interfaces/common.interfaces';
import { NuguCommon } from '@matific/core/utils/common.library';
import { map, Observable, of, switchMap } from 'rxjs';
import { NuguActivitiesService } from './activities.service';
import { NuguClassService } from './class.service';

@Injectable({
  providedIn: 'root',
})
export class NuguActivitiesFilterService {
  constructor(
    private _classService: NuguClassService,
    private _activitiesService: NuguActivitiesService
  ) {}

  filter$(
    className: string,
    studentName: string,
    fromDate: Date | null,
    toDate: Date | null
  ): Observable<IFullActivity[]> {
    if (className && !studentName && !fromDate && !toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) =>
              this._getActivitiesForStudents(activities, students)
            ),
            map((activities) => this._transformToFullActivity(activities))
          );
        })
      );
    } else if (className && !studentName && fromDate && !toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) =>
              this._getActivitiesForStudents(activities, students)
            ),
            map((activities) => this._transformToFullActivity(activities)),
            map((fullActivities) =>
              this._dateFilter(fullActivities, fromDate, toDate)
            )
          );
        })
      );
    } else if (className && !studentName && !fromDate && toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) =>
              this._getActivitiesForStudents(activities, students)
            ),
            map((activities) => this._transformToFullActivity(activities)),
            map((fullActivities) =>
              this._dateFilter(fullActivities, fromDate, toDate)
            )
          );
        })
      );
    } else if (className && !studentName && fromDate && toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) =>
              this._getActivitiesForStudents(activities, students)
            ),
            map((activities) => this._transformToFullActivity(activities)),
            map((fullActivities) =>
              this._dateFilter(fullActivities, fromDate, toDate)
            )
          );
        })
      );
    } else if (className && studentName && !fromDate && !toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter(
            (activity) => activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities))
      );
    } else if (className && studentName && fromDate && !toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter(
            (activity) => activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities)),
        map((fullActivities) =>
          this._dateFilter(fullActivities, fromDate, toDate)
        )
      );
    } else if (className && studentName && !fromDate && toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter(
            (activity) => activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities)),
        map((fullActivities) =>
          this._dateFilter(fullActivities, fromDate, toDate)
        )
      );
    } else if (className && studentName && fromDate && toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter(
            (activity) => activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities)),
        map((fullActivities) =>
          this._dateFilter(fullActivities, fromDate, toDate)
        )
      );
    }

    return of([]);
  }

  private _transformToFullActivity(activities: IActivity[]): IFullActivity[] {
    // eslint-disable-next-line prefer-const
    let fullActivity: IFullActivity[] = [];
    activities.forEach((activity) => {
      for (let index = 0; index < activity.attempts.values.length; index++) {
        fullActivity.push({
          ...activity,
          date: activity.attempts.weeks[index],
          result: activity.attempts.values[index],
        });
      }
    });
    return fullActivity;
  }

  private _getActivitiesForStudents(
    activities: IActivity[],
    students: string[]
  ): IActivity[] {
    return activities.filter((activity) => students.includes(activity.student));
  }

  private _dateFilter(
    activities: IFullActivity[],
    fromDate: Date | null,
    toDate: Date | null
  ): IFullActivity[] {
    return activities.filter((activity) => {
      const activityDate = NuguCommon.getDate(activity.date);
      if (!!fromDate && !!toDate) {
        return activityDate >= fromDate && activityDate <= toDate;
      } else {
        if (toDate) {
          return activityDate <= toDate;
        } else if (fromDate) {
          return activityDate >= fromDate;
        }
      }
      return [];
    });
  }
}
