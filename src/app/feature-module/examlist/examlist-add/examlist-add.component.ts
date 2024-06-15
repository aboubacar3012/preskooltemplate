import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { routes } from "src/app/core/core.index";

@Component({
  selector: "app-examlist-add",
  templateUrl: "./examlist-add.component.html",
  styleUrls: ["./examlist-add.component.scss"],
})
export class ExamlistAddComponent implements OnInit {
  public routes = routes;
  public addExamForm!: UntypedFormGroup;
  public url = "examList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add exam form validation
    this.addExamForm = this.formBuilder.group({
      examName: ["", [Validators.required]],
      class: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      fees: [""],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
      eventDate: ["", [Validators.required]],
    });
  }

  // Add exam submit call
  addExam() {
    const DateJoin = this.pipe.transform(
      this.addExamForm.value.eventDate,
      "d MMM y"
    );
    this.obj  = {
      examName: this.addExamForm.value.examName,
      class: this.addExamForm.value.class,
      subject: this.addExamForm.value.subject,
      startTime: this.addExamForm.value.startTime,
      endTime: this.addExamForm.value.endTime,
      date: DateJoin,
    };
    // if (this.addExamForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/examlist/examlist-main"]);
    //     this.toastr.success("Examlist added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
