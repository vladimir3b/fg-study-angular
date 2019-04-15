import { Component, OnInit, OnDestroy } from '@angular/core';

import * as fromRoot from './../../../../data/store/app.reducer';
import { ITaskModel } from 'projects/my-to-do-app/src/app/data/models/task.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fg-list-tasks',
  templateUrl: './list-tasks.component.html',
  styles: []
})
export class ListTasksComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  tasks: Array<ITaskModel>;

  constructor(private _store: Store<fromRoot.IAppState>) { }

  ngOnInit() {
    this._subscriptions.push(this._store.select('tasks').subscribe(state => this.tasks = state.taskEvents));
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

}
