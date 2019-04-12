import { ITaskModel } from './../../../../data/models/task.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITaskModel;

  constructor() { }
  ngOnInit() { }

}
