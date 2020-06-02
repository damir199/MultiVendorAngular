import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './client/components/landing/landing.component';
import { DashboardComponent } from './vendor/components/dashboard/dashboard.component';
import { LoginComponent } from './auth/shared/login/login.component';
import { RegisterVendorComponent } from './auth/vendor/register-vendor/register-vendor.component';
import { RegisterClientComponent } from './auth/client/register-client/register-client.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    LoginComponent,
    RegisterVendorComponent,
    RegisterClientComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
