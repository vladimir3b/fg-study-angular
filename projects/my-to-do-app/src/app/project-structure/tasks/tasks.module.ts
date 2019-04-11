import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRootComponent } from './components/tasks-root/tasks-root.component';

@NgModule({
  declarations: [
    TasksRootComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class TasksModule { }
