import { NavigationService } from './services/navigation.service';
import { SharedModules } from './../../../../../.shared-resources/modules/shared.module';
import { RootComponent } from './components/root/root.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    MainNavigationComponent,
    SidebarNavigationComponent,
    MainHeaderComponent
  ],
  imports: [
    SharedModules
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule {

}
