import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SubjectsRoutingModule } from "./subjects-routing.module";
import { SubjectsComponent } from "./subjects.component";
import { SubjectsListComponent } from "./subjects-list/subjects-list.component";
import { SubjectsAddComponent } from "./subjects-add/subjects-add.component";
import { SubjectsEditComponent } from "./subjects-edit/subjects-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    SubjectsComponent,
    SubjectsListComponent,
    SubjectsAddComponent,
    SubjectsEditComponent,
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class SubjectsModule {}
