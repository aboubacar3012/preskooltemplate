import { Component } from '@angular/core';
interface basicStarType {
  show:boolean,
}
interface basicStarType1 {
  show:boolean,
  half:boolean
}
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})

export class RatingComponent {


  public basicStar:basicStarType[]= [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];
  savedStar:basicStarType[] = [
    { show: true },
    { show: true },
    { show: true },
    { show: false },
    { show: false },
  ];
  maxStar:basicStarType[] = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];
  readOnlyStar:basicStarType[]= [
    { show: true },
    { show: true },
    { show: true },
    { show: false },
    { show: false },
  ];
  halfRatingStar:basicStarType1[]= [
    { show: true, half: false },
    { show: true, half: false },
    { show: false, half: true },
    { show: false, half: false },
    { show: false, half: false },
  ];
  heartIcon:basicStarType[] = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];


  clickBasicStar(item: basicStarType, i: number, array: Array<basicStarType>): void {
    if (item.show == false) {
      array.map((res: basicStarType, index: number) => {
        if (index <= i) {
          res.show = true;
        }
      });
    } else {
      array.map((res: basicStarType, index: number) => {
        if (index >= i && index != 0) {
          res.show = false;
        }
      });
    }
     
    if (array == this.halfRatingStar) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      array.map((res: any) => {
        res.half = false;
      });
    }
  }

  
}
