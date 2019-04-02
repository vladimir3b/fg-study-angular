import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';

import { ToDoModule } from '../to-do/to-do.module';

@NgModule({
  declarations: [
    RootComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ToDoModule
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
