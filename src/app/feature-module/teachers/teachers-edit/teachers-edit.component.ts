import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService, teachersList } from "src/app/core/core.index";

@Component({
  selector: "app-teachers-edit",
  templateUrl: "./teachers-edit.component.html",
  styleUrls: ["./teachers-edit.component.scss"],
})
export class TeachersEditComponent implements OnInit {
  public editId!:number;
  public editTeachersForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "teachersList";
  public lstTeachers!:Array<teachersList>;
  public obj!:object;
  public setDate = "2 Feb 2002";
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    // private srvModuleService: AllModulesService,
    private dataService: DataService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadTeachers();
    //getting edit id of selected teachers list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //edit teachers  form validation
    this.editTeachersForm = this.formBuilder.group({
      teacherId: ["", [Validators.required]],
      teacherName: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      address: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }
  // Get teachers List  Api Call
  loadTeachers() {
    this.lstTeachers = this.dataService.teachersList
    
  }

  // Edit teachers Submit call
  editTeachers() {
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editTeachersForm.value.teacherId,
        teacherName: this.editTeachersForm.value.name,
        mobileNumber: this.editTeachersForm.value.mobile,
        address: this.editTeachersForm.value.address,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editTeachersForm.value.teacherId,
        teacherName: this.editTeachersForm.value.teacherName,
        mobileNumber: this.editTeachersForm.value.mobile,
        address: this.editTeachersForm.value.address,
        id: this.editId,
      };
    }

    // if (this.editTeachersForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/layout/teachers/teachers-list"]);
    //     this.toastr.success("Teachers edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to teachers form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstTeachers.findIndex((item:teachersList) => {
        return item.id === 1;
      });
      const toSetValues = this.lstTeachers[index];
      this.editTeachersForm.patchValue({
        teacherId: toSetValues.idNo,
        name: toSetValues.name,
        gender: toSetValues.gender,
        mobile: toSetValues.mobileNumber,
        address: toSetValues.address,
      });
    } else {
      const index = this.lstTeachers.findIndex((item:teachersList) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstTeachers[index];
      this.editTeachersForm.patchValue({
        teacherId: toSetValues.idNo,
        name: toSetValues.name,
        gender: toSetValues.gender,
        mobile: toSetValues.mobileNumber,
        address: toSetValues.address,
      });
    }
  }
}
