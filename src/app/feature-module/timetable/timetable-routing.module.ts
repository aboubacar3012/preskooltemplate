import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimetableComponent } from "./timetable.component";
import { TimetableMainComponent } from "./timetable-main/timetable-main.component";
import { TimetableAddComponent } from "./timetable-add/timetable-add.component";
import { TimetableEditComponent } from "./timetable-edit/timetable-edit.component";

const routes: Routes = [
  {
    path: "",
    component: TimetableComponent,
    children: [
      { path: "timetable-main", component: TimetableMainComponent },
      { path: "timetable-add", component: TimetableAddComponent },
      { path: "timetable-edit", component: TimetableEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimetableRoutingModule {}
