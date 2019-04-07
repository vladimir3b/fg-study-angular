import { RANDOM_TITLES } from './random-titles';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs, RemoveEvent } from '@progress/kendo-angular-scheduler';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'fg-scheduler',
  templateUrl: './scheduler.component.html',
  styles: [`
    button {
      margin-left: 1rem;
    }
  `]
})
export class SchedulerComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  @Input() selectedDate: Date;
  // tslint:disable-next-line:no-output-rename
  @Output('events') eventsEmitter: EventEmitter<Array<SchedulerEvent>> = new EventEmitter();
  refresh = true;
  selectViewIndex = 0;
  formGroup: FormGroup;
  events: Array<SchedulerEvent> = [];

  constructor(private _formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  ngOnInit(): void {
    interval(100000).subscribe(() => {
      this.updateRandomEvent();
    });
  }
  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
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
  updateRandomEvent(): void {
    if (this.events.length) {
      const index = Math.floor(Math.random() * this.events.length);
      this.events[index].title = RANDOM_TITLES[Math.floor(Math.random() * RANDOM_TITLES.length)];
      this.onExternalEventsChange();
      // this.onEventsChanged();
    }
  }
  onExternalEventsChange() {
    this.refresh = false;
    setTimeout(() => this.refresh = true, 10000);
  }
  onAddEvent($event: any): void {
    setTimeout(() => this.eventsEmitter.emit(this.events), 10); // This is not alright at all and can cause problems
  }
  onRemoveEvent($event: RemoveEvent): void {
    this._subscriptions.push(
      $event.sender.removeConfirmed
        .subscribe(answer => console.log(answer))
    );
  }
}
