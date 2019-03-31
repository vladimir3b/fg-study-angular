import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ICounterStore } from '../../ngrx/counter.actions';
import * as fromCounter from './../../ngrx/counter.actions';

@Component({
  selector: 'fg-second-grade-operations',
  templateUrl: './second-grade-operations.component.html'
})
export class SecondGradeOperationsComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _store: Store<ICounterStore>) {}
  ngOnInit() {
    this._subscriptions
      .push(this._store.select('counter').subscribe((counter: number) => this.counter = counter));
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  multiply(): void {
    this._store.dispatch(new fromCounter.MultiplyAction(1.5));
  }
  divide(): void {
    this._store.dispatch(new fromCounter.DivideAction(1.5));
  }
}
