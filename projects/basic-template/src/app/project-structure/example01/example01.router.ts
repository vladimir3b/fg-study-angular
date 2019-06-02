import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example0101Component } from '../example01/components/example0101/example0101.component';
import { Example0102Component } from '../example01/components/example0102/example0102.component';
import { Example0103Component } from '../example01/components/example0103/example0103.component';

const ROUTES: Routes = [
  {
    path: 'example01',
    redirectTo: 'example01/01',
    pathMatch: 'full'
  },
  {
    path: 'example01/01',
    component: Example0101Component
  },
  {
    path: 'example01/02',
    component: Example0102Component
  },
  {
    path: 'example01/03',
    component: Example0103Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class Example01Router { }
