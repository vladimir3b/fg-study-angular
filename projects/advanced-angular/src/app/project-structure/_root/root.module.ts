import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../../../.common/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Example02Module } from '../example02/example02.module';
import { Example03Module } from '../example03/example03.module';
import { Example04Module } from '../example04/example04.module';
import { DynamicComponentsModule } from '../dynamic-components/dynamic-components.module';

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
    DynamicComponentsModule,
    Example02Module,
    Example03Module,
    Example04Module
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
