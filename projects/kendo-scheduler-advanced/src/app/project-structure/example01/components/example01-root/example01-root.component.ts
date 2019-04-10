import { ManageEventsService } from './../../services/manage-events.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'fg-example01-root',
  templateUrl: './example01-root.component.html',
  styles: [`
    table {
      width: 100%;
    }
    button {
      margin-right: 1rem;
    }
    td, th {
      padding: 1rem !important;
    }
    tr:hover {
      background-color: #DAF7A6 !important;
    }
    th {
      font-weight: bold;
    }
  `]
})
export class Example01RootComponent implements OnInit {
  displayedColumns = [
    'title',
    'start',
    'end'
  ];
  public get events(): Array<SchedulerEvent> {
    // return (this._manageEvents.events) ? this._manageEvents.events : [];
    return [...this._manageEvents.events];
  }

  constructor(private _manageEvents: ManageEventsService) { }

  ngOnInit() {
  }
}
