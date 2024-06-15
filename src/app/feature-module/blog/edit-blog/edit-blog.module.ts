import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBlogRoutingModule } from './edit-blog-routing.module';
import { EditBlogComponent } from './edit-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    EditBlogComponent
  ],
  imports: [
    CommonModule,
    EditBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class EditBlogModule { }
