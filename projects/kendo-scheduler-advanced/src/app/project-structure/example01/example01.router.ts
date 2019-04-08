import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example01RootComponent } from './components/example01-root/example01-root.component';

const ROUTES: Routes = [{
  path: 'example01',
  component: Example01RootComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class Example01Router { }
