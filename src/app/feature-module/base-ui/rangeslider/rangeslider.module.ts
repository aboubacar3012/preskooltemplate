import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangesliderRoutingModule } from './rangeslider-routing.module';
import { RangesliderComponent } from './rangeslider.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RangesliderComponent
  ],
  imports: [
    CommonModule,
    RangesliderRoutingModule,
    SharedModule
  ]
})
export class RangesliderModule { }
