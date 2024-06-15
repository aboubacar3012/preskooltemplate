import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService, sports } from "src/app/core/core.index";

@Component({
  selector: "app-sports-edit",
  templateUrl: "./sports-edit.component.html",
  styleUrls: ["./sports-edit.component.scss"],
})
export class SportsEditComponent implements OnInit {
  public editId!:number;
  public editSportsForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "sports";
  public lstSports!:Array<sports>
  public obj!:object;
  public setDate!:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadSports();
    //getting edit id of selected sports list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editsports form validation
    this.editSportsForm = this.formBuilder.group({
      sportsId: ["", [Validators.required]],
      sportsName: ["", [Validators.required]],
      coachName: ["", [Validators.required]],
      startedYear: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get sports List  Api Call
  loadSports() {
    this.lstSports = this.dataService.sports
    
  }

  // Edit sports Submit call
  editSports() {
    const newDate = this.editSportsForm.value.startedYear.split("-");
    const year = newDate[0];
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editSportsForm.value.sportsId,
        name: this.editSportsForm.value.sportsName,
        coach: this.editSportsForm.value.coachName,
        startedYear: year,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editSportsForm.value.sportsId,
        name: this.editSportsForm.value.sportsName,
        coach: this.editSportsForm.value.coachName,
        startedYear: year,
        id: this.editId,
      };
    }

    // if (this.editSportsForm.valid) {
    //   this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/sports/sports-main"]);
    //     this.toastr.success("Sports edited sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }

  // set values to sports form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstSports.findIndex((item:sports) => {
        return item.id === 1;
      });
      const toSetValues = this.lstSports[index];
      this.editSportsForm.patchValue({
        sportsId: toSetValues.idNo,
        sportsName: toSetValues.name,
        coachName: toSetValues.coach,
      });
      const newDate = toSetValues.startedYear.split("-");
      // const pushDate = newDate.push("02-12");
      const joiningDate = newDate.join("-");
      this.setDate = joiningDate;
    } else {
      const index = this.lstSports.findIndex((item:sports) => {
        return item.id === this.editId;
      });
      const toSetValues = this.lstSports[index];
      this.editSportsForm.patchValue({
        sportsId: toSetValues.idNo,
        sportsName: toSetValues.name,
        coachName: toSetValues.coach,
      });
      const newDate = toSetValues.startedYear.split("-");
      // const pushDate = newDate.push("02-12");
      const joiningDate = newDate.join("-");
      this.setDate = joiningDate;
    }
  }
}
