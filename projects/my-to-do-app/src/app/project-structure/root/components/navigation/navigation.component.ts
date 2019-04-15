import { Component } from '@angular/core';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationLink = [
    {
      path: 'tasks',
      label: 'Tasks'
    },
    {
      path: 'scheduler',
      label: 'Scheduler'
    }
  ];
}
