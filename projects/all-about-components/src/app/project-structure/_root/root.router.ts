import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Example01Router } from '../example01/example01.router';

const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'example01/01',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

const EXTERNAL_ROUTES = [
  Example01Router
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
