import { NgModule } from '@angular/core';

import { CommonModulesModule } from '../../../../../.common/modules/common-modules.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { Example01Module } from '../example01/example01.module';
import { Example02Module } from '../example02/example02.module';
import { Example03Module } from '../example03/example03.module';

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    CommonModulesModule,
    RootRouter,
    Example01Module,
    Example02Module,
    Example03Module
  ],
  providers: [  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
