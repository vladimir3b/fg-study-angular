import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootMasteringTemplatesComponent } from './components/root-mastering-templates/root-mastering-templates.component';


const ROUTES: Routes = [{
  path: 'mastering-templates',
  component: RootMasteringTemplatesComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class MasteringTemplatesRouter { }
