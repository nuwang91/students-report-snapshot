import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { map, Observable, take } from 'rxjs';

import { NuguAuthenticationService } from '../services/authentication.service';
import { NuguSpinnerService } from '../services/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class NuguAuthGuardService {
  constructor(
    private _authenticationService: NuguAuthenticationService,
    private router: Router,
    private _spinnerService: NuguSpinnerService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    this._spinnerService.spinning(true);
    return this._authenticationService.user$.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        this._spinnerService.spinning(false);
        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
