import { Injectable } from '@angular/core';
import { IActivity } from '@matific/core/interfaces/common.interfaces';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NuguActivitiesService {
  private _activitiesChanged$: BehaviorSubject<IActivity[]> =
    new BehaviorSubject<IActivity[]>([]);
  activitiesChanged$: Observable<IActivity[]> = this._activitiesChanged$;
  private _activities: IActivity[] = [];

  setActivities(activities: IActivity[]): void {
    this._activities = activities;
    this._activitiesChanged$.next(this._activities.slice());
  }
}
