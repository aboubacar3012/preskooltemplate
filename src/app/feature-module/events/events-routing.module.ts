import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events.component";
import { EventsMainComponent } from "./events-main/events-main.component";
import { EventsAddComponent } from "./events-add/events-add.component";

const routes: Routes = [
  {
    path: "",
    component: EventsComponent,
    children: [
      { path: "events-main", component: EventsMainComponent },
      { path: "events-add", component: EventsAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
