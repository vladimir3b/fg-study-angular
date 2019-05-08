import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example02RootComponent } from './components/example02-root/example02-root.component';
import { Example02SchedulerComponent } from './components/example02-scheduler/example02-scheduler.component';

@NgModule({
  declarations: [
    Example02RootComponent,
    Example02SchedulerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class Example02Module { }
