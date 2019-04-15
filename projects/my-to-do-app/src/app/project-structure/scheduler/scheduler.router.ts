import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootSchedulerComponent } from './components/root-scheduler/root-scheduler.component';

const ROUTES: Routes = [{
  path: 'scheduler',
  component: RootSchedulerComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class SchedulerRouter { }
