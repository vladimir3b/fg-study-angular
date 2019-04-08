import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';

const ROUTES: Routes = [{
  path: 'counter',
  component: CounterComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class CounterRouter { }
