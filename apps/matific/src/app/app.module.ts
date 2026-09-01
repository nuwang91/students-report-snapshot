import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

import { AppComponent } from './app.component';
import { NuguAppRoutingModule } from './app-routing.module';
import { NuguAuthenticationModule } from './core/components/authentication/authentication.module';
import { NuguReportPageModule } from './features/reporting/pages/report-page/report-page.module';
import { NuguSpinnerModule } from './shared/components/spinner/spinner.module';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        NuguAppRoutingModule,
        NuguAuthenticationModule,
        ButtonModule,
        NuguReportPageModule,
        NuguSpinnerModule], providers: [
          provideHttpClient(withXhr(), withInterceptorsFromDi()),
          providePrimeNG({ theme: { preset: Lara } }),
        ] })
export class AppModule {}
