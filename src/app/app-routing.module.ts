import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { LandingComponent } from "./client/components/landing/landing.component";
import { VendorModule } from "./vendor/vendor.module";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: LandingComponent,
      },
      {
        path: "vendor",
        loadChildren: () =>
          import("./vendor/vendor.module").then((m) => m.VendorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
