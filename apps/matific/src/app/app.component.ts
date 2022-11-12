import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { NuguAuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'nugu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matific';

  hasLoggedInUser$: Observable<boolean>;

  constructor(private authenticationService: NuguAuthenticationService) {}

  ngOnInit() {
    this.authenticationService.autoLogin();
    this.hasLoggedInUser$ = this.authenticationService.user$.pipe(map((user) => !!user));
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
