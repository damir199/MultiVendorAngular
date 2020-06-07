import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { VendorRoutingModule } from "./vendor-routing.module";
import { AngularMaterialModule } from "../shared/shared/angular-material.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, VendorRoutingModule, AngularMaterialModule],
  exports: [DashboardComponent],
})
export class VendorModule {}
