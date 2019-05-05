import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootCustomDirectivesComponent } from './components/root-custom-directives/root-custom-directives.component';


const ROUTES: Routes = [{
  path: 'custom-directive',
  component: RootCustomDirectivesComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class CustomDirectiveRouter { }
