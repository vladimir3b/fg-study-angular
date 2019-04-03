import { Component, OnInit, Input } from '@angular/core';

import { IToDoModel } from 'projects/to-do-app/src/app/data/models/to-do.model';

@Component({
  selector: 'fg-to-do-item',
  templateUrl: './to-do-item.component.html',
  styles: []
})
export class ToDoItemComponent implements OnInit {
  @Input() toDo: IToDoModel;

  constructor() { }

  ngOnInit() { }

}
