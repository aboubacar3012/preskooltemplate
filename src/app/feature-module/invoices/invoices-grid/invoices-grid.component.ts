import { Component, OnInit } from '@angular/core';
import { DataService, invoicesList } from 'src/app/core/core.index';

@Component({
  selector: 'app-invoices-grid',
  templateUrl: './invoices-grid.component.html',
  styleUrls: ['./invoices-grid.component.scss']
})
export class InvoicesGridComponent implements OnInit {
  public invoicesList!: Array<invoicesList>;
  public url = "invoicesList";
  status= false;
  status2 = false;
  status3 = false;
  status4 = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadInvoices();
  }
  showUser(){
    this.status = !this.status; 
  }
  showDate(){
    this.status2 = !this.status2; 
  }
  showStatus(){
    this.status3 = !this.status3; 
  }
  showCategory(){
    this.status4 = !this.status4; 
  }
  loadInvoices() {
    this.invoicesList = this.dataService.invoicesList
  }

}
