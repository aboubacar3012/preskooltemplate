import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartmentsRoutingModule } from "./departments-routing.module";
import { DepartmentsComponent } from "./departments.component";
import { DepartmentsListComponent } from "./departments-list/departments-list.component";
import { DepartmentsAddComponent } from "./departments-add/departments-add.component";
import { DepartmentsEditComponent } from "./departments-edit/departments-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentsListComponent,
    DepartmentsAddComponent,
    DepartmentsEditComponent,
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class DepartmentsModule {}
