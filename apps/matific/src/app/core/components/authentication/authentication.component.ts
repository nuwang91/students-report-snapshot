import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import {
  AuthResponseData,
  NuguAuthenticationService,
} from '../../services/authentication.service';
import { Bind } from 'primeng/bind';
import { InputText } from 'primeng/inputtext';
import { NgClass, AsyncPipe } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
    selector: 'nugu-auth',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, Bind, InputText, NgClass, Button, AsyncPipe]
})
export class NuguAuthenticationComponent {
  private _authenticationService = inject(NuguAuthenticationService);
  private router = inject(Router);

  _isLoginMode: boolean = true;

  private _error: BehaviorSubject<string> = new BehaviorSubject<string>('');
  _errorMessage: Observable<string> = this._error;

  _userForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  _onSwitchMode(): void {
    this._isLoginMode = !this._isLoginMode;
  }

  _login(): void {
    if (!this._userForm.valid) {
      return;
    }

    const email = this._userForm.value.user;
    const password = this._userForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this._isLoginMode) {
      authObs = this._authenticationService.login(email, password);
    } else {
      authObs = this._authenticationService.signup(email, password);
    }

    authObs.subscribe({
      next: () => {
        this.router.navigate(['/report']);
      },
      error: (errorMessage) => {
        this._error.next(errorMessage);
      },
    });

    this._userForm.reset();
  }
}
