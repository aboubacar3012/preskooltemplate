import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-students-add",
  templateUrl: "./students-add.component.html",
  styleUrls: ["./students-add.component.scss"],
})
export class StudentsAddComponent implements OnInit {
  public addStudentsForm!: UntypedFormGroup;
  public url = "studentsList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add students form validation
    this.addStudentsForm = this.formBuilder.group({
      FirstName: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      rollNo: ["", [Validators.required]],
      emailAddress: ["", [Validators.required]],
    });
  }

  // Add students submit call
  addStudents() {
    const DateJoin = this.pipe.transform(
      this.addStudentsForm.value.dob,
      "d MMM y"
    );
    this.obj  = {
      idNo: this.addStudentsForm.value.rollNo,
      name: this.addStudentsForm.value.FirstName,
      dob: DateJoin,
      emailAddress: this.addStudentsForm.value.emailAddress,
    };
    // if (this.addStudentsForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/layout/students/students-list"]);
    //     this.toastr.success("Students added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
