import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import * as fromRoot from './../../../../data/store/root.reducer';
import * as fromFilter from './../../../../data/store/filter/filter.actions';
import { IToDoModel } from 'projects/to-do-app/src/app/data/models/to-do.model';

@Component({
  selector: 'fg-to-do-list',
  templateUrl: './to-do-list.component.html',
  styles: []
})
export class ToDoListComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  toDoList: Array<IToDoModel>;
  selectedFilter: fromFilter.filterType;

  constructor(private _store: Store<fromRoot.IRootState>) { }

  ngOnInit() {
    this._subscriptions.push(
      this._store.select('toDo').subscribe(state => this.toDoList = state.toDoEvents)
    );
    this._subscriptions.push(
      this._store.select('filter').subscribe(state => this.selectedFilter = state.filter)
    )
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

}
