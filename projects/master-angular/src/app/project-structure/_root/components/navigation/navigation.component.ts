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
    {
      path: 'custom-directive',
      label: 'Custom Directive'
    },
    {
      path: 'mastering-directives',
      label: 'Mastering Directives'
    },
    {
      path: 'mastering-content-children',
      label: 'Mastering Content Children'
    },
    {
      path: 'mastering-dependency-injection',
      label: 'Mastering Dependency Injection'
    },
    {
      path: 'mastering-templates',
      label: 'Mastering Templates'
    },
    {
      path: 'mastering-view-children',
      label: 'Mastering View Children',
    }
  ];
}
