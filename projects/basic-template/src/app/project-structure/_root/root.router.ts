import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Example01Router } from '../example01/example01.router';
import { Example02Router } from '../example02/example02.router';
import { Example03Router } from '../example03/example03.router';


const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'templates/events-rendering',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

const EXTERNAL_ROUTES = [
  Example01Router,
  Example02Router,
  Example03Router
]

@NgModule({
  imports: [
    ...EXTERNAL_ROUTES,
    RouterModule.forRoot(ROUTER)
  ],
  exports: [
    RouterModule,
    ...EXTERNAL_ROUTES
  ]
})
export class RootRouter { }
