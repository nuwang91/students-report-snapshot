import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuguAuthenticationComponent } from './core/components/authentication/authentication.component';

const routes: Routes = [
  { path: 'auth', component: NuguAuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NuguAppRoutingModule { }
