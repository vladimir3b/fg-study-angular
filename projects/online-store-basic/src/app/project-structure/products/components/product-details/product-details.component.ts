import { ManageProductsService } from './../../../_root/services/manage-products.service';
import { IProductModel } from './../../../../models/product.model';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  product: IProductModel;

  constructor(
    private _manageProducts: ManageProductsService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public _data: { productId: string }
  ) { }

  ngOnInit() {
    this.product = this._manageProducts.getProductById(this._data.productId);
  }

}
