import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

import { RootComponent } from './components/root/root.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SchedulerModule
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
