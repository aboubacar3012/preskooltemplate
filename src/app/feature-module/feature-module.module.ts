import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { SharedModule } from '../shared/sharedIndex';
import { MAT_DATE_LOCALE, } from '@angular/material/core';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ErrorpageComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    // PerfectScrollbarModule,
    SharedModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    },
  ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class FeatureModuleModule { }
