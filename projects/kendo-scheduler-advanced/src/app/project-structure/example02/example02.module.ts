import { MaterialModule } from './../../../../../.common/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example02RootComponent } from './components/example02-root/example02-root.component';
import { Example02SchedulerComponent } from './components/example02-scheduler/example02-scheduler.component';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
  declarations: [
    Example02RootComponent,
    Example02SchedulerComponent,
    FullNamePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class Example02Module { }
