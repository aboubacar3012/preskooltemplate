import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-teachers-add",
  templateUrl: "./teachers-add.component.html",
  styleUrls: ["./teachers-add.component.scss"],
})
export class TeachersAddComponent implements OnInit {
  public addTeachersForm!: UntypedFormGroup;
  public url = "teachersList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    // private srvModuleService: AllModulesService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Add teachers form validation
    this.addTeachersForm = this.formBuilder.group({
      teacherId: ["", [Validators.required]],
      teacherName: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      address: ["", [Validators.required]],
    });
  }
  // Add teachers submit call
  addTeachers() {
    this.obj  = {
      idNo: this.addTeachersForm.value.teacherId,
      name: this.addTeachersForm.value.teacherName,
      class: "11",
      subject: "Botony",
      section: "B",
      mobileNumber: this.addTeachersForm.value.mobile,
      address: this.addTeachersForm.value.address,
    };
    // if (this.addTeachersForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/layout/teachers/teachers-list"]);
    //     this.toastr.success("Teachers added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}

