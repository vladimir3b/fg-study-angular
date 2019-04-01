import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPersonModel } from './../../../../data/persons/person.model';
import { ManageDataService } from './../../services/manage-data.service';
import { PERSONS } from './../../../../data/persons/persons.data';

@Component({
  selector: 'fg-manage-persons',
  templateUrl: './manage-persons.component.html'
})
export class ManagePersonsComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  persons: Array<IPersonModel>;

  constructor(private _manageData: ManageDataService) {}
  ngOnInit() {
    this._subscriptions.push(
      this._manageData.getStoreValue.subscribe(
        state => this.persons = state.persons
      )
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  onPopulateList(): void {
    PERSONS.forEach((person: IPersonModel) => this._manageData.putData('add-person', { person }));
  }
  onClearList(): void {
    PERSONS.forEach((person: IPersonModel) => this._manageData.putData('delete-all-persons'));
  }

}
