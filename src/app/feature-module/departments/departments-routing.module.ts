import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsAddComponent } from './departments-add/departments-add.component';
import { DepartmentsEditComponent } from './departments-edit/departments-edit.component';

const routes: Routes = [
  {
    path: "",
    component: DepartmentsComponent,
    children: [
      { path: "departments-list", component: DepartmentsListComponent },
      { path: "departments-add", component: DepartmentsAddComponent },
      { path: "departments-edit", component: DepartmentsEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
