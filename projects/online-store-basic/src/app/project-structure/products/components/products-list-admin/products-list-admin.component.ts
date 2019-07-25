import { AddProductComponent } from './../add-product/add-product.component';
import { ConfirmationComponent } from './../../../../../../../.common/components/confirmation.component';
import { ManageProductsService } from '../../../_root/services/manage-products.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { IProductModel } from '../../../../models/product.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatBottomSheet, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './products-list-admin.component.html',
  styleUrls: [ './../../../../static-resources/styles/data-tables.scss']
})
export class ProductsListAdminComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSizeOptions = [5, 10, 25, 50];
  option = 1;
  dataSource: MatTableDataSource<IProductModel>;
  displayedColumns: Array<string> = [
    'name',
    'price',
    'isActive',
    'functions'
  ];
  subscriptions: Array<Subscription> = [];

  constructor(
      private _bottomSheet: MatBottomSheet,
      private _manageProducts: ManageProductsService,
      private _dialog: MatDialog) {
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

  onEditProduct(productId: string): void {
    const editProductDetails = this._bottomSheet.open(EditProductComponent, {
      data: { productId }
    });
    this.subscriptions.push(editProductDetails.afterDismissed().subscribe(answer => {
      if (answer) {
        this._manageProducts.updateProduct(answer);
      }
    }));
  }

  addProduct(): void {
    const addProduct = this._bottomSheet.open(AddProductComponent);
    this.subscriptions.push(addProduct.afterDismissed().subscribe(answer => this._manageProducts.addNewProduct(answer)));
  }

  onDeleteProduct(productId: string): void {
    const product = this._manageProducts.getProductById(productId);
    const confirmationDialogue = this._dialog.open(ConfirmationComponent, {
      data: {
        caption: 'Confirm deletion...',
        message: `Are you sure you want to delete product '${product.name}'?`,
        okButtonCaption: 'Yes',
        cancelButtonCaption: 'No'
      }
    });
    this.subscriptions.push(confirmationDialogue.afterClosed().subscribe(answer => {
      if (answer) {
        this._manageProducts.deleteProductById(product.productId);
      }
    }));
  }

  onDeleteAllProducts(): void {
    const confirmationDialogue = this._dialog.open(ConfirmationComponent, {
      data: {
        caption: 'Confirm deletion...',
        message: `Are you sure you want to delete all the products?`,
        okButtonCaption: 'Yes',
        cancelButtonCaption: 'No'
      }
    });
    this.subscriptions.push(confirmationDialogue.afterClosed().subscribe(answer => {
      if (answer) {
        this._manageProducts.deleteAllProducts();
      }
    }));
  }

}
