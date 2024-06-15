import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  popoverOne = false;
  public routes = routes
}
