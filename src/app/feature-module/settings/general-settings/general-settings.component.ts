import { Component } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent{
  removePic = true;
  removeIcon = true;

  removePicture(){
    this.removePic = !this.removePic; 
  }
  removeFavicon(){
    this.removeIcon = !this.removeIcon; 
  }


}
