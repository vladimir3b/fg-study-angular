import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as fromRoot from './../../../../data/store/root.reducer';
import * as fromToDo from './../../../../data/store/to-do/to-do.actions';

@Component({
  selector: 'fg-to-do-add',
  templateUrl: './to-do-add.component.html',
  styles: []
})
export class ToDoAddComponent implements OnInit {
  textInput: FormControl;

  constructor(private _store: Store<fromRoot.IRootState>) { }

  ngOnInit() {
    this.textInput = new FormControl('', Validators.required);
  }

  addToDo(): void {
    if (this.textInput.valid) {
      this._store.dispatch(new fromToDo.AddToDoAction(this.textInput.value));
      this.textInput.setValue('');
    }
  }
}
