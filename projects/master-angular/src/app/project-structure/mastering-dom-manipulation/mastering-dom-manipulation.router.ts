import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootMasteringDomManipulationComponent } from './components/root-mastering-dom-manipulation/root-mastering-dom-manipulation.component';

const ROUTES: Routes = [{
  path: 'mastering-dom-manipulation',
  component: RootMasteringDomManipulationComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class MasteringDomManipulationRouter { }
