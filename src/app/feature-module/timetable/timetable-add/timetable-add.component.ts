import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-timetable-add",
  templateUrl: "./timetable-add.component.html",
  styleUrls: ["./timetable-add.component.scss"],
})
export class TimetableAddComponent implements OnInit {
  public addTimetableForm!: UntypedFormGroup;
  public url = "timeTable";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add timetable form validation
    this.addTimetableForm = this.formBuilder.group({
      teacherId: ["", [Validators.required]],
      name: ["", [Validators.required]],
      class: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      date: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
    });
  }

  // Add timetable submit call
  addTimetable() {
    const DateJoin = this.pipe.transform(
      this.addTimetableForm.value.date,
      "d MMM y"
    );
    this.obj  = {
      idNo: this.addTimetableForm.value.teacherId,
      name: this.addTimetableForm.value.name,
      class: this.addTimetableForm.value.class,
      subject: this.addTimetableForm.value.subject,
      date: DateJoin,
      startTime: this.addTimetableForm.value.startTime,
      endTime: this.addTimetableForm.value.endTime,
    };
    // if (this.addTimetableForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/timetable/timetable-main"]);
    //     this.toastr.success("Timetable added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
