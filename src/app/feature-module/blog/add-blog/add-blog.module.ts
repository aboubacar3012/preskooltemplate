import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogRoutingModule } from './add-blog-routing.module';
import { AddBlogComponent } from './add-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    AddBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class AddBlogModule { }
