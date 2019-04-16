import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs, SaveEvent, RemoveEvent } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import '@progress/kendo-date-math/tz/regions/Europe';
import '@progress/kendo-date-math/tz/regions/NorthAmerica';
import * as fromRoot from './../../../../data/store/app.reducer';
import * as fromTasks from './../../../../data/store/tasks/tasks.actions';


@Component({
  selector: 'fg-root-scheduler',
  templateUrl: './root-scheduler.component.html',
  styleUrls: ['./root-scheduler.component.scss']
})
export class RootSchedulerComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  selectedDate: Date = new Date();
  formGroup: FormGroup;
  events: Array<SchedulerEvent> = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<fromRoot.IAppState>
  ) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  ngOnInit() {
    this._subscriptions.push(this._store.select('tasks').subscribe(state => {
      this.events = [];
      state.taskEvents.forEach(task => (task.start && !task.completed) ? this.events.push({
        id: task.id,
        title: task.title,
        start: task.start,
        end: task.end || task.start,
        isAllDay: true
      }) : null);
    }));
  }
  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

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
  onSave($event: SaveEvent) {
    // console.log($event);
    if ($event.formGroup.valid) {
      if ($event.formGroup.value.isAllDay) {
        if ($event.isNew) {
          this._store.dispatch(new fromTasks.AddTaskAction({
            task: {
              id: $event.formGroup.value.id,
              title: $event.formGroup.value.title,
              start: $event.formGroup.value.start,
              end: $event.formGroup.value.end,
              completed: false,
              priority: 1
            }
          }));
        } else {
          console.log($event.formGroup.value.title);
          this._store.dispatch(new fromTasks.UpdateTaskAction({
            id: $event.formGroup.value.id,
            task: {
              id: $event.formGroup.value.id,
              title: $event.formGroup.value.title,
              start: $event.formGroup.value.start,
              end: $event.formGroup.value.end,
              completed: false
            }
          }));
        }
      }
    }
  }
  onDelete($event: RemoveEvent) {
    $event.sender.cancel.subscribe(respond => console.log('cacat'));
  }


}

