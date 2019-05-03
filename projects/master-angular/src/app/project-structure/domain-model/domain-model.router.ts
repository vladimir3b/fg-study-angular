import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootDomainModelComponent } from './components/root-domain-model/root-domain-model.component';

const ROUTES: Routes = [{
  path: 'domain-model',
  component: RootDomainModelComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class DomainModelRouter { }
