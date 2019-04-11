import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  today = new Date();
  newTaskForm: FormGroup;

  constructor() { }

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
      console.log(this.newTaskForm.value);
    }
  }

}
