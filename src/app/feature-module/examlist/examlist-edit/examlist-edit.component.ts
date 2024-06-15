import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService, examList, routes } from "src/app/core/core.index";

@Component({
  selector: "app-examlist-edit",
  templateUrl: "./examlist-edit.component.html",
  styleUrls: ["./examlist-edit.component.scss"],
})
export class ExamlistEditComponent implements OnInit {
  public routes = routes;
  public editId!:number;
  public editExamForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "examList";
  public lstExam!:Array<examList>
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadExam();
    //getting edit id of selected exam list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editexam form validation
    this.editExamForm = this.formBuilder.group({
      examName: ["", [Validators.required]],
      class: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      fees: [""],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
      eventDate: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get exam List  Api Call
  loadExam() {
    this.lstExam = this.dataService.examList
   }

  // Edit exam Submit call
  editExam() {
    const DateJoin = this.pipe.transform(
      this.editExamForm.value.eventDate,
      "d MMM y"
    );

    if (isNaN(this.editId)) {
      this.obj = {
        examName: this.editExamForm.value.examName,
        class: this.editExamForm.value.class,
        subject: this.editExamForm.value.subject,
        startTime: this.editExamForm.value.startTime,
        endTime: this.editExamForm.value.endTime,
        date: DateJoin,
        id: 1,
      };
    } else {
      this.obj = {
        examName: this.editExamForm.value.examName,
        class: this.editExamForm.value.class,
        subject: this.editExamForm.value.subject,
        startTime: this.editExamForm.value.startTime,
        endTime: this.editExamForm.value.endTime,
        date: DateJoin,
        id: this.editId,
      };
    }

    // if (this.editExamForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/examlist/examlist-main"]);
    //     this.toastr.success("Exam List edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to exam form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstExam.findIndex((item:examList) => {
        return item.id === 1;
      });
      const toSetValues = this.lstExam[index];
      this.editExamForm.patchValue({
        examName: toSetValues.examName,
        class: toSetValues.class,
        subject: toSetValues.subject,
        startTime: toSetValues.startTime,
        endTime: toSetValues.endTime,
        date: toSetValues.date,
        fees: "$120",
      });
      this.setDate = toSetValues.date;
    } else {
      const index = this.lstExam.findIndex((item:examList) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstExam[index];
      this.editExamForm.patchValue({
        examName: toSetValues.examName,
        class: toSetValues.class,
        subject: toSetValues.subject,
        startTime: toSetValues.startTime,
        endTime: toSetValues.endTime,
        date: toSetValues.date,
        fees: "$120",
      });
      this.setDate = toSetValues.date;
    }
  }
}
