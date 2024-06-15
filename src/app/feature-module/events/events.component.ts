import { Component,  HostListener, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@HostListener("window: resize", ["$event"])
@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent {
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
