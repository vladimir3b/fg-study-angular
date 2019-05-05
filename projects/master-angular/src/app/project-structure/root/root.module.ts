import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './../../../../../.common/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DomainModelModule } from '../domain-model/domain-model.module';

import { ViewAndContentChildrenModule } from '../view-and-content-children/view-and-content-children.module';
import { CustomDirectivesModule } from '../custom-directives/custom-directives.module';

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
    ViewAndContentChildrenModule,
    DomainModelModule,
    CustomDirectivesModule
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
