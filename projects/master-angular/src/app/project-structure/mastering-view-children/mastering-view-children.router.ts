import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootMasteringViewChildrenComponent } from './components/root-mastering-view-children/root-mastering-view-children.component';

const ROUTES: Routes = [{
  path: 'mastering-view-children',
  component: RootMasteringViewChildrenComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class MasteringViewChildrenRouter { }
