import { Component, OnInit, NgZone, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@HostListener("window: resize", ["$event"])
@Component({
  selector: "app-holiday",
  templateUrl: "./holiday.component.html",
  styleUrls: ["./holiday.component.scss"],
})
export class HolidayComponent implements OnInit {
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

  ngOnInit() {
   
    this.router.navigateByUrl("/holiday/holiday-main");
  }

}
