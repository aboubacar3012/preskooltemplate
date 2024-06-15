import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-subjects-add",
  templateUrl: "./subjects-add.component.html",
  styleUrls: ["./subjects-add.component.scss"],
})
export class SubjectsAddComponent implements OnInit {
  public addSubjectsForm!: UntypedFormGroup;
  public url = "subjectsList";
  public pipe = new DatePipe("en-US");
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add subjects form validation
    this.addSubjectsForm = this.formBuilder.group({
      subjectId: ["", [Validators.required]],
      subjectName: ["", [Validators.required]],
      class: ["", [Validators.required]],
    });
  }

  // Add subjects submit call
  // addSubjects() {
  //   let obj = {
  //     idNo: this.addSubjectsForm.value.subjectId,
  //     name: this.addSubjectsForm.value.subjectName,
  //     class: this.addSubjectsForm.value.class,
  //   };
  //   if (this.addSubjectsForm.valid) {
  //     this.srvModuleService.add(obj, this.url).subscribe((data) => {
  //       this.router.navigate(["/subjects/subjects-list"]);
  //       this.toastr.success("Subjects added sucessfully...!", "Success");
  //     });
  //   } else {
  //     this.toastr.warning("Mandatory fields are required...!", "Warning");
  //   }
  // }
}
