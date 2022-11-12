import { Injectable } from '@angular/core';
import { IActivities } from '@matific/core/interfaces/common.interfaces';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuguActivitiesService {

  private _activitiesChanged: Subject<IActivities[]> = new Subject<IActivities[]>();
  activitiesChanged: Observable<IActivities[]> = this._activitiesChanged;
  private _activities: IActivities[] = [];


  setActivities(activities: IActivities[]): void {
    this._activities = activities;
    this._activitiesChanged.next(this._activities.slice());
  }

}
