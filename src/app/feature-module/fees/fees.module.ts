import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeesRoutingModule } from "./fees-routing.module";
import { FeesComponent } from "./fees.component";
import { FeesMainComponent } from "./fees-main/fees-main.component";
import { FeesAddComponent } from "./fees-add/fees-add.component";
import { FeesEditComponent } from "./fees-edit/fees-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    FeesComponent,
    FeesMainComponent,
    FeesAddComponent,
    FeesEditComponent,
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class FeesModule {}
