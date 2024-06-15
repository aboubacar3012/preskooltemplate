import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

    
  public menus: any = [
    
    {
      name: "Dashboard",
      class:"submenu",
      page:"dashboard",
      link:"",
      icon:"fas fa-th-large",
      active:false,
      sub_menu: [
        {
          name:"Admin Dashboard",
          class:"",
          link:"/dashboard/dashboard-main"
        }
      ]
    }, 
    {
      name: "Dashboard",
      class:"submenu",
      page:"dashboard",
      link:"",
      icon:"fas fa-th-large",
      active:false,
      sub_menu: [
        {
          name:"Admin Dashboard",
          class:"",
          link:"/dashboard/dashboard-main"
        }
      ]
    }, 
  
];
getJSON(): Observable<any> {

 return this.menus;
}
}
