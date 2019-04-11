import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './../../../../../.common/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TasksModule } from '../tasks/tasks.module';

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RootRouter,
    TasksModule,
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
