import { Injectable } from '@angular/core';

import * as fromRoot from './../../../data/store/root.reducer';
import * as fromCounter from './../../../data/store/counter/counter.actions';
import { Store } from '@ngrx/store';

type operationType = 'increment' | 'decrement' | 'multiply' | 'divide' | 'reset';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  getStoreValue = this._store.select('counter');

  constructor(private _store: Store<fromRoot.IState>) {}

  putData(operation: operationType): void {
    switch (operation) {
      case 'increment':
        this._store.dispatch(new fromCounter.IncrementAction());
        break;
      case 'decrement':
        this._store.dispatch(new fromCounter.DecrementAction());
        break;
      case 'multiply':
        this._store.dispatch(new fromCounter.MultiplyAction(2));
        break;
      case 'divide':
        this._store.dispatch(new fromCounter.DivideAction(4));
        break;
      case 'reset':
        this._store.dispatch(new fromCounter.ResetAction());
        break;
    }
  }
}
