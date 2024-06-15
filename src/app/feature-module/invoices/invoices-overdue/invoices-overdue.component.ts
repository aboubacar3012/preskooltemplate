import { Component, OnInit } from '@angular/core';
import { DataService, overdueInvoices } from 'src/app/core/core.index';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-invoices-overdue',
  templateUrl: './invoices-overdue.component.html',
  styleUrls: ['./invoices-overdue.component.scss']
})
export class InvoicesOverdueComponent implements OnInit {

  public overdueInvoicesList!: Array<overdueInvoices>;
  public url = "overdueInvoices";
  status= false;
  status2 = false;
  status3 = false;
  status4 = false;
  public searchDataValue= '';
  dataSource!: MatTableDataSource<overdueInvoices>;

  // pagination variables
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;
  //** / pagination variables
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData(): void {
    this.overdueInvoicesList = [];
    this.serialNumberArray = [];

    this.data.overdueInvoices.map((res: overdueInvoices, index: number) => {
      const serialNumber = index + 1;
      if (index >= this.skip && serialNumber <= this.limit) {
        res.id = serialNumber;
        this.overdueInvoicesList.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource<overdueInvoices>(this.overdueInvoicesList);
    this.totalData = this.data.overdueInvoices.length;
    this.calculateTotalPages(this.totalData, this.pageSize);
  }

  public sortData(sort: Sort) {
    const data = this.overdueInvoicesList.slice();

    if (!sort.active || sort.direction === '') {
      this.overdueInvoicesList = data;
    } else {
      this.overdueInvoicesList = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.overdueInvoicesList = this.dataSource.filteredData;
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
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
 
}
export interface pageSelection {
  skip: number;
  limit: number;
}
