import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { DefaultComponent } from "./default.component";

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DefaultModule {}
