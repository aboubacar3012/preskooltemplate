import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
interface register {
  email:string,
  password:string,
  confirmPassword?:string
}
interface login  {
  email:string;
  password:string 
}
@Injectable({
  providedIn: 'root',
})
export class WebStorage {
  public Loginvalue = new BehaviorSubject<string>('0');
  public Createaccountvalue = new BehaviorSubject<string>('');
  public Forgotpasswordvalue = new BehaviorSubject<string>('0');
  constructor(private router: Router) {}

  /**
   * Create account Function call from Registerpage
   * @param uservalue from user form value
   */
  public Createaccount(uservalue: register): void {
    
    const Rawdata:string|null = localStorage.getItem('Loginusers');
    let Pdata: Array<register> = [];
    Pdata = JSON.parse(Rawdata || '');
    Pdata.find((f: register) => {
      if (f.email == uservalue.email) {
        this.Createaccountvalue.next('This email are already exist');
      } else {
        Pdata.push(uservalue);
        const jsonData = JSON.stringify(Pdata);
        localStorage.setItem('Loginusers', jsonData);
        this.Login(uservalue);
      }
    });
  }

  /**
   * Login Functionality call from Login
   * @param uservalue from login page
   */
  public Login(uservalue: register): void {
    const returndata={message:'',status:''}
    const data:string|null = localStorage.getItem('Loginusers');
    const Pdata: [] = JSON.parse(data||'');
    const Eresult: []|undefined = Pdata.find(({ email }) => email === uservalue.email);
    if (Eresult) {
      
      if (Eresult) {
        this.Createtoken(uservalue);
        this.Loginvalue.next('Login success');
        this.router.navigate(["/dashboard/main"]);
        this.Loginvalue.next('0');
      } else {
        returndata.message='Incorrect password'
        returndata.status='password'
      }
    } else {
      returndata.message='Email is  not valid'
      returndata.status='email'
    }
  }

  /**
   * Create Token function for authendication
   * @param uservalue recived from login function
   */
  public Createtoken(uservalue:register) {
    const result = 'ABCDEFGHI' + uservalue.email + 'ghijklmnopqrs' + 'z01234567';
    localStorage.setItem('LoginData', result);
  }

  /**
   * Two Storage are used
   */
  public Deleteuser() {
    localStorage.removeItem('Loginusers');
    localStorage.removeItem('LoginData');
  }

  /**
   * called from Login page init statement
   */
  public Checkuser(): void {
    const users = localStorage.getItem('Loginusers');
    if (users === null) {
      const password:Array<login> = [
        {
          email: 'admin@dreamguys.in',
          password: '123456',
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem('Loginusers', jsonData);
    }
  }

  /**
   * Forgot password function
   * @param uservalue email object recived from Forgot password
   */
  public Forgotpassword(uservalue:register): void {
    const Rawdata:string|null = localStorage.getItem('Loginusers');
    let Pdata: [] = [];
    Pdata = JSON.parse(Rawdata||'');
    const Eresult:Array<login> | undefined = Pdata.find(({ email }) => email === uservalue.email);
    if (Eresult) {
      this.Forgotpasswordvalue.next(Eresult);
    } else {
      this.Forgotpasswordvalue.next('Email Not Valid');
    }
  }
}
