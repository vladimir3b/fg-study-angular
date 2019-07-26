import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

const EXTERNAL_ROUTES = [
];

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
