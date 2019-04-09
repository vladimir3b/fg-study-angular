import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Injectable({
  providedIn: 'root'
})
export class ManageEventsService {
  public changes: Subject<Array<SchedulerEvent>> = new Subject();
}
