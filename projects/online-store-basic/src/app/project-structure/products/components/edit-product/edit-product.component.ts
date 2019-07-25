import { ManageProductsService } from './../../../_root/services/manage-products.service';
import { IProductModel } from './../../../../models/product.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './edit-product.component.html',
  styleUrls: [ './../../../../static-resources/styles/client-forms.scss']
})
export class EditProductComponent implements OnInit {
  product: IProductModel;
  editProductForm: FormGroup;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<EditProductComponent>,
    private _manageProducts: ManageProductsService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public _data: { productId: string }
  ) { }

  ngOnInit() {
    this.product = this._manageProducts.getProductById(this._data.productId);
    this.editProductForm = new FormGroup({
      name: new FormControl(this.product.name, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      price: new FormControl(this.product.price, Validators.required),
      isActive: new FormControl(this.product.isActive)
    });
  }

  onSubmit() {
    if (this.editProductForm.valid ) {
      const productId = this.product.productId;
      this._bottomSheetRef.dismiss({ productId, ...this.editProductForm.value });
    }
  }

  onCancel() {
    this._bottomSheetRef.dismiss();
  }

}
