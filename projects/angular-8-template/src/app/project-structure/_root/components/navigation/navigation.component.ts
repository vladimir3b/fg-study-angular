import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ROOT_NAVIGATION } from './../../root.navigation';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigationLink = [
    ...ROOT_NAVIGATION
  ];

  constructor(private _router: Router) { }

  navigate(baseLink: string, subLink: string): void {
    this._router.navigateByUrl(`/${baseLink}/${subLink}`);
  }
}
