import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SportsComponent } from "./sports.component";
import { SportsMainComponent } from "./sports-main/sports-main.component";
import { SportsAddComponent } from "./sports-add/sports-add.component";
import { SportsEditComponent } from "./sports-edit/sports-edit.component";

const routes: Routes = [
  {
    path: "",
    component: SportsComponent,
    children: [
      { path: "sports-main", component: SportsMainComponent },
      { path: "sports-add", component: SportsAddComponent },
      { path: "sports-edit", component: SportsEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsRoutingModule {}
