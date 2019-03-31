import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ICounterStore } from '../../ngrx/counter.actions';

@Component({
  selector: 'fg-root-counter',
  templateUrl: './root-counter.component.html',
})
export class RootCounterComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _store: Store<ICounterStore>) { }
  ngOnInit() {
    this._subscriptions.push(this._store.subscribe((state: ICounterStore) => this.counter = state.counter));
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
