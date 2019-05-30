import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example0301Component } from './components/example0301/example0301.component';
import { Example0302Component } from './components/example0302/example0302.component';
import { Example0303Component } from './components/example0303/example0303.component';

const ROUTES: Routes = [
  {
    path: 'example03',
    redirectTo: 'example03/01',
    pathMatch: 'full'
  },
  {
    path: 'example03/01',
    component: Example0301Component
  },
  {
    path: 'example03/02',
    component: Example0302Component
  },
  {
    path: 'example03/03',
    component: Example0303Component
  }
];

export const TEMPLATES_ROUTES = [
  {
    path: 'example03',
    label: 'Example 03',
    navigationLinks: [
      {
        path: '01',
        label: 'Part 01'
      },
      {
        path: '02',
        label: 'Part 02'
      },
      {
        path: '03',
        label: 'Part 03'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class Example03Router { }
