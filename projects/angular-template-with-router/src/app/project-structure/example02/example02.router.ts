import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example0201Component } from './components/example0201/example0201.component';
import { Example0202Component } from './components/example0202/example0202.component';
import { Example0203Component } from './components/example0203/example0203.component';

const ROUTES: Routes = [
  {
    path: 'example02',
    redirectTo: 'example02/01',
    pathMatch: 'full'
  },
  {
    path: 'example02/01',
    component: Example0201Component
  },
  {
    path: 'example02/02',
    component: Example0202Component
  },
  {
    path: 'example02/03',
    component: Example0203Component
  }
];

export const TEMPLATES_ROUTES = [
  {
    path: 'example02',
    label: 'Example 02',
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
export class Example02Router { }
