import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransportRoutingModule } from "./transport-routing.module";
import { TransportComponent } from "./transport.component";
import { TransportMainComponent } from "./transport-main/transport-main.component";
import { TransportAddComponent } from "./transport-add/transport-add.component";
import { TransportEditComponent } from "./transport-edit/transport-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    TransportComponent,
    TransportMainComponent,
    TransportAddComponent,
    TransportEditComponent,
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class TransportModule {}
