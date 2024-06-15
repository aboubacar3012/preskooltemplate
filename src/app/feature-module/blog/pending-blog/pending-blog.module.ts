import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingBlogRoutingModule } from './pending-blog-routing.module';
import { PendingBlogComponent } from './pending-blog.component';


@NgModule({
  declarations: [
    PendingBlogComponent
  ],
  imports: [
    CommonModule,
    PendingBlogRoutingModule
  ]
})
export class PendingBlogModule { }
