/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
   

export class LightboxComponent {
  constructor(private _lightbox: Lightbox) { 
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/lightbox/img-0' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/lightbox/img-0' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this.albumsOne.push({ src: src });
      this.albumsTwo.push(album);}
  }
  public albumsOne: any = [];
  public albumsTwo: any = [];

  images = [
    {
      src: 'assets/img/img-01.jpg',
      caption: "caption",
      thumb: "thumb"
    },
    {
      src: 'assets/img/img-02.jpg',
      caption: "caption",
      thumb: "thumb"
    }
  ]
  images2 = [
    {
      src: 'assets/img/img-03.jpg',
      caption: "caption",
      thumb: "thumb"
    },
    {
      src: 'assets/img/img-04.jpg',
      caption: "caption",
      thumb: "thumb"
    },
    {
      src: 'assets/img/img-05.jpg',
      caption: "caption",
      thumb: "thumb"
    },
  ]
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }



}
