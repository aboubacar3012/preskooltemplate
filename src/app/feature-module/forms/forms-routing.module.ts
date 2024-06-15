import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms.component";
import { BasicInputsComponent } from "./basic-inputs/basic-inputs.component";
import { HorizontalFormComponent } from "./horizontal-form/horizontal-form.component";
import { VerticalFormComponent } from "./vertical-form/vertical-form.component";
import { FormMaskComponent } from "./form-mask/form-mask.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { InputGroupsComponent } from "./input-groups/input-groups.component";

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
    children: [
      { path: "basicinputs", component: BasicInputsComponent },
      { path: "horizontalform", component: HorizontalFormComponent },
      { path: "verticalform", component: VerticalFormComponent },
      { path: "formmask", component: FormMaskComponent },
      { path: "formvalidation", component: FormValidationComponent },
      { path: "inputgroups", component: InputGroupsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
