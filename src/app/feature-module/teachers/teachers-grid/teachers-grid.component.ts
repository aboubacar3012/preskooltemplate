import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, teachgrids } from 'src/app/core/core.index';

@Component({
  selector: 'app-teachers-grid',
  templateUrl: './teachers-grid.component.html',
  styleUrls: ['./teachers-grid.component.scss']
})
export class TeachersGridComponent {

  teachgrids: Array<teachgrids> = [];
  constructor( public router: Router, private dataservice: DataService) {
    this.teachgrids=[];
    this.dataservice.teachgrids.map((data: teachgrids) => {
        this.teachgrids.push(data);
    })
   }


}
