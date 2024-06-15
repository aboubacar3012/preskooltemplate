import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { BankSettingsComponent } from './bank-settings/bank-settings.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoicesCancelledComponent } from './invoices-cancelled/invoices-cancelled.component';
import { InvoicesDraftComponent } from './invoices-draft/invoices-draft.component';
import { InvoicesGridComponent } from './invoices-grid/invoices-grid.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesOverdueComponent } from './invoices-overdue/invoices-overdue.component';
import { InvoicesPaidComponent } from './invoices-paid/invoices-paid.component';
import { InvoicesRecurringComponent } from './invoices-recurring/invoices-recurring.component';
import { InvoicesSettingsComponent } from './invoices-settings/invoices-settings.component';
import { InvoicesComponent } from './invoices.component';
import { TaxSettingsComponent } from './tax-settings/tax-settings.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

const routes: Routes = [{ 
  path: '', 
  component: InvoicesComponent,
  children:[
    {path:"invoices-list",component:InvoicesListComponent},
  {path:"invoices-grid",component:InvoicesGridComponent},
  {path:"add-invoice",component:AddInvoiceComponent},
  {path:"edit-invoice",component:EditInvoiceComponent},
  {path:"view-invoice",component:ViewInvoiceComponent},
  {path:"invoices-settings",component:InvoicesSettingsComponent},
  {path:"tax-settings",component:TaxSettingsComponent},
  {path:"bank-settings",component:BankSettingsComponent},
  {path:"invoices-paid",component:InvoicesPaidComponent},
  {path:"invoices-overdue",component:InvoicesOverdueComponent},
  {path:"invoices-draft",component:InvoicesDraftComponent},
  {path:"invoices-recurring",component:InvoicesRecurringComponent},
  {path:"invoices-cancelled",component:InvoicesCancelledComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
