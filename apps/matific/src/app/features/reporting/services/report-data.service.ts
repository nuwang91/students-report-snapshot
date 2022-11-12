import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivities, IClass } from '@matific/core/interfaces/common';
import { tap } from 'rxjs';
import { ClassService } from './class.service';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {

  constructor(private _http: HttpClient, private _classService: ClassService) {}

  fetchClasses() {
    return this._http
      .get<IClass[]>(
        'https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-classes'
      ).pipe(
        tap(classes => {
          this._classService.setClasses(classes);
        })
      )
  }

  fetchActivities() {
    return this._http
      .get<IActivities[]>(
        'https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-activities'
      );
  }
}
