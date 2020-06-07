import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterClientComponent } from "./client/register-client/register-client.component";
import { RegisterVendorComponent } from "./vendor/register-vendor/register-vendor.component";
import { AngularMaterialModule } from "../shared/shared/angular-material.module";
import { LoginComponent } from "./shared/login/login.component";

@NgModule({
  declarations: [
    RegisterClientComponent,
    RegisterVendorComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    AuthRoutingModule,
  ],
  exports: [RegisterClientComponent, RegisterVendorComponent, LoginComponent],
})
export class AuthModule {}
