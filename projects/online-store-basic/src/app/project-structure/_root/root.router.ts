import { ProductsListAdminComponent } from './../products/components/products-list-admin/products-list-admin.component';
import { ProductsListClientComponent } from './../products/components/products-list-client/products-list-client.component';
import { RouterGuardClients, RouterGuardAdmin, RouterGuardSignup } from './services/manage-clients.service';
import { ShoppingListComponent } from './../shoppings/components/shopping-list/shopping-list.component';
import { CartListComponent } from './../cart/components/cart-list/cart-list.component';
import { EditClientComponent } from './../client/components/edit-client/edit-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from '../client/components/login/login.component';
import { SignupClientComponent } from './../client/components/signup-client/signup-client.component';


const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'admin/history',
    pathMatch: 'full'
  },
  {
    path: 'client',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'client/signup',
    component: SignupClientComponent,
    canActivate: [RouterGuardSignup]
  },
  {
    path: 'client/setup',
    component: EditClientComponent,
    canActivate: [RouterGuardClients]
  },
  {
    path: 'client/products',
    component: ProductsListClientComponent,
    canActivate: [RouterGuardClients]
  },
  {
    path: 'client/cart',
    component: CartListComponent,
    canActivate: [RouterGuardClients]
  },
  {
    path: 'admin/products',
    component: ProductsListAdminComponent,
    canActivate: [RouterGuardAdmin]
  },
  {
    path: 'admin/history',
    component: ShoppingListComponent,
    canActivate: [RouterGuardAdmin]
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTER)
  ],
  providers: [
    RouterGuardClients,

  ],
  exports: [
    RouterModule,
  ]
})
export class RootRouter { }
