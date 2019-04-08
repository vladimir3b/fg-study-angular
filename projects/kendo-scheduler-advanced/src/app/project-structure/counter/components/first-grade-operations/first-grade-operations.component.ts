import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ManageDataService } from './../../services/manage-data.service';

@Component({
  selector: 'fg-first-grade-operations',
  templateUrl: './first-grade-operations.component.html'
})
export class FirstGradeOperationsComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _manageData: ManageDataService) {}
  ngOnInit() {
    this._subscriptions.push(
      this._manageData.getStoreValue.subscribe(
        counter => this.counter = counter.value
      )
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  increment(): void {
    this._manageData.putData('increment');
  }
  decrement(): void {
    this._manageData.putData('decrement');
  }
}
