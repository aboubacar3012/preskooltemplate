import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamlistComponent } from "./examlist.component";
import { ExamlistMainComponent } from "./examlist-main/examlist-main.component";
import { ExamlistAddComponent } from "./examlist-add/examlist-add.component";
import { ExamlistEditComponent } from "./examlist-edit/examlist-edit.component";

const routes: Routes = [
  {
    path: "",
    component: ExamlistComponent,
    children: [
      { path: "examlist-main", component: ExamlistMainComponent },
      { path: "examlist-add", component: ExamlistAddComponent },
      { path: "examlist-edit", component: ExamlistEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamlistRoutingModule {}
