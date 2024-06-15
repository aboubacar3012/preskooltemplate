import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HolidayMainComponent } from "./holiday-main/holiday-main.component";
import { HolidayComponent } from "./holiday.component";
import { HolidayAddComponent } from "./holiday-add/holiday-add.component";

const routes: Routes = [
  {
    path: "",
    component: HolidayComponent,
    children: [
      { path: "holiday-main", component: HolidayMainComponent },
      { path: "holiday-add", component: HolidayAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayRoutingModule {}
