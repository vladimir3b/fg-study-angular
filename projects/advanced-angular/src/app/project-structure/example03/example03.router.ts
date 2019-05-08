import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Example03RootComponent } from './components/example03-root/example03-root.component';

const ROUTES: Routes = [{
  path: 'example03',
  component: Example03RootComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class Example03Router { }
