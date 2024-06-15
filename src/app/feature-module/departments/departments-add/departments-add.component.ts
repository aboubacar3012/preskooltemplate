import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-departments-add",
  templateUrl: "./departments-add.component.html",
  styleUrls: ["./departments-add.component.scss"],
})
export class DepartmentsAddComponent implements OnInit {
  public addDepartmentsForm!: UntypedFormGroup;
  public url = "departmentsList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}
  ngOnInit() {
    // Add departments form validation
    this.addDepartmentsForm = this.formBuilder.group({
      departmentId: ["", [Validators.required]],
      departmentName: ["", [Validators.required]],
      hod: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      noOfStudents: ["", [Validators.required]],
    });
  }

  // Add departments submit call
  addDepartments() {
    const newDate = this.addDepartmentsForm.value.startDate.split("-");
    const year = newDate[0];
    this.obj  = {
      idNo: this.addDepartmentsForm.value.departmentId,
      name: this.addDepartmentsForm.value.departmentName,
      hod: this.addDepartmentsForm.value.hod,
      startedYear: year,
      noOfStudents: this.addDepartmentsForm.value.noOfStudents,
    };
    // if (this.addDepartmentsForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data:any) => {
    //     this.router.navigate(["/departments/departments-list"]);
    //     this.toastr.success("Departments added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
