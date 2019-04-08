import { Component } from '@angular/core';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationLink = [
    {
      path: 'example01',
      label: 'Example 1'
    },
    {
      path: 'example02',
      label: 'Example 2'
    },
    {
      path: 'example03',
      label: 'Example 3'
    },
    {
      path: 'example04',
      label: 'Example 4'
    }
  ];
}
