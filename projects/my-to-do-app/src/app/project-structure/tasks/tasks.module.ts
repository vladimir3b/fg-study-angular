import { MaterialModule } from './../../../../../.common/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksRootComponent } from './components/tasks-root/tasks-root.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { TaskFooterComponent } from './components/task-footer/task-footer.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    TasksRootComponent,
    NewTaskComponent,
    ListTasksComponent,
    TaskFooterComponent,
    TaskItemComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
