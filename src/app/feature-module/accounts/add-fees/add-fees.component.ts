import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-fees",
  templateUrl: "./add-fees.component.html",
  styleUrls: ["./add-fees.component.scss"],
})
export class AddFeesComponent implements OnInit {
  public addFeesForm!: UntypedFormGroup;
  public url = "feesCollection";
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
      gender: ["", [Validators.required]],
      feesAmount: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
    });
  }

  // Add fees submit call
  addFees() {
    const DateJoin = this.pipe.transform(
      this.addFeesForm.value.endDate,
      "d MMM y"
    );
    this.obj  = {
      idNo: this.addFeesForm.value.feesId,
      name: "Nathan Humphries",
      feesType: this.addFeesForm.value.feesType,
      gender: this.addFeesForm.value.gender,
      amount: this.addFeesForm.value.feesAmount,
      paidDate: DateJoin,
      status: "Paid",
    };
    // if (this.addFeesForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/accounts/fees-collection"]);
    //     this.toastr.success("Fees added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
