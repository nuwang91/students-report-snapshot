import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import {
  AuthResponseData,
  NuguAuthenticationService,
} from '../../services/authentication.service';

@Component({
  selector: 'nugu-auth',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguAuthenticationComponent {
  _isLoginMode = true;

  _userForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private authenticationService: NuguAuthenticationService,
    private router: Router
  ) {}

  _onSwitchMode() {
    this._isLoginMode = !this._isLoginMode;
  }

  _login() {
    if (!this._userForm.valid) {
      return;
    }

    const email = this._userForm.value.user;
    const password = this._userForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this._isLoginMode) {
      authObs = this.authenticationService.login(email, password);
    } else {
      authObs = this.authenticationService.signup(email, password);
    }

    authObs.subscribe({
      next: (resData) => {
        console.log(resData);
        this.router.navigate(['/report']);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      },
    });

    this._userForm.reset();
  }
}
