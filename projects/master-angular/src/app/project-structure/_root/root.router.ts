import { MasteringTemplatesRouter } from './../mastering-templates/mastering-templates.router';
import { MasteringDirectivesRouter } from '../mastering-directives/mastering-directives.router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAndContentChildrenRouter } from '../view-and-content-children/view-and-content-children.router';
import { DomainModelRouter } from '../domain-model/domain-model.router';
import { CustomDirectiveRouter } from '../custom-directives/custom-directives.router';
import { MasteringDependencyInjectionRouter } from '../mastering-dependency-injection/mastering-dependency-injection.router';
import { MasteringContentChildrenRouter } from '../mastering-content-children/mastering-content-children.router';
import { MasteringViewChildrenRouter } from '../mastering-view-children/mastering-view-children.router';
import { MasteringDomManipulationRouter } from '../mastering-dom-manipulation/mastering-dom-manipulation.router';

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
  CustomDirectiveRouter,

  MasteringDirectivesRouter,
  MasteringContentChildrenRouter,
  MasteringDependencyInjectionRouter,
  MasteringTemplatesRouter,
  MasteringViewChildrenRouter,
  MasteringDomManipulationRouter
];

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
