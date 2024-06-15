import {
  Component,
  ViewEncapsulation,
  HostListener,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  AuthService,
  DataService,
  SideBar,
  SideBarMenu,
} from '../core/core.index';
import { SideBarService } from '../core/services/side-bar/side-bar.service';
import { Location } from '@angular/common';

interface routerlink {
  id?: number;
  type?: number;
  url: string;
  urlAfterRedirects?: string;
}
@HostListener('window: resize', ['$event'])
@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureModuleComponent implements OnDestroy {
  public innerHeight!: string;
  title = 'template';
  public authenticated = false;
  public miniSidebar = 'false';
  public expandMenu = 'false';
  public mobileSidebar = 'false';
  url!: string;
  show = true;

  public layoutPosition = '1';

  public base = '';
  public page = '';
  constructor(
    private auth: AuthService,
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService,
    location: Location,
    private ngZone: NgZone
  ) {
    this.getRoutes(this.router);
    // <* condition to check weather login *>
    this.auth.checkAuth.subscribe((res: string) => {
      if (res == 'true') {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });

    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
        localStorage.removeItem('isMobileSidebar');
      }
    });
    // <* condition to check weather login *>

    // <* condition to check side bar position *>
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = 'true';
      } else {
        this.miniSidebar = 'false';
      }
    });
    // <* condition to check side bar position *>

    // <* condition to check mobile side bar position *>
    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = 'true';
      } else {
        this.mobileSidebar = 'false';
      }
    });
    // <* condition to check mobile side bar position *>

    this.sideBar.expandSideBar.subscribe((res: string) => {
      this.expandMenu = res;
      // <* to collapse submenu while toggling side menu*>
      if (res == 'false' && this.miniSidebar == 'true') {
        this.data.sideBar.map((mainMenus: SideBar) => {
          mainMenus.menu.map((resMenu: SideBarMenu) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      // <* to expand submenu while hover toggled side menu*>
      if (res == 'true' && this.miniSidebar == 'true') {
        this.data.sideBar.map((mainMenus: SideBar) => {
          mainMenus.menu.map((resMenu: SideBarMenu) => {
            const menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
    // <* to check layout position *>
    this.sideBar.layoutPosition.subscribe((res: string) => {
      this.layoutPosition = res;
    });
    // <* to check layout position *>
    window.onresize = () => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }
  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

  getRoutes(event: routerlink) {
    const splitVal = event.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    // <* condition to hide header and sidebar for login page *>
    if (
      this.base == 'login' ||
      this.base == 'register' ||
      this.base == 'forgotpassword' ||
      this.base == 'errorpage'
    ) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
