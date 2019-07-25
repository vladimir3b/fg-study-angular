import { ManageClientsService } from './manage-clients.service';
import { PRODUCTS_DUMB_DATA } from './../../../static-resources/dumb-data/products.dumb-data';
import { IProductModel } from './../../../models/product.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Subject } from 'rxjs';

@Injectable()
export class ManageProductsService {
  private _listOfProducts: Array<IProductModel>;
  isModified: Subject<void> = new Subject();
  get listOfProducts(): Array<IProductModel> {
    return _.cloneDeep(
      this._manageClients.userStatus === 'admin' ? this._listOfProducts : this._listOfProducts.filter(product => product.isActive)
    );
  }
  constructor(private _manageClients: ManageClientsService) {
    this._listOfProducts = PRODUCTS_DUMB_DATA;
  }

  private _findProductIndexById(productId: string): number {
    return this._listOfProducts.findIndex(product => product.productId === productId);
  }

  getProductById(productId: string): IProductModel {
    return this.listOfProducts.find(product => product.productId === productId);
  }

  deleteProductById(productId: string): void {
    const toBeDeletedIndex = this._findProductIndexById(productId);
    if (toBeDeletedIndex >= 0) {
      this._listOfProducts.splice(toBeDeletedIndex, 1);
      this.isModified.next();
    }
  }

  updateProduct(product: IProductModel): void {
    const toBeUpdatedIndex = this._findProductIndexById(product.productId);
    if (toBeUpdatedIndex >= 0) {
      this._listOfProducts[toBeUpdatedIndex] = _.cloneDeep(product);
      this.isModified.next();
    }
  }

  addNewProduct(product: IProductModel): void {
    this._listOfProducts.push(product);
    this.isModified.next();
  }

  deleteAllProducts() {
    this._listOfProducts = [];
    this.isModified.next();
  }

}
