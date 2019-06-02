import { Component, OnInit } from '@angular/core';

import { A_SINGLE_EVENT } from './../../../../../../../.common/dumb-data/a-single_event.data';
import { ManageEventsService } from './../../../../../../../.common/services/manage-events.service';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  constructor(private _manageEvents: ManageEventsService) {
    this._manageEvents.initializeEvens();
    A_SINGLE_EVENT.forEach(event => this._manageEvents.addEvent({
      id: event.eventId,
      userId: event.userId,
      title: event.title,
      description: event.description,
      isAllDay: event.allDayEvent,
      start: new Date(event.startingMoment),
      end: new Date(event.endingMoment)
    }));
  }
}

