import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlankpageComponent } from "./blankpage.component";
import { BlankpageMainComponent } from "./blankpage-main/blankpage-main.component";

const routes: Routes = [
  {
    path: "",
    component: BlankpageComponent,
    children: [{ path: "blankpage-main", component: BlankpageMainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankpageRoutingModule {}
