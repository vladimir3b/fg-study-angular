import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example04RootComponent } from './components/example04-root/example04-root.component';

const ROUTES: Routes = [{
  path: 'example04',
  component: Example04RootComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class Example04Router { }
