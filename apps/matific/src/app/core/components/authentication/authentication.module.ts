import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { NuguAuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [NuguAuthenticationComponent],
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  exports: [NuguAuthenticationComponent],
})
export class NuguAuthenticationModule {}
