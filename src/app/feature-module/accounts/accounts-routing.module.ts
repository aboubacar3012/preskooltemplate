import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsComponent } from "./accounts.component";
import { FeesCollectionComponent } from "./fees-collection/fees-collection.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { SalaryComponent } from "./salary/salary.component";
import { AddSalaryComponent } from "./add-salary/add-salary.component";
import { AddExpensesComponent } from "./add-expenses/add-expenses.component";
import { AddFeesComponent } from "./add-fees/add-fees.component";

const routes: Routes = [
  {
    path: "",
    component: AccountsComponent,
    children: [
      { path: "fees-collection", component: FeesCollectionComponent },
      { path: "expenses", component: ExpensesComponent },
      { path: "salary", component: SalaryComponent },
      { path: "add-fees", component: AddFeesComponent },
      { path: "add-expenses", component: AddExpensesComponent },
      { path: "add-salary", component: AddSalaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
