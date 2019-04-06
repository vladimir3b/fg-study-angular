import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import * as fromRoot from './../../../../data/store/root.reducer';
import * as fromToDo from './../../../../data/store/to-do/to-do.actions';

@Component({
  selector: 'fg-to-do',
  templateUrl: './to-do.component.html',
  styles: []
})
export class ToDoComponent  {
  allCompleted = false;

  constructor(private _store: Store<fromRoot.IRootState>) { }

  toggleAll():void {
    this.allCompleted = !this.allCompleted;
    this._store.dispatch(new fromToDo.ToggleAllToDoAction(this.allCompleted));
  }

}
