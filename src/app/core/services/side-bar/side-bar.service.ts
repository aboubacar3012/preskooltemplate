import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService, SideBar, SideBarMenu } from '../data/data.service';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  public toggleSideBar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('isMiniSidebar') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('isMobileSidebar') || 'false'
  );

  public expandSideBar: BehaviorSubject<string> = new BehaviorSubject<string>('false');

  public layoutPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('layoutPosition') || '1'
  );
  public layoutDirection: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('layoutDirection')|| 'ltr'
  );

  constructor(private data: DataService) {
    if(localStorage.getItem('layoutDirection')){
      this.layoutDirection.next('rtl')
    }
  }

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('isMiniSidebar')) {
      this.toggleSideBar.next('false');
      localStorage.removeItem('isMiniSidebar');
      this.data.sideBar.map((mainMenus: SideBar) => {
        mainMenus.menu.map((resMenu: SideBarMenu) => {
          const menuValue = sessionStorage.getItem('menuValue');
          if (menuValue && menuValue == resMenu.menuValue) {
            resMenu.showSubRoute = true;
          }
        });
      });
    } else {
      this.toggleSideBar.next('true');
      localStorage.setItem('isMiniSidebar', 'true');
      this.data.sideBar.map((mainMenus: SideBar) => {
        mainMenus.menu.map((resMenu: SideBarMenu) => {
          resMenu.showSubRoute = false;
        });
      });
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  public changeLayout(position: string): void {
    this.layoutPosition.next(position);
    localStorage.setItem('layoutPosition', position);
  }
}
