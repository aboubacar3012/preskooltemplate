import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeachersGridComponent } from './teachers-grid/teachers-grid.component';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component';
import { TeachersDetailsComponent } from './teachers-details/teachers-details.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersGridComponent,
    TeachersAddComponent,
    TeachersEditComponent,
    TeachersDetailsComponent,
    TeachersListComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ]
})
export class TeachersModule { }
