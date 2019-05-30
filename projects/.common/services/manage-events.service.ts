import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

export interface IMySchedulerEvent extends SchedulerEvent {
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ManageEventsService {
  private _events: Array<IMySchedulerEvent>;
  get events(): Array<IMySchedulerEvent> {
    return cloneDeep(this._events);
  }

  private _eventById(id: string): number {
    return this.events.findIndex((event: IMySchedulerEvent) => event.id === id);
  }
  private _idAlreadyExists(id: string): boolean {
    return this._eventById(id) >= 0;
  }
  initializeEvens(): void {
    this._events = [];
  }
  addEvent(event: IMySchedulerEvent): void {
    if (!this._idAlreadyExists(event.id)) {
      this._events.push(event);
    }
  }
  updateEvent(eventId: string, newEvent: IMySchedulerEvent): void {
    if (this._idAlreadyExists(eventId)) {
      this._events[this._eventById(eventId)] = { ...newEvent };
    }
  }
  deleteEvent(id: string): void {
    if (this._idAlreadyExists(id)) {
      this._events.splice(this._eventById(id), 1);
    }
  }
  deleteAllEvents(): void {
    this._events = [];
  }
}
