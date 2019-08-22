import { RootRouter } from './root.router';
import { NavigationService } from './services/navigation.service';
import { RootComponent } from './components/root/root.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { QueryParametersComponent } from './components/query-parameters/query-parameters.component';
import { FragmentsComponent } from './components/fragments/fragments.component';
import { PathsComponent } from './components/paths/paths.component';
import { CompleteUrlComponent } from './components/complete-url/complete-url.component';

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent,
    MainHeaderComponent,
    HomeComponent,
    QueryParametersComponent,
    FragmentsComponent,
    PathsComponent,
    CompleteUrlComponent
  ],
  imports: [
    BrowserModule,
    RootRouter
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
