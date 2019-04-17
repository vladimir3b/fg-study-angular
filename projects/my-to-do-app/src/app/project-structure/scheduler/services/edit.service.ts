import { Injectable } from '@angular/core';
import { BaseEditService, SchedulerEvent } from '@progress/kendo-angular-scheduler';

import * as fromRoot from './../../../data/store/app.reducer';
import * as fromTasks from './../../../data/store/tasks/tasks.actions';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class EditService extends BaseEditService<SchedulerEvent> {

  constructor(private _store: Store<fromRoot.IAppState>) {
    super({
      id: 'id',
      title: 'title',
      description: 'description',
      startTimezone: 'startTimezone',
      start: 'start',
      end: 'end',
      endTimezone: 'endTimezone',
      isAllDay: 'isAllDay',
      recurrenceRule: 'recurrenceRule',
      recurrenceId: 'recurrenceId',
      recurrenceExceptions: 'recurrenceException'
    });
  }

  save(
      created: Array<SchedulerEvent>,
      updated: Array<SchedulerEvent>,
      deleted: Array<SchedulerEvent>
  ): void {
    created.forEach(event => event.isAllDay ? this._store.dispatch(new fromTasks.AddTaskAction({
      task: {
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        completed: false,
        priority: 1
      }
    })) : null);

    updated.forEach(event => event.isAllDay ? this._store.dispatch(new fromTasks.UpdateTaskAction({
      id: event.id,
      task: {
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        completed: false,
        priority: 1
      }
    })) : null);
  }
}
