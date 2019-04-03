import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToDoModule } from '../to-do/to-do.module';
import { REDUCERS } from './../../data/store/root.reducer';
import { environment } from './../../../environments/environment';

@NgModule({
  declarations: [
    RootComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ToDoModule,
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
