import { Injectable } from '@angular/core';

export interface INavigationModel {
  caption: string;
  role: {
    type: 'button' | 'link',
    target: string
  }
  location: 'left' | 'right';
}

@Injectable()
export class NavigationService {

  menu: Array<INavigationModel>;

  constructor() {
    this.menu = [
      {
        caption: 'Log In',
        role: {
          type: 'link',
          target: '/log-in'
        },
        location: 'left'
      },
      {
        caption: 'Sign Up',
        role: {
          type: 'link',
          target: '/sign-up'
        },
        location: 'left'
      },
      {
        caption: 'Products',
        role: {
          type: 'link',
          target: '/products'
        },
        location: 'left'
      },
      {
        caption: 'Log Out',
        role: {
          type: 'button',
          target: 'log-out'
        },
        location: 'right'
      }
    ];
  }

}
