import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, blogs } from 'src/app/core/core.index';

@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.scss']
})
export class PendingBlogComponent {
  pendings!: Array<blogs>;
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers1.subscribe((data: Array<blogs>) => {
      this.pendings = data
    })
   }



}
