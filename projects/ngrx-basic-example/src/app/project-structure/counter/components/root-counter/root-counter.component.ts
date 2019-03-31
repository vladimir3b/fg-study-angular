import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromRoot from './../../../../data/store/root.reducer';

@Component({
  selector: 'fg-root-counter',
  templateUrl: './root-counter.component.html',
})
export class RootCounterComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  counter: number;

  constructor(private _store: Store<fromRoot.IState>) { }
  ngOnInit() {
    this._subscriptions.push(
      this._store
        .select('counter')
        .subscribe(counter => (this.counter = counter.value))
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
