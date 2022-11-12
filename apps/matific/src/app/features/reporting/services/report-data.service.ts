import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IActivityResponse,
  IClass,
} from '@matific/core/interfaces/common.interfaces';
import { environment } from 'apps/matific/src/environments/environment';
import { tap } from 'rxjs';
import { NuguActivitiesService } from './activities.service';
import { NuguClassService } from './class.service';

@Injectable({
  providedIn: 'root',
})
export class NuguReportDataService {
  static Activities_End_Point: string = '/production/matific-test-activities';
  static Classes_End_Point: string = 'matific-test-classes';

  private API_URL = environment.api;

  constructor(
    private _http: HttpClient,
    private _classService: NuguClassService,
    private _activitiesService: NuguActivitiesService
  ) {}

  fetchClasses() {
    return this._http
      .get<IClass[]>(
        `${this.API_URL}${NuguReportDataService.Classes_End_Point}`
      )
      .pipe(
        tap((classes) => {
          this._classService.setClasses(classes);
        })
      );
  }

  fetchActivities() {
    return this._http
      .get<IActivityResponse>(NuguReportDataService.Activities_End_Point)
      .pipe(
        tap((response) => {
          this._activitiesService.setActivities(JSON.parse(response.body));
        })
      );
  }
}
