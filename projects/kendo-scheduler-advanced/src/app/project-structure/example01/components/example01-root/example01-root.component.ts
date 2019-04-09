import { ManageEventsService } from './../../services/manage-events.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fg-example01-root',
  templateUrl: './example01-root.component.html'
})
export class Example01RootComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  constructor(private _manageEvents: ManageEventsService) { }

  ngOnInit() {
    this._subscriptions.push(
      this._manageEvents.changes.subscribe(events => console.log(events))
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
