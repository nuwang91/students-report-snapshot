import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuguAuthenticationComponent } from './core/components/authentication/authentication.component';
import { NuguAuthGuardService } from './core/guards/auth.guard.service';
import { NuguReportPageComponent } from './features/reporting/pages/report-page/report-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'report', component: NuguReportPageComponent, canActivate: [NuguAuthGuardService] },
  { path: 'auth', component: NuguAuthenticationComponent },
  { path: '**', redirectTo: '/report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NuguAppRoutingModule { }
