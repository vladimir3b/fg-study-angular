import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ManageDataService } from './../../services/manage-data.service';

@Component({
  selector: 'fg-to-do-add',
  templateUrl: './to-do-add.component.html',
  styles: []
})
export class ToDoAddComponent implements OnInit {
  textInput: FormControl;

  constructor(private _manageData: ManageDataService) { }

  ngOnInit() {
    this.textInput = new FormControl('', Validators.required);
  }

  addToDo(): void {
    if (this.textInput.valid) {
      this._manageData.putData('add', this.textInput.value);
      this.textInput.setValue('');
    }
  }
}
