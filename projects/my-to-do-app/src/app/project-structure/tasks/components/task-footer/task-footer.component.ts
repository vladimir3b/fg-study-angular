import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../../../data/store/app.reducer';
import * as fromTasks from './../../../../data/store/tasks/tasks.actions';
import * as fromFilter from './../../../../data/store/filter/filter.actions';
import { Subscription } from 'rxjs';
import { ITaskModel } from 'projects/my-to-do-app/src/app/data/models/task.model';

@Component({
  selector: 'fg-task-footer',
  templateUrl: './task-footer.component.html',
  styles: []
})
export class TaskFooterComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  tasks: Array<ITaskModel>;
  selectedFilter: fromFilter.filterType;

  constructor(private _store: Store<fromRoot.IAppState>) { }

  ngOnInit() {
    this._subscriptions.push(this._store.select('tasks').subscribe(state => this.tasks = state.taskEvents));
    this._subscriptions.push(this._store.select('filter').subscribe(state => this.selectedFilter = state.filter));
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  deleteCompletedTasks() {
    this._store.dispatch(new fromTasks.DeleteCompletedTasksAction());
  }
  setFilter(filter: fromFilter.filterType): void {
    this._store.dispatch(new fromFilter.SetFilterAction(filter));
  }

}
