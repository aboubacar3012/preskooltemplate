import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService, departmentsList } from "src/app/core/core.index";

@Component({
  selector: "app-departments-edit",
  templateUrl: "./departments-edit.component.html",
  styleUrls: ["./departments-edit.component.scss"],
})
export class DepartmentsEditComponent implements OnInit {
  public editId!:number;
  public editDepartmentsForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "departmentsList";
  public lstDepartments!:Array<departmentsList>
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.departments();
    //getting edit id of selected department list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editdepartments form validation
    this.editDepartmentsForm = this.formBuilder.group({
      departmentId: ["", [Validators.required]],
      departmentName: ["", [Validators.required]],
      hod: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      noOfStudents: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get Departments List  Api Call
  departments() {
    this.lstDepartments = this.dataService.departmentsList
  }

  // Edit Departments Submit call
  // editDepartments() {
  //   let newDate = this.editDepartmentsForm.value.startDate.split("-");
  //   let year = newDate[0];
  //   if (isNaN(this.editId)) {
  //     this.obj = {
  //       idNo: this.editDepartmentsForm.value.departmentId,
  //       name: this.editDepartmentsForm.value.departmentName,
  //       hod: this.editDepartmentsForm.value.hod,
  //       startedYear: year,
  //       noOfStudents: this.editDepartmentsForm.value.noOfStudents,
  //       id: 1,
  //     };
  //   } else {
  //     this.obj = {
  //       idNo: this.editDepartmentsForm.value.departmentId,
  //       name: this.editDepartmentsForm.value.departmentName,
  //       hod: this.editDepartmentsForm.value.hod,
  //       startedYear: year,
  //       noOfStudents: this.editDepartmentsForm.value.noOfStudents,
  //       id: this.editId,
  //     };
  //   }

  //   if (this.editDepartmentsForm.valid) {
  //     this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
  //       this.router.navigate(["/departments/departments-list"]);
  //       this.toastr.success("Departments edited sucessfully...!", "Success");
  //     });
  //   } else {
  //     this.toastr.warning("Mandatory fields are required...!", "Warning");
  //   }
  // }

  // set values to departments form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstDepartments.findIndex((item:departmentsList) => {
        return item.id === 1;
      });
      const toSetValues = this.lstDepartments[index];
      this.editDepartmentsForm.patchValue({
        departmentId: toSetValues.idNo,
        departmentName: toSetValues.name,
        hod: toSetValues.hod,
        startDate: toSetValues.startedYear,
        noOfStudents: toSetValues.noOfStudents,
      });
      this.setDate = toSetValues.startedYear;
    } else {
      const index = this.lstDepartments.findIndex((item:departmentsList) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstDepartments[index];
      this.editDepartmentsForm.patchValue({
        departmentId: toSetValues.idNo,
        departmentName: toSetValues.name,
        hod: toSetValues.hod,
        startDate: toSetValues.startedYear,
        noOfStudents: toSetValues.noOfStudents,
      });
      this.setDate = toSetValues.startedYear;
    }
  }
}
