import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-root-counter',
  templateUrl: './root-counter.component.html',
})
export class RootCounterComponent implements OnInit {
  @Input() counter;

  constructor() {}

  ngOnInit() {}
}
