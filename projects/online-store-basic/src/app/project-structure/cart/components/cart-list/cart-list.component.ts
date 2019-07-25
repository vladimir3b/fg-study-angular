import { ManageSellingsService } from './../../../_root/services/manage-sellings.service';
import { ManageCartService } from './../../../_root/services/manage-cart.service';
import { ManageClientsService } from './../../../_root/services/manage-clients.service';
import {  MatSort, MatTableDataSource } from '@angular/material';
import { ICartModel } from './../../../../models/cart.mode';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';


@Component({
  selector: 'fg-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: [ './../../../../static-resources/styles/data-tables.scss' ]
})
export class CartListComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  get clientDeactivated(): boolean {
    return !(this._manageClients.loggedClient.isActive);
  }
  shoppingCart: MatTableDataSource<ICartModel>;
  oldShoppingCart: Array<ICartModel>;
  shoppingDone = false;
  displayedColumns = [
    'name',
    'price',
    'quantity',
    'actions'
  ];
  subscriptions: Array<Subscription> = [];
  invoiceDetails(): string {
    return `
      <h6>Here are your invoice details</h6>
      <div class="container mat-elevation-z1">
        <div class="row">
          <div class="col text-center">
            <h1>Your Online Market</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="row">
              <div class="col-2 text-right"><strong>Username</strong></div>
              <div class="col">${this._manageClients.loggedClient.username}</div>
            </div>
            <div class="row">
              <div class="col-2 text-right"><strong>Email</strong></div>
              <div class="col">${this._manageClients.loggedClient.email}</div>
            </div>
            <div class="row">
              <div class="col-2 text-right"><stong>Phone</stong></div>
              <div class="col">${this._manageClients.loggedClient.phone}</div>
            </div>
          </div>
            <div class="col">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum optio
            quis id beatae molestias iusto dignissimos ipsa doloribus nisi ratione
            obcaecati sequi, asperiores quos reprehenderit rem aspernatur corporis et.
            Animi reprehenderit dolore cumque in ut esse minima tenetur commodi
            perspiciatis quis quidem mollitia, natus laudantium nam assumenda.
            Esse est aliquam quia labore laboriosam dolorum ratione!
          </div>
        </div>
      </div>


    `;
  }

  constructor(
    private _manageClients: ManageClientsService,
    private _manageCart: ManageCartService,
    private _manageSellings: ManageSellingsService,
    private _router: Router
  ) {
    this.shoppingCart = new MatTableDataSource(this._manageCart.shoppingCart);
  }

  ngOnInit() {
    this.shoppingCart.sort = this.sort;
    this.subscriptions.push(this._manageCart.cartChanged
      .subscribe(() => this.shoppingCart.data = this._manageCart.shoppingCart))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  calculateTotal(): number {
    let total = 0;
    this.shoppingCart.data.forEach(element => {
      total += element.quantity * element.price;
    });
    return total;
  }

  onUpdateQuantity(element: ICartModel): void {
    if (element.quantity <= 0) {
      element.quantity = 1;
    }
    this._manageCart.updateElementQuantity(element);
  }

  onDeleteFromCart(element: ICartModel): void {
    this._manageCart.deleteElement(element);
  }

  onClickClientInactiveButton(): void {
    this._router.navigate(['/client/setup']);
  }

  onClickInvoiceButton(): void {
    this._router.navigate(['/client/products']);
  }

  buyItAll() {
    this.shoppingDone = true;
    this.oldShoppingCart = _.cloneDeep(this._manageCart.shoppingCart);
    const clientId = this._manageClients.loggedClient.clientId;
    this.oldShoppingCart.forEach(element => {
      this._manageSellings.addToSellingHistory({
        clientId,
        date: new Date(),
        productId: element.productId,
        quantity: element.quantity,
        price: element.price,
        sellingId: ''
      });
      this._manageCart.deleteElement(element);
    });
  }
}
