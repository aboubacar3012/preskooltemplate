import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent  {

  constructor(private router: Router) { }
  login(){
    this.router.navigate([routes.login]);
  }


}
