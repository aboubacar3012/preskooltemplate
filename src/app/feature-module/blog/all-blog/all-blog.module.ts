import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBlogRoutingModule } from './all-blog-routing.module';
import { AllBlogComponent } from './all-blog.component';


@NgModule({
  declarations: [
    AllBlogComponent
  ],
  imports: [
    CommonModule,
    AllBlogRoutingModule
  ]
})
export class AllBlogModule { }
