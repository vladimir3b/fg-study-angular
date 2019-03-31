import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ManageDataService } from './../../services/manage-data.service';


@Component({
  selector: 'fg-second-grade-operations',
  templateUrl: './second-grade-operations.component.html'
})
export class SecondGradeOperationsComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _manageData: ManageDataService) {}
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

  multiply(): void {
    this._manageData.putData('multiply');
  }
  divide(): void {
    this._manageData.putData('divide');
  }
}
