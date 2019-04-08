import { Component } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import '@progress/kendo-date-math/tz/regions/Europe';
import '@progress/kendo-date-math/tz/regions/NorthAmerica';

@Component({
  selector: 'fg-example01-scheduler',
  templateUrl: './example01-scheduler.component.html'
})
export class Example01SchedulerComponent  {

  public selectedDate: Date = new Date('2018-10-22T00:00:00');
  public formGroup: FormGroup;
  public events: SchedulerEvent[];

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;

    this.formGroup = this.formBuilder.group({
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

  public getNextId(): number {
    const len = this.events.length;
    return (len === 0) ? 1 : this.events[this.events.length - 1].id + 1;
  }

}
