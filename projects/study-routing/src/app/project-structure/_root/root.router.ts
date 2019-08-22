import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QueryParametersComponent } from './components/query-parameters/query-parameters.component';
import { FragmentsComponent } from './components/fragments/fragments.component';
import { PathsComponent } from './components/paths/paths.component';
import { CompleteUrlComponent } from './components/complete-url/complete-url.component';


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
    path: 'get-query-parameters',
    component: QueryParametersComponent
  },
  {
    path: 'get-fragments',
    component: FragmentsComponent
  },
  {
    path: 'get-paths',
    component: PathsComponent
  },
  {
    path: 'get-complete-url',
    component: CompleteUrlComponent
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
