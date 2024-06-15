import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService, timetabledata } from "src/app/core/core.index";

@Component({
  selector: "app-timetable-edit",
  templateUrl: "./timetable-edit.component.html",
  styleUrls: ["./timetable-edit.component.scss"],
})
export class TimetableEditComponent implements OnInit {
  public editId!:number;
  public editTimetableForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "timeTable";
  public lstTimetable!: Array<timetabledata>;
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadTimetable();
    //getting edit id of selected timetable list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //edittimtable form validation
    this.editTimetableForm = this.formBuilder.group({
      teacherId: ["", [Validators.required]],
      name: ["", [Validators.required]],
      class: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      date: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get timetable List  Api Call
  loadTimetable() {
    this.lstTimetable = this.dataService.timeTable
  }

  // Edit timetable Submit call
  editTimetable() {
    const DateJoin = this.pipe.transform(
      this.editTimetableForm.value.date,
      "d MMM y"
    );
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editTimetableForm.value.teacherId,
        name: this.editTimetableForm.value.name,
        class: this.editTimetableForm.value.class,
        subject: this.editTimetableForm.value.subject,
        date: DateJoin,
        startTime: this.editTimetableForm.value.startTime,
        endTime: this.editTimetableForm.value.endTime,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editTimetableForm.value.teacherId,
        name: this.editTimetableForm.value.name,
        class: this.editTimetableForm.value.class,
        subject: this.editTimetableForm.value.subject,
        date: DateJoin,
        startTime: this.editTimetableForm.value.startTime,
        endTime: this.editTimetableForm.value.endTime,
        id: this.editId,
      };
    }

    // if (this.editTimetableForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/timetable/timetable-main"]);
    //     this.toastr.success("Timetable edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to timetable form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstTimetable.findIndex((item:timetabledata) => {
        return item.id === 1;
      });
      const toSetValues = this.lstTimetable[index];
      this.editTimetableForm.patchValue({
        teacherId: toSetValues.idNo,
        name: toSetValues.name,
        class: toSetValues.class,
        subject: toSetValues.subject,
        mobileNumber: toSetValues.date,
        startTime: toSetValues.startTime,
        endTime: toSetValues.endTime,
      });
      this.setDate = toSetValues.date;
    } else {
      const index = this.lstTimetable.findIndex((item:timetabledata) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstTimetable[index];
      this.editTimetableForm.patchValue({
        teacherId: toSetValues.idNo,
        name: toSetValues.name,
        class: toSetValues.class,
        subject: toSetValues.subject,
        mobileNumber: toSetValues.date,
        startTime: toSetValues.startTime,
        endTime: toSetValues.endTime,
      });
      this.setDate = toSetValues.date;
    }
  }
}
