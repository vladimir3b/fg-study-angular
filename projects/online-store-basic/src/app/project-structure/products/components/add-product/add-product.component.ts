import { SimulateDatabase } from './../../../../../../../.common/classes/similate-database';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './add-product.component.html',
  styleUrls: [ './../../../../static-resources/styles/client-forms.scss']
})
export class AddProductComponent implements OnInit {
  editProductForm: FormGroup;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AddProductComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public _data: { productId: string }
  ) { }

  ngOnInit() {
    this.editProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      isActive: new FormControl(false)
    });
  }

  onSubmit() {
    if (this.editProductForm.valid ) {
      this._bottomSheetRef.dismiss({
        productId: SimulateDatabase.generateUniqueId(25),
        ...this.editProductForm.value
      });
    }
  }

  onCancel() {
    this._bottomSheetRef.dismiss();
  }

}
