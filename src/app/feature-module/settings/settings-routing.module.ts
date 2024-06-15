import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { LocalizationComponent } from './localization/localization.component';
import { OthersComponent } from './others/others.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { SettingsComponent } from './settings.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SocialmediaLoginComponent } from './socialmedia-login/socialmedia-login.component';

const routes: Routes = [
  {path:'',component:SettingsComponent,
  children:[
    {path:"general-settings",component:GeneralSettingsComponent},
    {path:"localization-details",component:LocalizationComponent},
    {path:"payment-settings",component:PaymentSettingsComponent},
    {path:"email-settings",component:EmailSettingsComponent},
    {path:"social-settings",component:SocialmediaLoginComponent},
    {path:"social-links",component:SocialLinksComponent},
    {path:"seo-settings",component:SeoSettingsComponent},
    {path:"others-settings",component:OthersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
