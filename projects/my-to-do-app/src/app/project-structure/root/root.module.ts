import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../../../environments/environment.prod';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../../../../../.common/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TasksModule } from '../tasks/tasks.module';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { REDUCERS } from './../../data/store/app.reducer';

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RootRouter,
    TasksModule,
    SchedulerModule,
    StoreModule.forRoot(REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
