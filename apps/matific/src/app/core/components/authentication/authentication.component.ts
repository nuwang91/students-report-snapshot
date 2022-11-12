import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { AuthResponseData, NuguAuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'nugu-auth',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguAuthenticationComponent {
  isLoginMode = true;

  userForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(
    private authenticationService: NuguAuthenticationService
  ) {}

  login() {
    if (!this.userForm.valid) {
      return;
    }

    const email = this.userForm.value.user;
    const password = this.userForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authenticationService.login(email, password);
    } else {
      authObs = this.authenticationService.signup(email, password);
    }

    authObs.subscribe({
      next: (resData) => {
        console.log(resData);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      },
    });

    this.userForm.reset();
  }
}
