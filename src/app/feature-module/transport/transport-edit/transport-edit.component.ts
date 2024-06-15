import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService, data, routes } from "src/app/core/core.index";

@Component({
  selector: "app-transport-edit",
  templateUrl: "./transport-edit.component.html",
  styleUrls: ["./transport-edit.component.scss"],
})
export class TransportEditComponent implements OnInit {
  public routes = routes;
  public editId!:number;
  public editTransportForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "transport";
  public lstTransport!:Array<data>;
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadTransport();
    //getting edit id of selected transport list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //edittransport form validation
    this.editTransportForm = this.formBuilder.group({
      routeName: ["", [Validators.required]],
      vehicleNumber: ["", [Validators.required]],
      driverName: ["", [Validators.required]],
      licenseNumber: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      driverAddress: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get transport List  Api Call
  loadTransport() {
    this.lstTransport = this.dataService.transport
  }

  // Edit transport Submit call
  editTransport() {
    if (isNaN(this.editId)) {
      this.obj = {
        routeName: this.editTransportForm.value.routeName,
        vehicleNumber: this.editTransportForm.value.vehicleNumber,
        driverName: this.editTransportForm.value.driverName,
        driverLicense: this.editTransportForm.value.licenseNumber,
        contactNumber: this.editTransportForm.value.contactNumber,
        driverAddress: this.editTransportForm.value.driverAddress,
        id: 1,
      };
    } else {
      this.obj = {
        routeName: this.editTransportForm.value.routeName,
        vehicleNumber: this.editTransportForm.value.vehicleNumber,
        driverName: this.editTransportForm.value.driverName,
        driverLicense: this.editTransportForm.value.licenseNumber,
        contactNumber: this.editTransportForm.value.contactNumber,
        driverAddress: this.editTransportForm.value.driverAddress,
        id: this.editId,
      };
    }

    // if (this.editTransportForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/transport/transport-main"]);
    //     this.toastr.success("Transport edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to transport form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstTransport.findIndex((item:data) => {
        return item.id === 1;
      });
      const toSetValues = this.lstTransport[index];
      this.editTransportForm.patchValue({
        routeName: toSetValues.routeName,
        vehicleNumber: toSetValues.vehicleNumber,
        driverName: toSetValues.driverName,
        licenseNumber: toSetValues.driverLicense,
        contactNumber: toSetValues.contactNumber,
        driverAddress: toSetValues.driverAddress,
      });
    } else {
      const index = this.lstTransport.findIndex((item:data) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstTransport[index];
      this.editTransportForm.patchValue({
        routeName: toSetValues.routeName,
        vehicleNumber: toSetValues.vehicleNumber,
        driverName: toSetValues.driverName,
        licenseNumber: toSetValues.driverLicense,
        contactNumber: toSetValues.contactNumber,
        driverAddress: toSetValues.driverAddress,
      });
    }
  }
}
