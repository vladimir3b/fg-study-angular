import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as fromRoot from './../../../../data/store/root.reducer';
import * as fromFilter from './../../../../data/store/filter/filter.actions';
import * as fromToDo from './../../../../data/store/to-do/to-do.actions';
import { Subscription } from 'rxjs';

interface IFilter {
  type: fromFilter.filterType;
  caption: string;
}

@Component({
  selector: 'fg-to-do-footer',
  templateUrl: './to-do-footer.component.html',
  styles: []
})
export class ToDoFooterComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> =[];
  filters: Array<IFilter> = [
    { type: 'all', caption: 'All' },
    { type: 'active', caption: 'Active' },
    { type: 'completed', caption: 'Completed' }
  ];
  selectedFilter: fromFilter.filterType;
  leftItems: number;

  constructor(private _store: Store<fromRoot.IRootState>) { }

  ngOnInit() {
    this._subscriptions.push(
      this._store.select('filter').subscribe(state => this.selectedFilter = state.filter)
    );
    this._subscriptions.push(
      this._store.select('toDo')
        .subscribe(state => this.leftItems = state.toDoEvents.filter(toDo => !toDo.completed).length)
    )
  }
  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  setFilter(filterType: fromFilter.filterType): void {
    this._store.dispatch(new fromFilter.SetFilterAction(filterType));
  }
  deleteCompletedToDo(): void {
    this._store.dispatch(new fromToDo.DeleteCompletedToDoAction());
  }
}
