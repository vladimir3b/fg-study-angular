import { MaterialModule } from './../../../../../.common/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KendoModule } from './../../../../../.common/kendo.module';
import { ManageEventsService } from './services/manage-events.service';
import { Example01RootComponent } from './components/example01-root/example01-root.component';
import { Example01SchedulerComponent } from './components/example01-scheduler/example01-scheduler.component';

@NgModule({
  declarations: [
    Example01RootComponent,
    Example01SchedulerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    KendoModule
  ],
  providers: [ ManageEventsService ]
})
export class Example01Module { }
