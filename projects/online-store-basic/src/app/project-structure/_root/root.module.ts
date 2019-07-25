import { ManageCartService } from './services/manage-cart.service';
import { ManageClientsService } from './services/manage-clients.service';
import { ManageProductsService } from './services/manage-products.service';
import { NgModule } from '@angular/core';

import { CommonModulesModule } from '../../../../../.common/modules/common-modules.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { CartModule } from '../cart/cart.module';
import { ClientModule } from '../client/client.module';
import { ProductsModule } from '../products/products.module';
import { ShoppingsModule } from '../shoppings/shoppings.module';
import { ManageSellingsService } from './services/manage-sellings.service';

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModulesModule,
    RootRouter,
    CartModule,
    ClientModule,
    ProductsModule,
    ShoppingsModule,
  ],
  providers: [
    ManageProductsService,
    ManageClientsService,
    ManageCartService,
    ManageSellingsService
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
