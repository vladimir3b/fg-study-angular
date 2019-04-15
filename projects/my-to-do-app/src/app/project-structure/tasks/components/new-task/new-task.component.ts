import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from './../../../../data/store/app.reducer';
import * as fromTasks from './../../../../data/store/tasks/tasks.actions';
import { MatSlideToggle } from '@angular/material';

@Component({
  selector: 'fg-new-task',
  templateUrl: './new-task.component.html',
  styles: [`
    .mat-form-field {
      width: 100%;
    }
    .label {
      font-family: Roboto, "Helvetica Neue", sans-serif;
    }
  `]
})
export class NewTaskComponent implements OnInit {
  @ViewChild('more') toggleMore: MatSlideToggle;
  today = new Date();
  newTaskForm: FormGroup;

  constructor(private _store: Store<fromRoot.IAppState>) { }

  ngOnInit() {
    this.newTaskForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      start: new FormControl(null),
      end: new FormControl(null),
      priority: new FormControl(null)
    });
  }

  onSubmit(): void {
    if (this.newTaskForm.valid) {
      this._store.dispatch(new fromTasks.AddTaskAction({
        task: {
          id: `${Math.random()}`,
          title: this.newTaskForm.value.title,
          start: this.newTaskForm.value.start,
          end: this.newTaskForm.value.end,
          priority: this.newTaskForm.value.priority,
          completed: false
        }
      }));
      this.newTaskForm.reset(); // I don't know why it emphasizes title as it had an error...
      this.toggleMore.checked = false;
    }
  }

}
;
