import { Component, OnInit } from '@angular/core';

import { NuguAuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'nugu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matific';

  constructor(private authenticationService: NuguAuthenticationService) {}

  ngOnInit() {
    this.authenticationService.autoLogin();
  }
}
