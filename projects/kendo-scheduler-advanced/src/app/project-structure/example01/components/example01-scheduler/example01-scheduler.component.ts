import { ManageEventsService } from './../../services/manage-events.service';
import { Component, OnInit } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import '@progress/kendo-date-math/tz/regions/Europe';
import '@progress/kendo-date-math/tz/regions/NorthAmerica';

@Component({
  selector: 'fg-example01-scheduler',
  templateUrl: './example01-scheduler.component.html',
  styles: [
    `
      button {
        margin-right: 1rem;
      }
    `
  ]
})
export class Example01SchedulerComponent implements OnInit  {

  public selectedDate: Date = new Date('2018-10-22T00:00:00');
  public formGroup: FormGroup;
  public get events(): Array<SchedulerEvent> {
    return this._manageEvents.events;
  }
  public set events(evs: Array<SchedulerEvent>) {
    this._manageEvents.events = [ ...evs];
  }

  constructor(
      private _formBuilder: FormBuilder,
      private _manageEvents: ManageEventsService
    ) {
    this._manageEvents.initializeEvents();
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  ngOnInit() { }

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    this.formGroup = this._formBuilder.group({
      id: args.isNew ? this.getNextId() : dataItem.id,
      start: [dataItem.start, Validators.required],
      end: [dataItem.end, Validators.required],
      startTimezone: [dataItem.startTimezone],
      endTimezone: [dataItem.endTimezone],
      isAllDay: dataItem.isAllDay,
      title: [dataItem.title, Validators.required],
      description: dataItem.description,
      recurrenceRule: dataItem.recurrenceRule,
      recurrenceId: dataItem.recurrenceId
    });

    return this.formGroup;
  }

  getNextId(): number {
    const len = this.events.length;
    return (len === 0) ? 1 : this.events[this.events.length - 1].id + 1;
  }
  changeRandomEvent(): void {
    if (this.events.length) {
      const index = Math.floor(Math.random() * this.events.length);
      this._manageEvents.updateEvent(this.events[index].id, { ...this.events[index], title: 'Twin Peaks' });
    }
  }
  deleteRandomEvent(): void {
    if (this.events.length) {
      const index = Math.floor(Math.random() * this.events.length);
      this._manageEvents.deleteEvent(this.events[index].id);
    }
  }
  deleteAllEvents(): void {
    this._manageEvents.initializeEvents();
  }
}
