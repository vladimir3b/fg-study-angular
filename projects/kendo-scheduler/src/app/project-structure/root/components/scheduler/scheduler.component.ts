import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'fg-scheduler',
  templateUrl: './scheduler.component.html',
  styles: [`
    button {
      margin-left: 1rem;
    }
  `]
})
export class SchedulerComponent {
  refresh = true;
  selectViewIndex = 0;
  @Input() selectedDate: Date;
  formGroup: FormGroup;
  events: Array<SchedulerEvent> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _cd: ChangeDetectorRef) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;

    this.formGroup = this._formBuilder.group({
      id: args.isNew ? this.getNextId() : dataItem.id,
      start: [dataItem.start, Validators.required],
      end: [dataItem.end, Validators.required],
      startTimezone: [dataItem.startTimezone],
      endTimezone: [dataItem.endTimezone],
      isAllDay: dataItem.isAllDay,
      title: dataItem.title,
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
  showAllEvents(): void {
    console.log(this.events);
  }
  changeEventTitle(): void {
    this.refresh = false;
    setTimeout(() => this.refresh = true, 1000);
    this.events[0].title = 'Title changed';
    this._cd.detectChanges();
  }
}
