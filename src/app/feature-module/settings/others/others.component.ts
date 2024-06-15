import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';


@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OthersComponent implements OnInit , OnDestroy {

  editor: Editor = new Editor
  html!: '';

toolbar:Toolbar=[['bold','italic'],['link']];




  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
