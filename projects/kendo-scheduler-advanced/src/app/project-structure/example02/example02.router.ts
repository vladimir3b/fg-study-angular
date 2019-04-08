import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example02RootComponent } from './components/example02-root/example02-root.component';

const ROUTES: Routes = [{
  path: 'example02',
  component: Example02RootComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class Example02Router { }
