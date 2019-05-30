import { Component, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'fg-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent  {
  opened = false;
  constructor() { }

  toggle(element: MatSidenav) {
    element.toggle();
    this.opened = element.opened;
  }

}
