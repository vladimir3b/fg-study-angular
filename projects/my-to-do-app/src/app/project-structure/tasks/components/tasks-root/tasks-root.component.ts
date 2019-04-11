import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-tasks-root',
  templateUrl: './tasks-root.component.html',
  styles: [`
    .container {
      max-width: 640px;
    }
  `]
})
export class TasksRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
