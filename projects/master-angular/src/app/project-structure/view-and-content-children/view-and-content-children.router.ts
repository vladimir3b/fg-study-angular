import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootViewAndContentChildrenComponent } from './components/root-view-and-content-children/root-view-and-content-children.component';

const ROUTES: Routes = [{
  path: 'view-and-content-children',
  component: RootViewAndContentChildrenComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class ViewAndContentChildrenRouter { }
