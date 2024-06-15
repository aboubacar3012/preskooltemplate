import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";
import { EventsMainComponent } from "./events-main/events-main.component";
import { EventsAddComponent } from "./events-add/events-add.component"; // a plugin
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FullCalendarModule } from "@fullcalendar/angular";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [EventsComponent, EventsMainComponent, EventsAddComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    SharedModule
  ],
})
export class EventsModule {}
