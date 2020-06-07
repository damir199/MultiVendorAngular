import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "src/app/client/components/landing/landing.component";
import { DashboardComponent } from "src/app/vendor/components/dashboard/dashboard.component";
import { LoginComponent } from "src/app/auth/shared/login/login.component";
import { RegisterVendorComponent } from "src/app/auth/vendor/register-vendor/register-vendor.component";
import { RegisterClientComponent } from "src/app/auth/client/register-client/register-client.component";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { AngularMaterialModule } from "./angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterVendorComponent,
    RegisterClientComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [
    LandingComponent,
    LoginComponent,
    RegisterVendorComponent,
    RegisterClientComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
