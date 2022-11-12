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

  filter$(className: string, studentName: string, fromDate: Date | null, toDate: Date | null): Observable<IFullActivity[]> {
    if (!className) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => this._transformToFullActivity(activities))
      );
    }

    if (className && !studentName && !fromDate && !toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) => {
              return activities.filter((activity) =>
                students.includes(activity.student)
              );
            }),
            map((activities) => this._transformToFullActivity(activities))
          );
        })
      );
    } else if(className && !studentName && fromDate && !toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) => {
              return activities.filter((activity) =>
                students.includes(activity.student)
              );
            }),
            map((activities) => this._transformToFullActivity(activities)),
            map((fullActivities) => {
              return fullActivities.filter((activity) => {
                const activityDate = NuguCommon.getDate(activity.date);
                return activityDate >= fromDate;
              });
            })
          );
        })
      );
    } else if(className && !studentName && !fromDate && toDate) {
      return this._classService.getAllStudentsInClass$(className).pipe(
        switchMap((students) => {
          return this._activitiesService.activitiesChanged$.pipe(
            map((activities) => {
              return activities.filter((activity) =>
                students.includes(activity.student)
              );
            }),
            map((activities) => this._transformToFullActivity(activities)),
            map((fullActivities) => {
              return fullActivities.filter((activity) => {
                const activityDate = NuguCommon.getDate(activity.date);
                return activityDate <= toDate;
              });
            })
          );
        })
      );
    } else if(className && studentName && !fromDate && !toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter((activity) =>
            activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities))
      );
    } else if(className && studentName && fromDate && !toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter((activity) =>
            activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities)),
        map((fullActivities) => {
          return fullActivities.filter((activity) => {
            const activityDate = NuguCommon.getDate(activity.date);
            return activityDate >= fromDate;
          });
        })
      );
    } else if(className && studentName && !fromDate && toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter((activity) =>
            activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities)),
        map((fullActivities) => {
          return fullActivities.filter((activity) => {
            const activityDate = NuguCommon.getDate(activity.date);
            return activityDate <= toDate;
          });
        })
      );
    } else if(className && studentName && fromDate && toDate) {
      return this._activitiesService.activitiesChanged$.pipe(
        map((activities) => {
          return activities.filter((activity) =>
            activity.student === studentName
          );
        }),
        map((activities) => this._transformToFullActivity(activities)),
        map((fullActivities) => {
          return fullActivities.filter((activity) => {
            const activityDate = NuguCommon.getDate(activity.date);
            return activityDate >= fromDate && activityDate <= toDate;
          });
        })
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
}
