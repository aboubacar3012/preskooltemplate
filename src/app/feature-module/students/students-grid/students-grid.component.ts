import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, grids } from 'src/app/core/core.index';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.scss']
})
export class StudentsGridComponent {

  grids!:  Array<grids>;
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers2.subscribe((data: Array<grids>) => {
      this.grids = data
    })
   }


}
