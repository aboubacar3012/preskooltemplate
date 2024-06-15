import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, blogs } from 'src/app/core/core.index';


@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent {
  blogs!: Array<blogs>;
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers3.subscribe((data: Array<blogs>) => {
      this.blogs = data
    })
   }


}
