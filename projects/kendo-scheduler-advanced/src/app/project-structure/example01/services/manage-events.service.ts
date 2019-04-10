import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Injectable({
  providedIn: 'root'
})
export class ManageEventsService {
  public events: Array<SchedulerEvent>;

  initializeEvents(): void {
    this.events = [];
  }
  updateEvent(id: number, newEvent: SchedulerEvent) {
    this.events = [...this.events];
    const index = this.events.findIndex(event  =>  event.id === id);
    this.events[index] = { ...this.events[index], ...newEvent };
  }
  deleteEvent(id: number): void {
    this.events = [...this.events];
    const index = this.events.findIndex(event => event.id === id);
    this.events.splice(index, 1);
  }
}
