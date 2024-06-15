import { Component, OnDestroy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WebStorage } from 'src/app/core/storage/web.storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  public isvalidconfirmpassword = false;
  public subscription: Subscription;
  public CustomControler!: string;
  public Toggledata = true;

  form = new UntypedFormGroup({
    email: new UntypedFormControl("", [Validators.required, Validators.email]),
    password: new UntypedFormControl("", [Validators.required]),
    confirmPassword: new UntypedFormControl("", [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebStorage) {
    this.subscription = this.storage.Createaccountvalue.subscribe((data) => {
      
      this.CustomControler = data;
    });
  }



  submit() {
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.isvalidconfirmpassword = true;
    } else {
      this.isvalidconfirmpassword = false;
      this.storage.Createaccount(this.form.value);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

}
