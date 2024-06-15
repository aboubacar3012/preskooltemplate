import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HostelRoutingModule } from "./hostel-routing.module";
import { HostelComponent } from "./hostel.component";
import { HostelMainComponent } from "./hostel-main/hostel-main.component";
import { HostelAddComponent } from "./hostel-add/hostel-add.component";
import { HostelEditComponent } from "./hostel-edit/hostel-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    HostelComponent,
    HostelMainComponent,
    HostelAddComponent,
    HostelEditComponent,
  ],
  imports: [
    CommonModule,
    HostelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class HostelModule {}
