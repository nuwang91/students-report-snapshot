import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NuguAppRoutingModule } from './app-routing.module';
import { NuguAuthenticationModule } from './core/components/authentication/authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NuguAppRoutingModule,
    NuguAuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
