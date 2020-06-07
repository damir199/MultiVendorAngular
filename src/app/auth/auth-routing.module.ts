import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterVendorComponent } from "./vendor/register-vendor/register-vendor.component";
import { RegisterClientComponent } from "./client/register-client/register-client.component";
import { LoginComponent } from "./shared/login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register-user",
    component: RegisterClientComponent,
  },
  {
    path: "register-vendor",
    component: RegisterVendorComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
