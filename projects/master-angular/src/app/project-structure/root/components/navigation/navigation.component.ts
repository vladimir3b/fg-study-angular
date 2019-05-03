import { Component } from '@angular/core';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationLink = [
    {
      path: 'view-and-content-children',
      label: 'View and Content Children'
    },
    {
      path: 'domain-model',
      label: 'Domain Model'
    },
  ];
}
