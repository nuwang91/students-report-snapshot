import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { NuguAppRoutingModule } from './app-routing.module';
import { NuguAuthenticationModule } from './core/components/authentication/authentication.module';
import { NuguReportPageModule } from './features/reporting/pages/report-page/report-page.module';
import { NuguSpinnerModule } from './shared/components/spinner/spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NuguAppRoutingModule,
    NuguAuthenticationModule,
    ButtonModule,
    NuguReportPageModule,
    NuguSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
