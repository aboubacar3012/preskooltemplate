import { Component } from '@angular/core';
import { DataService } from 'src/app/core/core.index';
export interface socialLinks {
  icon: string;
  placeholder: string;
}
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {
  public socialLinks: Array<socialLinks> = []

  constructor(public data: DataService){
    this.socialLinks = this.data.socialLinks;
  }
  delete(index:number) {
    this.socialLinks.splice(index, 1)
  }
  add(){
    this.socialLinks.push({
    icon:"github",
    placeholder:"Social Link"
    })
  }
}
