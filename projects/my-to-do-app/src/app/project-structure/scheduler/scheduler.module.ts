import { KendoModule } from './../../../../../.common/kendo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootSchedulerComponent } from './components/root-scheduler/root-scheduler.component';
import { MaterialModule } from 'projects/.common/material.module';

@NgModule({
  declarations: [RootSchedulerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    KendoModule
  ]
})
export class SchedulerModule { }
