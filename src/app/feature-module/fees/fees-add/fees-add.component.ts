import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { routes } from "src/app/core/core.index";

@Component({
  selector: "app-fees-add",
  templateUrl: "./fees-add.component.html",
  styleUrls: ["./fees-add.component.scss"],
})
export class FeesAddComponent implements OnInit {
  public addFeesForm!: UntypedFormGroup;
  public routes = routes;
  public url = "feesList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add fees form validation
    this.addFeesForm = this.formBuilder.group({
      feesId: ["", [Validators.required]],
      feesType: ["", [Validators.required]],
      gender: [""],
      feesAmount: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
    });
  }

  // Add fees submit call
  addFees() {
    const startDate = this.pipe.transform(
      this.addFeesForm.value.startDate,
      "d MMM y"
    );
    const endDate = this.pipe.transform(
      this.addFeesForm.value.endDate,
      "d MMM y"
    );
    this.obj  = {
      idNo: this.addFeesForm.value.feesId,
      feesName: this.addFeesForm.value.feesType,
      class: "6",
      amount: this.addFeesForm.value.feesAmount,
      startDate: startDate,
      endDate: endDate,
    };
    // if (this.addFeesForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/fees/fees-main"]);
    //     this.toastr.success("Fees added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
