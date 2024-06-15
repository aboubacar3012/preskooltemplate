import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-salary",
  templateUrl: "./add-salary.component.html",
  styleUrls: ["./add-salary.component.scss"],
})
export class AddSalaryComponent implements OnInit {
  public addSalaryForm!: UntypedFormGroup;
  public url = "salaryList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add salary form validation
    this.addSalaryForm = this.formBuilder.group({
      staffId: ["", [Validators.required]],
      name: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      joiningDate: ["", [Validators.required]],
      amount: ["", [Validators.required]],
    });
  }

  // Add salary submit call
  addSalary() {
    const DateJoin = this.pipe.transform(
      this.addSalaryForm.value.joiningDate,
      "d MMM y"
    );
    this.obj  = {
      idNo: this.addSalaryForm.value.staffId,
      name: this.addSalaryForm.value.name,
      gender: this.addSalaryForm.value.gender,
      joiningDate: DateJoin,
      amount: this.addSalaryForm.value.amount,
      status: "Unpaid",
    };
    // if (this.addSalaryForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/accounts/salary"]);
    //     this.toastr.success("Salary added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
