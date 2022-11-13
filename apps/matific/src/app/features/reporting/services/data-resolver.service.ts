import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {
  IActivityResponse,
  IClass,
} from '@matific/core/interfaces/common.interfaces';
import { Observable, zip } from 'rxjs';
import { NuguReportDataService } from './report-data.service';

@Injectable({ providedIn: 'root' })
export class NuguDataResolverService
  implements Resolve<Observable<[IActivityResponse, IClass[]]>>
{
  constructor(private _reportDataService: NuguReportDataService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<[IActivityResponse, IClass[]]> {
    return zip(
      this._reportDataService.fetchActivities(),
      this._reportDataService.fetchClasses()
    );
  }
}
