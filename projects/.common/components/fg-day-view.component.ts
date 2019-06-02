import { Input, Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'fg-day-view',
  template: `
    <div>
      <h1 class="mt-3 ml-3">{{ event.title }}</h1>
      <hr>

      <div class="container">

        <div class="row">
          <div class="col-2 text-right">
            <strong>Description</strong>
          </div>
          <div class="col">
            {{ event.description }}
          </div>
        </div>

        <div class="row">
          <div class="col-2 text-right">
            <strong>Starting</strong>
          </div>
          <div class="col">
            {{ event.start }}
          </div>
        </div>

        <div class="row">
          <div class="col-2 text-right">
            <strong>Ending</strong>
          </div>
          <div class="col">
              {{ event.end }}
          </div>
        </div>

        <div class="row" *ngIf="event.isAllDay">
          <div class="col text-center">
            This is a full day event.
          </div>
        </div>

        <div class="row">
          <div class="col">
            <hr>
          </div>
        </div>

        <div class="row">
          <div class="col text-left">
            <ng-content></ng-content>
          </div>
          <div class="col text-right">
            <button class="btn btn-link"
                (click)="showMore()">
              show more...
            </button>
          </div>
        </div>

      </div>

    </div>

  `,
  styles: [
    `
      button {
        color: black !important;
      }
    `
  ]
})
export class FgDayViewComponent {
  @Input() event: SchedulerEvent;

  showMore() {
    console.log(this.event);
  }

}
