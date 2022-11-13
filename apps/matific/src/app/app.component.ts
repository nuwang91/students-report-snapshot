import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { NuguAuthenticationService } from './core/services/authentication.service';
import { NuguSpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'nugu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matific';

  hasLoggedInUser$: Observable<boolean>;
  spinnerVisible$: Observable<boolean>;

  constructor(
    private _authenticationService: NuguAuthenticationService,
    private _spinnerService: NuguSpinnerService
  ) {
    this.spinnerVisible$ = this._spinnerService.spinnerVisible$;
  }

  ngOnInit() {
    this._authenticationService.autoLogin();
    this.hasLoggedInUser$ = this._authenticationService.user$.pipe(
      map((user) => !!user)
    );
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
