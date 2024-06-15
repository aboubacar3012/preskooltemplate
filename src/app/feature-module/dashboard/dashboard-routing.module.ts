import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardMainComponent } from "./dashboard-main/dashboard-main.component";
import { DashboardTeacherComponent } from "./dashboard-teacher/dashboard-teacher.component";
import { DashboardStudentComponent } from "./dashboard-student/dashboard-student.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "main", component: DashboardMainComponent },
      { path: "teacher", component: DashboardTeacherComponent },
      { path: "student", component: DashboardStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
