import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService, hostel } from "src/app/core/core.index";

@Component({
  selector: "app-hostel-edit",
  templateUrl: "./hostel-edit.component.html",
  styleUrls: ["./hostel-edit.component.scss"],
})
export class HostelEditComponent implements OnInit {
  public editId!:number;
  public editHostelForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "hostel";
  public lstHostel!:Array<hostel>;
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadHostel();
    //getting edit id of selected hostel list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //edithostel form validation
    this.editHostelForm = this.formBuilder.group({
      block: ["", [Validators.required]],
      roomNo: ["", [Validators.required]],
      roomType: ["", [Validators.required]],
      noOfBeds: ["", [Validators.required]],
      costPerBed: ["", [Validators.required]],
      availability: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get hostel List  Api Call
  loadHostel() {
    this.lstHostel = this.dataService.hostel
  }

  // Edit hostel Submit call
  editHostel() {
    if (isNaN(this.editId)) {
      this.obj = {
        block: this.editHostelForm.value.block,
        roomNo: this.editHostelForm.value.roomNo,
        roomType: this.editHostelForm.value.roomType,
        noOfBeds: this.editHostelForm.value.noOfBeds,
        costPerBed: this.editHostelForm.value.costPerBed,
        availability: this.editHostelForm.value.availability,
        id: 1,
      };
    } else {
      this.obj = {
        block: this.editHostelForm.value.block,
        roomNo: this.editHostelForm.value.roomNo,
        roomType: this.editHostelForm.value.roomType,
        noOfBeds: this.editHostelForm.value.noOfBeds,
        costPerBed: this.editHostelForm.value.costPerBed,
        availability: this.editHostelForm.value.availability,
        id: this.editId,
      };
    }

    // if (this.editHostelForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/hostel/hostel-main"]);
    //     this.toastr.success("Hostel edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to hostel form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstHostel.findIndex((item:hostel) => {
        return item.id === 1;
      });
      const toSetValues = this.lstHostel[index];
      this.editHostelForm.patchValue({
        block: toSetValues.block,
        roomNo: toSetValues.roomNo,
        roomType: toSetValues.roomType,
        noOfBeds: toSetValues.noOfBeds,
        costPerBed: toSetValues.costPerBed,
        availability: toSetValues.availability,
      });
    } else {
      const index = this.lstHostel.findIndex((item:hostel) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstHostel[index];
      this.editHostelForm.patchValue({
        block: toSetValues.block,
        roomNo: toSetValues.roomNo,
        roomType: toSetValues.roomType,
        noOfBeds: toSetValues.noOfBeds,
        costPerBed: toSetValues.costPerBed,
        availability: toSetValues.availability,
      });
    }
  }
}
