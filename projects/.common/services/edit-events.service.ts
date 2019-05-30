import { Injectable } from '@angular/core';
import { BaseEditService, SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { ManageEventsService, IMySchedulerEvent } from './manage-events.service';


@Injectable({
  providedIn: 'root'
})
export class EditEventsService extends BaseEditService<IMySchedulerEvent> {
  constructor(private _manageEvents: ManageEventsService) {
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
      recurrenceId: 'recurrenceID',
      recurrenceExceptions: 'recurrenceException'
    });
   }

  save(
    created: Array<IMySchedulerEvent>,
    updated: Array<IMySchedulerEvent>,
    deleted: Array<IMySchedulerEvent>
  ) {
    created.forEach(event => this._manageEvents.addEvent(event));
    updated.forEach(event => this._manageEvents.updateEvent(event.id, event));
    deleted.forEach(event => this._manageEvents.deleteEvent(event.id));
  }
}
