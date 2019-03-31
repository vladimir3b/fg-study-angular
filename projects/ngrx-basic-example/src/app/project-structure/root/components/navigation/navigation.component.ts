import { Component } from '@angular/core';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationLink = [
    {
      path: 'home',
      label: 'Home'
    },
    {
      path: 'counter',
      label: 'Counter'
    },
    {
      path: 'manage-persons',
      label: 'Manage Persons'
    }
  ];
}
