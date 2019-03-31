import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ManageDataService } from '../../services/manage-data.service';

@Component({
  selector: 'fg-third-grade-operations',
  templateUrl: './third-grade-operations.component.html'
})
export class ThirdGradeOperationsComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _manageData: ManageDataService) { }
  ngOnInit() {
    this._subscriptions.push(
      this._manageData.getStoreValue.subscribe(
        counter => (this.counter = counter.value)
      )
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  reset() {
    this._manageData.putData('reset');
  }
}
