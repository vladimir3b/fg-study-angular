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
    }
  ];
}
