import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';

import jsonDoc from './docs';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditBlogComponent implements OnInit, OnDestroy {
  editordoc = jsonDoc;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }
}
