import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { DataService, studentsList } from 'src/app/core/core.index';
@Component({
  selector: "app-students-edit",
  templateUrl: "./students-edit.component.html",
  styleUrls: ["./students-edit.component.scss"],
})
export class StudentsEditComponent implements OnInit {
  public editId!:number;
  public editStudentsForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "studentsList";
  public lstStudents!:Array<studentsList>
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    // private srvModuleService: AllModulesService,
    private dataService: DataService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadStudents();
    //getting edit id of selected student list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editstudents form validation
    this.editStudentsForm = this.formBuilder.group({
      FirstName: ["", [Validators.required]],
      rollNo: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      class: ["", [Validators.required]],
      mobileNumber: ["", [Validators.required]],
      fathersName: ["", [Validators.required]],
      emailAddress: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get Students List  Api Call
  loadStudents() {
    this.lstStudents = this.dataService.studentsList
    
  }

  // Edit students Submit call
  editStudents() {
    const DateJoin = this.pipe.transform(
      this.editStudentsForm.value.dob,
      "d MMM y"
    );
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editStudentsForm.value.rollNo,
        name: this.editStudentsForm.value.FirstName,
        class: this.editStudentsForm.value.class,
        dob: DateJoin,
        parentName: this.editStudentsForm.value.fathersName,
        mobileNumber: this.editStudentsForm.value.mobileNumber,
        emailAddress: this.editStudentsForm.value.emailAddress,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editStudentsForm.value.studentId,
        name: this.editStudentsForm.value.FirstName,
        class: this.editStudentsForm.value.class,
        dob: DateJoin,
        parentName: this.editStudentsForm.value.fathersName,
        mobileNumber: this.editStudentsForm.value.mobileNumber,
        address: this.editStudentsForm.value.address,
        id: this.editId,
      };
    }

    // if (this.editStudentsForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/layout/students/students-list"]);
    //     this.toastr.success("Students edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to students form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstStudents.findIndex((item:studentsList) => {
        return item.id === 1;
      });
      const toSetValues = this.lstStudents[index];
      this.editStudentsForm.patchValue({
        studentId: toSetValues.idNo,
        FirstName: toSetValues.name,
        class: toSetValues.class,
        dob: toSetValues.dob,
        mobileNumber: toSetValues.mobileNumber,
        address: toSetValues.address,
        fathersName: toSetValues.parentName,
      });
      this.setDate = toSetValues.dob;
    } else {
      const index = this.lstStudents.findIndex((item:studentsList) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstStudents[index];
      this.editStudentsForm.patchValue({
        studentId: toSetValues.idNo,
        FirstName: toSetValues.name,
        class: toSetValues.class,
        dob: toSetValues.dob,
        mobileNumber: toSetValues.mobileNumber,
        address: toSetValues.address,
        fathersName: toSetValues.parentName,
      });
      this.setDate = toSetValues.dob;
    }
  }
}

