import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "src/app/client/components/landing/landing.component";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { AngularMaterialModule } from "./angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LandingComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [LandingComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
