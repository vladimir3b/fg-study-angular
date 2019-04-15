import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ITaskModel } from './../../../../data/models/task.model';
import * as fromRoot from './../../../../data/store/app.reducer';
import * as fromTasks from './../../../../data/store/tasks/tasks.actions';


@Component({
  selector: 'fg-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITaskModel;

  constructor(private _store: Store<fromRoot.IAppState>) { }
  ngOnInit() { }

  deleteTask() {
    this._store.dispatch(new fromTasks.DeleteTaskAction({ id: this.task.id }));
  }
  toggleCompleted() {
    this._store.dispatch(new fromTasks.ToggleCompletedTaskAction({ id: this.task.id }));
  }
}
