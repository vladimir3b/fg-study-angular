import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ManagePersonsModule } from './../manage-persons/manage-persons.module';
import { CounterModule } from './../counter/counter.module';
import { RootRouter } from './root.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { counterReducer } from '../counter/ngrx/counter.reducer';

const MATERIAL = [
  MatTabsModule
];

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
  ],
  imports: [
    ...MATERIAL,
    BrowserModule,
    BrowserAnimationsModule,
    RootRouter,
    CounterModule,
    RootRouter,
    ManagePersonsModule,
    StoreModule.forRoot(counterRe)
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
