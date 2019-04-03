import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromRoot from './../../../data/store/root.reducer';
import * as fromToDo from './../../../data/store/to-do/to-do.actions';


@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  getStoreValue = this._store.select('toDo');

  constructor(private _store: Store<fromRoot.IRootState>) { }

  putData(operation: fromToDo.operationType, payload?: string): void {
    switch(operation) {
      case 'add':
        this._store.dispatch(new fromToDo.AddToDoAction(payload));
        break;
    }
  }
}
