import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import * as fromRoot from './../../../../data/store/root.reducer';
import { IToDoModel } from 'projects/to-do-app/src/app/data/models/to-do.model';

@Component({
  selector: 'fg-to-do-list',
  templateUrl: './to-do-list.component.html',
  styles: []
})
export class ToDoListComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  toDoList: Array<IToDoModel>

  constructor(private _store: Store<fromRoot.IRootState>) { }

  ngOnInit() {
    this.subscriptions.push(
      this._store.select('toDo').subscribe(toDo => this.toDoList = toDo.toDoEvents)
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

}
