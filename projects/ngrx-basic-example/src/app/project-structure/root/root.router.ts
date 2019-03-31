import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterRouter } from './../counter/counter.router';
import { ManagePersonsRouter } from './../manage-persons/manage-persons.router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CounterRouter,
    ManagePersonsRouter,
    RouterModule.forRoot(ROUTER)
  ],
  exports: [ RouterModule ]
})
export class RootRouter { }
