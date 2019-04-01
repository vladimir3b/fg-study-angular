import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromRoot from './../../../data/store/root.reducer';
import * as fromManagePersons from './../../../data/store/manage-persons/manage-persons.actions';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  getStoreValue = this._store.select('managePersons');

  constructor(private _store: Store<fromRoot.IState>) { }

  putData(operation: fromManagePersons.operationType,  payload?: fromManagePersons.IManagePersonsPayload): void {
    switch (operation) {
      case 'add-person':
        this._store.dispatch(new fromManagePersons.AddNewPersonAction(payload));
        break;
      case 'delete-person':
        this._store.dispatch(new fromManagePersons.DeletePersonAction(payload));
        break;
      case 'update-person':
        this._store.dispatch(new fromManagePersons.UpdatePersonAction(payload));
        break;
      case 'delete-all-persons':
        this._store.dispatch(new fromManagePersons.DeleteAllPersonsAction());
        break;
    }
  }
}
