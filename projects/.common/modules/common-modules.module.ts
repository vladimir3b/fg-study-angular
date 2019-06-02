import { KendoModule } from './kendo.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FgWeekViewComponent } from '../components/fg-week-view.component';
import { FgDayViewComponent } from './../components/fg-day-view.component';
import { FgSchedulerComponent } from './../components/fg-scheduler.component';

const COMMON_MODULES = [
  MaterialModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  KendoModule
];
const COMMON_DECLARATIONS = [
  FgSchedulerComponent,
  FgDayViewComponent,
  FgWeekViewComponent
];

@NgModule({
  declarations: [
    ...COMMON_DECLARATIONS
  ],
  imports: [
    ...COMMON_MODULES
  ],
  exports: [
    ...COMMON_MODULES,
    ...COMMON_DECLARATIONS
  ]
})
export class CommonModulesModule {}
