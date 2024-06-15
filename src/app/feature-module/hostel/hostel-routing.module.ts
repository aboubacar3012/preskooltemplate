import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HostelComponent } from "./hostel.component";
import { HostelMainComponent } from "./hostel-main/hostel-main.component";
import { HostelAddComponent } from "./hostel-add/hostel-add.component";
import { HostelEditComponent } from "./hostel-edit/hostel-edit.component";

const routes: Routes = [
  {
    path: "",
    component: HostelComponent,
    children: [
      { path: "hostel-main", component: HostelMainComponent },
      { path: "hostel-add", component: HostelAddComponent },
      { path: "hostel-edit", component: HostelEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostelRoutingModule {}
