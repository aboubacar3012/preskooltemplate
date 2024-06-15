import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-library-add",
  templateUrl: "./library-add.component.html",
  styleUrls: ["./library-add.component.scss"],
})
export class LibraryAddComponent implements OnInit {
  public addLibraryForm!: UntypedFormGroup;
  public url = "library";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add library form validation
    this.addLibraryForm = this.formBuilder.group({
      bookId: ["", [Validators.required]],
      bookName: ["", [Validators.required]],
      language: ["", [Validators.required]],
      department: ["", [Validators.required]],
      class: ["", [Validators.required]],
      type: ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
  }

  // Add library submit call
  addLibrary() {
    // const DateJoin = this.pipe.transform(
    //   this.addLibraryForm.value.dob,
    //   "d MMM y"
    // );
    this.obj  = {
      idNo: this.addLibraryForm.value.bookId,
      name: this.addLibraryForm.value.bookName,
      language: this.addLibraryForm.value.language,
      department: this.addLibraryForm.value.department,
      class: this.addLibraryForm.value.class,
      type: this.addLibraryForm.value.type,
      status: this.addLibraryForm.value.status,
    };
    // if (this.addLibraryForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/library/library-main"]);
    //     this.toastr.success("Library added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
