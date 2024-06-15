import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-hostel-add",
  templateUrl: "./hostel-add.component.html",
  styleUrls: ["./hostel-add.component.scss"],
})
export class HostelAddComponent implements OnInit {
  public addHostelForm!: UntypedFormGroup;
  public url = "hostel";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add hostel form validation
    this.addHostelForm = this.formBuilder.group({
      block: ["", [Validators.required]],
      roomNo: ["", [Validators.required]],
      roomType: ["", [Validators.required]],
      noOfBeds: ["", [Validators.required]],
      costPerBed: ["", [Validators.required]],
      availability: ["", [Validators.required]],
    });
  }

  // Add hostel submit call
  addHostel() {
    // const DateJoin = this.pipe.transform(this.addHostelForm.value.dob, "d MMM y");
    this.obj  = {
      block: this.addHostelForm.value.block,
      roomNo: this.addHostelForm.value.roomNo,
      roomType: this.addHostelForm.value.roomType,
      noOfBeds: this.addHostelForm.value.noOfBeds,
      costPerBed: this.addHostelForm.value.costPerBed,
      availability: this.addHostelForm.value.availability,
    };
    // if (this.addHostelForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/hostel/hostel-main"]);
    //     this.toastr.success("Hostel added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
