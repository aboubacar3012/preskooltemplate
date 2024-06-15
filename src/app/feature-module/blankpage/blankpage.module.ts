import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankpageRoutingModule } from './blankpage-routing.module';
import { BlankpageComponent } from './blankpage.component';
import { BlankpageMainComponent } from './blankpage-main/blankpage-main.component';

@NgModule({
  declarations: [BlankpageComponent, BlankpageMainComponent],
  imports: [
    CommonModule,
    BlankpageRoutingModule
  ]
})
export class BlankpageModule { }
