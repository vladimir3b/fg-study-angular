import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAndContentChildrenRouter } from '../view-and-content-children/view-and-content-children.router';
import { DomainModelRouter } from './../domain-model/domain-model.router';
import { CustomDirectiveRouter } from '../custom-directives/custom-directives.router';


const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/domain-model',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

const SUB_ROUTERS = [
  ViewAndContentChildrenRouter,
  DomainModelRouter,
  CustomDirectiveRouter
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTER),
    ...SUB_ROUTERS
  ],
  exports: [
    RouterModule,
    ...SUB_ROUTERS
  ]
})
export class RootRouter { }
