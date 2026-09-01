import { Injectable, inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { map, Observable, take } from 'rxjs';

import { NuguAuthenticationService } from '../services/authentication.service';
import { NuguSpinnerService } from '../services/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class NuguAuthGuardService {
  private _authenticationService = inject(NuguAuthenticationService);
  private _router = inject(Router);
  private _spinnerService = inject(NuguSpinnerService);

  canActivate():
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
        return this._router.createUrlTree(['/auth']);
      })
    );
  }
}
