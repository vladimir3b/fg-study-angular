import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example03RootComponent } from './components/example03-root/example03-root.component';
import { Example03SchedulerComponent } from './components/example03-scheduler/example03-scheduler.component';

@NgModule({
  declarations: [
    Example03RootComponent,
    Example03SchedulerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class Example03Module { }
