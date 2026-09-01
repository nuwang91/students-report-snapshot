import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable, tap, zip } from 'rxjs';

import {
  IActivityResponse,
  IClass,
} from '@matific/core/interfaces/common.interfaces';
import { NuguSpinnerService } from '@matific/core/services/spinner.service';
import { NuguReportDataService } from './report-data.service';

@Injectable({ providedIn: 'root' })
export class NuguDataResolverService
  
{
  constructor(
    private _reportDataService: NuguReportDataService,
    private _spinnerService: NuguSpinnerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<[IActivityResponse, IClass[]]> {
    this._spinnerService.spinning(true);
    return zip(
      this._reportDataService.fetchActivities$(),
      this._reportDataService.fetchClasses$()
    ).pipe(tap(() => this._spinnerService.spinning(false)));
  }
}
