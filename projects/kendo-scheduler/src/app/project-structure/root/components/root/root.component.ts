import { Component, ChangeDetectorRef } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styles: [`
    button {
      margin-left: 1rem;
    }
  `]
})
export class RootComponent {
  selectedDate: Date = new Date();

  onReceivedDate(date: Date): void {
    this.selectedDate = date;
  }
}
