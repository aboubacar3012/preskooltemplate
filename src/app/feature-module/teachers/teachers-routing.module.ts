import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersDetailsComponent } from './teachers-details/teachers-details.component';
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component';
import { TeachersGridComponent } from './teachers-grid/teachers-grid.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersComponent } from './teachers.component';

const routes: Routes = [{ 
path: '', 
component: TeachersComponent,
children: [
  { path: "teachers-list", component: TeachersListComponent },
  { path: "teachers-details", component: TeachersDetailsComponent },
  { path: "teachers-add", component: TeachersAddComponent },
  { path: "teachers-edit", component: TeachersEditComponent },
  { path: "teachers-grid", component: TeachersGridComponent }
], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
