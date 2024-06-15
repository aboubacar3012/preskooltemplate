import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeesComponent } from "./fees.component";
import { FeesMainComponent } from "./fees-main/fees-main.component";
import { FeesAddComponent } from "./fees-add/fees-add.component";
import { FeesEditComponent } from "./fees-edit/fees-edit.component";

const routes: Routes = [
  {
    path: "",
    component: FeesComponent,
    children: [
      { path: "fees-main", component: FeesMainComponent },
      { path: "fees-add", component: FeesAddComponent },
      { path: "fees-edit", component: FeesEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesRoutingModule {}
