import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsAddComponent } from './students-add/students-add.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsGridComponent } from './students-grid/students-grid.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsAddComponent,
    StudentsDetailsComponent,
    StudentsEditComponent,
    StudentsGridComponent,
    StudentsListComponent,
    
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
