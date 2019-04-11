import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksRouter } from '../tasks/tasks.router';

const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    TasksRouter,
    RouterModule.forRoot(ROUTER)
  ],
  exports: [ RouterModule ]
})
export class RootRouter { }
