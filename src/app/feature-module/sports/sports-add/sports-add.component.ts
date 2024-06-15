import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-sports-add",
  templateUrl: "./sports-add.component.html",
  styleUrls: ["./sports-add.component.scss"],
})
export class SportsAddComponent implements OnInit {
  public addSportsForm!: UntypedFormGroup;
  public url = "sports";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add sports form validation
    this.addSportsForm = this.formBuilder.group({
      sportsId: ["", [Validators.required]],
      sportsName: ["", [Validators.required]],
      coachName: ["", [Validators.required]],
      startedYear: ["", [Validators.required]],
    });
  }

  // Add sports submit call
  addSports() {
    const newDate = this.addSportsForm.value.startedYear.split("-");
    const year = newDate[0];
    this.obj  = {
      idNo: this.addSportsForm.value.sportsId,
      name: this.addSportsForm.value.sportsName,
      coach: this.addSportsForm.value.coachName,
      startedYear: year,
    };
    // if (this.addSportsForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/sports/sports-main"]);
    //     this.toastr.success("Sports added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
