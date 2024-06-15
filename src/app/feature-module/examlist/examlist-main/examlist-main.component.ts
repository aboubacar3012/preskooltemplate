import { Component, OnInit } from "@angular/core";
import { DataService, examList } from "src/app/core/core.index";
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Sort } from '@angular/material/sort';
@Component({
  selector: "app-examlist-main",
  templateUrl: "./examlist-main.component.html",
  styleUrls: ["./examlist-main.component.scss"],
})
export class ExamlistMainComponent implements OnInit {

  public lstExam!:Array<examList>;
  public url = "examList";
  public searchDataValue= '';
  dataSource!: MatTableDataSource<examList>;

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
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData(): void {
    this.lstExam = [];
    this.serialNumberArray = [];

    this.data.examList.map((res: examList, index: number) => {
      const serialNumber = index + 1;
      if (index >= this.skip && serialNumber <= this.limit) {
        res.id = serialNumber;
        this.lstExam.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource<examList>(this.lstExam);
    this.totalData = this.data.examList.length;
    this.calculateTotalPages(this.totalData, this.pageSize);
  }

  public sortData(sort: Sort) {
    const data = this.lstExam.slice();

    if (!sort.active || sort.direction === '') {
      this.lstExam = data;
    } else {
      this.lstExam = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstExam = this.dataSource.filteredData;
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
}
export interface pageSelection {
  skip: number;
  limit: number;
}