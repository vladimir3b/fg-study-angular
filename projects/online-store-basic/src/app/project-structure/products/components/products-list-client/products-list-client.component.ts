import { ManageCartService } from './../../../_root/services/manage-cart.service';
import { Router } from '@angular/router';
import { ManageClientsService } from '../../../_root/services/manage-clients.service';
import { ManageProductsService } from '../../../_root/services/manage-products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { IProductModel } from '../../../../models/product.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatBottomSheet } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './products-list-client.component.html',
  styleUrls: [ './../../../../static-resources/styles/data-tables.scss']
})
export class ProductsListClientComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  get clientDeactivated(): boolean {
    return !(this._manageClients.loggedClient.isActive);
  }
  pageSizeOptions = [5, 10, 25, 50];
  option = 1;
  dataSource: MatTableDataSource<IProductModel>;
  displayedColumns: Array<string> = [
    'name',
    'price',
    'functions'
  ];
  subscriptions: Array<Subscription> = [];

  constructor(
      private _router: Router,
      private _bottomSheet: MatBottomSheet,
      private _manageCart: ManageCartService,
      private _manageProducts: ManageProductsService,
      private _manageClients: ManageClientsService) {
    this.dataSource = new MatTableDataSource(this._manageProducts.listOfProducts);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.subscriptions.push(this._manageProducts.isModified
      .subscribe(() => this.dataSource.data = this._manageProducts.listOfProducts));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddProductToCart(productId: string): void {
    const product = this._manageProducts.getProductById(productId);
    this._manageCart.addElementToCart({
      elementId: '',
      clientId: this._manageClients.loggedClient.clientId,
      productId,
      name: product.name,
      quantity: 1,
      price: product.price
    });
  }

  onShowProduct(productId: string): void {
    this._bottomSheet.open(ProductDetailsComponent, {
      data: { productId }
    });
  }

  onClickMessageButton(): void {
    this._router.navigate(['/client/setup']);
  }
}
