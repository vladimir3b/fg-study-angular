import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ICounterStore } from '../../ngrx/counter.actions';
import * as fromCounter from './../../ngrx/counter.actions';


@Component({
  selector: 'fg-first-grade-operations',
  templateUrl: './first-grade-operations.component.html'
})
export class FirstGradeOperationsComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _store: Store<ICounterStore>) { }
  ngOnInit() {
    this._subscriptions
      .push(this._store.select('counter').subscribe((counter: number) => this.counter = counter));
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  increment(): void {
    this._store.dispatch(new fromCounter.IncrementAction());
  }
  decrement(): void {
    this._store.dispatch(new fromCounter.DecrementAction());
  }

}
