import { Component, OnInit } from '@angular/core';

import { SOME_TASKS } from 'projects/my-to-do-app/src/app/data/some-tasks.data';
import { ITaskModel } from 'projects/my-to-do-app/src/app/data/models/task.model';

@Component({
  selector: 'fg-list-tasks',
  templateUrl: './list-tasks.component.html',
  styles: []
})
export class ListTasksComponent implements OnInit {
  tasks: Array<ITaskModel> = [ ...SOME_TASKS ];

  constructor() { }

  ngOnInit() {
  }

}
