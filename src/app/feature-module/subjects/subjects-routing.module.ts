import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { SubjectsAddComponent } from './subjects-add/subjects-add.component';
import { SubjectsEditComponent } from './subjects-edit/subjects-edit.component';

const routes: Routes = [
  {
    path: "",
    component: SubjectsComponent,
    children: [
      { path: "subjects-list", component: SubjectsListComponent },
      { path: "subjects-add", component: SubjectsAddComponent },
      { path: "subjects-edit", component: SubjectsEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
