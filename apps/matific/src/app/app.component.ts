import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { NuguAuthenticationService } from './core/services/authentication.service';
import { NuguSpinnerService } from './core/services/spinner.service';
import { NuguSpinnerComponent } from './shared/components/spinner/spinner.component';
import { Bind } from 'primeng/bind';
import { Ripple } from 'primeng/ripple';
import { ButtonDirective } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'nugu-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Bind, Ripple, ButtonDirective, RouterOutlet, AsyncPipe, NuguSpinnerComponent]
})
export class AppComponent implements OnInit {
  private _authenticationService = inject(NuguAuthenticationService);
  private _spinnerService = inject(NuguSpinnerService);

  title = 'matific';

  hasLoggedInUser$: Observable<boolean>;
  spinnerVisible$: Observable<boolean>;

  constructor() {
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
