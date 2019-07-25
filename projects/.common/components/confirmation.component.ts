import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface IConfirmationData {
  caption: string;
  message: string;
  cancelButtonCaption?: string;
  okButtonCaption?: string;
}

@Component({
  template: `
  <h1 mat-dialog-title>{{ caption }}</h1>
    <div mat-dialog-content>
      <p>{{ message }}</p>
    </div>
    <div fxLayout="row"
        fxLayoutAlign="space-evenly center"
        class="mb-2"
        mat-dialog-actions>
      <button class="btn btn-info"
          cdkFocusInitial
          (click)="onCancelClick()">
        {{ cancelButtonCaption }}
      </button>
      <button class="btn btn-danger"
          cdkFocusInitial
          (click)="onOkClick()">
        {{ okButtonCaption }}
      </button>
    </div>
  `
})
export class ConfirmationComponent implements OnInit {
  caption: string;
  message: string;
  cancelButtonCaption: string;
  okButtonCaption: string;
  constructor(
    private _dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IConfirmationData
  ) { }

  ngOnInit() {
    this.caption = this._data.caption;
    this.message = this._data.message;
    this.cancelButtonCaption = (this._data.cancelButtonCaption) ? this._data.cancelButtonCaption : 'Cancel';
    this.okButtonCaption = (this._data.okButtonCaption) ? this._data.okButtonCaption : 'Ok';
  }

  onOkClick(): void {
    this._dialogRef.close(true);
  }

  onCancelClick(): void {
    this._dialogRef.close(false);
  }

}
