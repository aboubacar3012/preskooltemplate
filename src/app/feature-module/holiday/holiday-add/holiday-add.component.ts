import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-holiday-add",
  templateUrl: "./holiday-add.component.html",
  styleUrls: ["./holiday-add.component.scss"],
})
export class HolidayAddComponent implements OnInit {
  public addHolidayForm!: UntypedFormGroup;
  public url = "holidayList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add holiday form validation
    this.addHolidayForm = this.formBuilder.group({
      holidayId: ["", [Validators.required]],
      holidayName: ["", [Validators.required]],
      holidayType: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
    });
  }

  // Add holiday submit call
  addHoliday() {
    const startDate = this.pipe.transform(
      this.addHolidayForm.value.startDate,
      "d MMM y"
    );
    const EndDate = this.pipe.transform(
      this.addHolidayForm.value.endDate,
      "d MMM y"
    );
    this.obj  = {
      idNo: this.addHolidayForm.value.holidayId,
      holidayName: this.addHolidayForm.value.holidayName,
      type: this.addHolidayForm.value.holidayType,
      startDate: startDate,
      endDate: EndDate,
    };
    // if (this.addHolidayForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/holiday/holiday-main"]);
    //     this.toastr.success("Holiday added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
