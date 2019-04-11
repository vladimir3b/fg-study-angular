import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TasksRootComponent } from './components/tasks-root/tasks-root.component';

const ROUTES: Routes = [{
  path: 'tasks',
  component: TasksRootComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TasksRouter { }
