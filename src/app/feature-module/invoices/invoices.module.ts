import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TaxSettingsComponent } from './tax-settings/tax-settings.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { SharedModule } from 'src/app/shared/sharedIndex';



@NgModule({
  declarations: [
    InvoicesComponent,
    AddInvoiceComponent,
    BankSettingsComponent,
    EditInvoiceComponent,
    InvoicesCancelledComponent,
    InvoicesDraftComponent,
    InvoicesGridComponent,
    InvoicesListComponent,
    InvoicesOverdueComponent,
    InvoicesPaidComponent,
    InvoicesRecurringComponent,
    InvoicesSettingsComponent,
    TaxSettingsComponent,
    ViewInvoiceComponent,
   
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class InvoicesModule { }
