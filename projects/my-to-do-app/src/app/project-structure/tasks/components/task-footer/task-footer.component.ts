import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../../../data/store/app.reducer';
import * as fromTasks from './../../../../data/store/tasks/tasks.actions';

@Component({
  selector: 'fg-task-footer',
  templateUrl: './task-footer.component.html',
  styles: []
})
export class TaskFooterComponent implements OnInit {

  constructor(private _store: Store<fromRoot.IAppState>) { }

  ngOnInit() {
  }
  deleteCompletedTasks() {
    this._store.dispatch(new fromTasks.DeleteCompletedTasksAction());
  }

}
