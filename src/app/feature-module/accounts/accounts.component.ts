import { Component, HostListener, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@HostListener("window: resize", ["$event"])
@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"],
})
export class AccountsComponent {
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
