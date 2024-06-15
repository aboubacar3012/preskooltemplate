import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { routes } from "src/app/core/core.index";

@Component({
  selector: "app-transport-add",
  templateUrl: "./transport-add.component.html",
  styleUrls: ["./transport-add.component.scss"],
})
export class TransportAddComponent implements OnInit {
  public routes = routes;
  public addTransportForm!: UntypedFormGroup;
  public url = "transport";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add transport form validation
    this.addTransportForm = this.formBuilder.group({
      routeName: ["", [Validators.required]],
      vehicleNumber: ["", [Validators.required]],
      driverName: ["", [Validators.required]],
      licenseNumber: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      driverAddress: ["", [Validators.required]],
    });
  }

  // Add transport submit call
  addTransport() {
    this.obj = {
      routeName: this.addTransportForm.value.routeName,
      vehicleNumber: this.addTransportForm.value.vehicleNumber,
      driverName: this.addTransportForm.value.driverName,
      driverLicense: this.addTransportForm.value.licenseNumber,
      contactNumber: this.addTransportForm.value.contactNumber,
      driverAddress: this.addTransportForm.value.driverAddress,
    };
    // if (this.addTransportForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/transport/transport-main"]);
    //     this.toastr.success("Transport added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
