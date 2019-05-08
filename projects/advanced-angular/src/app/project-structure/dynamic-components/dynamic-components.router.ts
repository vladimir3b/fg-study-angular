import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootDynamicComponentsComponent } from './components/root-dynamic-components/root-dynamic-components.component';

const ROUTES: Routes = [{
  path: 'dynamic-components',
  component: RootDynamicComponentsComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class DynamicComponentsRouter { }
