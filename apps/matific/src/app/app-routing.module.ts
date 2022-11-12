import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuguAuthenticationComponent } from './core/components/authentication/authentication.component';
import { NuguReportComponent } from './features/reporting/components/report/report.component';

const routes: Routes = [
  { path: 'auth', component: NuguAuthenticationComponent },
  { path: 'report', component: NuguReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NuguAppRoutingModule { }
