import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsAddComponent } from './students-add/students-add.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsGridComponent } from './students-grid/students-grid.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: "",
    component: StudentsComponent,
    children: [
      { path: "students-list", component: StudentsListComponent },
      { path: "students-details", component: StudentsDetailsComponent },
      { path: "students-add", component: StudentsAddComponent },
      { path: "students-edit", component: StudentsEditComponent },
      { path: "students-grid", component: StudentsGridComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
