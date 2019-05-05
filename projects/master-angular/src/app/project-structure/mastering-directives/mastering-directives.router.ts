import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootMasteringDirectivesComponent } from './components/root-mastering-directives/root-mastering-directives.component';

const ROUTES: Routes = [{
  path: 'mastering-directives',
  component: RootMasteringDirectivesComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class MasteringDirectivesRouter { }
