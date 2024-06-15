import { Component, NgZone, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@HostListener("window: resize", ["$event"])
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent  {
  public innerHeight!: string;
  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = () => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
   }
   getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }




}
