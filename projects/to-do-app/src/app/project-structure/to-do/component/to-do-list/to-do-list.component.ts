import { Component, OnInit, OnDestroy } from '@angular/core';

import { ManageDataService } from './../../services/manage-data.service';
import { Subscription } from 'rxjs';
import { IToDoModel } from 'projects/to-do-app/src/app/data/models/to-do.model';

@Component({
  selector: 'fg-to-do-list',
  templateUrl: './to-do-list.component.html',
  styles: []
})
export class ToDoListComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  toDoList: Array<IToDoModel>

  constructor(private _manageData: ManageDataService) { }

  ngOnInit() {
    this.subscriptions.push(
      this._manageData.getStoreValue.subscribe(toDo => this.toDoList = toDo.toDoEvents)
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

}
