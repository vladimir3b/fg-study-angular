import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Example01Router } from '../example01/example01.router';
import { Example02Router } from '../example02/example02.router';
import { Example03Router } from '../example03/example03.router';
import { Example04Router } from '../example04/example04.router';


const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/example01',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    Example01Router,
    Example02Router,
    Example03Router,
    Example04Router,
    RouterModule.forRoot(ROUTER)
  ],
  exports: [ RouterModule ]
})
export class RootRouter { }
