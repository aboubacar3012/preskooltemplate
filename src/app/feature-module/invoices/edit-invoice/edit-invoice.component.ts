import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent {

  status = false;
  status2 = false;
  public itemsArray: Array<number> = [1,2];
  public serviceArray: Array<number> = [0];
  public discountArray: Array<number> = [0];
  public addItems():void {
    this.itemsArray.push(1)
  }
  public deleteItems(index:number):void {
    this.itemsArray.splice(index, 1)
  }
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:number):void {
    this.serviceArray.splice(index, 1)
  }
  public addDiscount():void {
    this.discountArray.push(1)
  }
  public deleteDiscount(index:number):void {
    this.discountArray.splice(index, 1)
  }
  showEvent(){
    this.status = !this.status;       
  }
  showRecurring(){
    this.status2 = !this.status2; 
  }


}
