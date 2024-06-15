import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { DataService, SideBar, SideBarMenu, routes } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  public routes = routes;
  public multilevel: Array<boolean> = [false, false, false];

  base = '';
  page = '';
  menudata!:SideBarMenu;
  side_bar_data: Array<SideBar> = [];
  
  constructor(
    public router: Router,
    private data: DataService,
    private sideBar: SideBarService
  ) {
    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        const splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
      }
    });
    // get sidebar data as observable because data is controlled for design to expand submenus
    this.data.getSideBarData.subscribe((res: Array<SideBar>) => {
      this.side_bar_data = res;
    });
  }

  

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next('true');
    } else {
      this.sideBar.expandSideBar.next('false');
      this.side_bar_data.map((mainMenus: SideBar) => {
        mainMenus.menu.map((resMenu: SideBarMenu) => {
          this.menudata = resMenu
          // collapse other submenus which are open
          // if (resMenu.menuValue == menu.menuValue) {
          //   menu.showSubRoute = !menu.showSubRoute;
          // } else {
          //   resMenu.showSubRoute = false;
          // }
         sessionStorage.removeItem('menuvalue');

        });
      });
    }
  }

  public expandSubMenus(menu: SideBarMenu): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: SideBar) => {
      mainMenus.menu.map((resMenu: SideBarMenu) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
}
