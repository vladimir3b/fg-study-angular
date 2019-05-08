import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example04RootComponent } from './components/example04-root/example04-root.component';
import { Example04SchedulerComponent } from './components/example04-scheduler/example04-scheduler.component';

@NgModule({
  declarations: [
    Example04RootComponent,
    Example04SchedulerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class Example04Module { }
