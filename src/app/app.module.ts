import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './client/components/landing/landing.component';
import { DashboardComponent } from './vendor/components/dashboard/dashboard.component';
import { LoginComponent } from './auth/shared/login/login.component';
import { RegisterVendorComponent } from './auth/vendor/register-vendor/register-vendor.component';
import { RegisterClientComponent } from './auth/client/register-client/register-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    LoginComponent,
    RegisterVendorComponent,
    RegisterClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
