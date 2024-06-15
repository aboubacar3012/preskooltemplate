import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-expenses",
  templateUrl: "./add-expenses.component.html",
  styleUrls: ["./add-expenses.component.scss"],
})
export class AddExpensesComponent implements OnInit {
  public addExpensesForm!: UntypedFormGroup;
  public url = "expensesList";
  public pipe = new DatePipe("en-US");
  public obj!:object;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    // Add expenses form validation
    this.addExpensesForm = this.formBuilder.group({
      expensesId: ["", [Validators.required]],
      itemName: ["", [Validators.required]],
      itemQuality: ["", [Validators.required]],
      expenseAmount: ["", [Validators.required]],
      purchaseSource: ["", [Validators.required]],
    });
  }

  // Add expenses submit call
  addExpenses() {
    this.obj  = {
      idNo: this.addExpensesForm.value.expensesId,
      itemName: this.addExpensesForm.value.itemName,
      itemQuality: this.addExpensesForm.value.itemQuality,
      amount: this.addExpensesForm.value.expenseAmount,
      purchaseSource: this.addExpensesForm.value.purchaseSource,
      purchaseDate: "17 Sept 2020",
      purchaseBy: "Minnie",
    };
    // if (this.addExpensesForm.valid) {
    //   this.srvModuleService.add(obj, this.url).subscribe((data) => {
    //     this.router.navigate(["/accounts/expenses"]);
    //     this.toastr.success("Expenses added sucessfully...!", "Success");
    //   });
    // } else {
    //   this.toastr.warning("Mandatory fields are required...!", "Warning");
    // }
  }
}
