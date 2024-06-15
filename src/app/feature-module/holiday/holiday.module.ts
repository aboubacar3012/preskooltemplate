import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HolidayRoutingModule } from "./holiday-routing.module";
import { HolidayComponent } from "./holiday.component";
import { HolidayMainComponent } from "./holiday-main/holiday-main.component";
import { HolidayAddComponent } from "./holiday-add/holiday-add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [HolidayComponent, HolidayMainComponent, HolidayAddComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class HolidayModule {}
