import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'fg-second-grade-operations',
  templateUrl: './second-grade-operations.component.html'
})
export class SecondGradeOperationsComponent implements OnInit {
  @Output() counterChange = new EventEmitter<number>();
  // tslint:disable-next-line:no-input-rename
  @Input('counter') _counter: number;
  set counter(value: number) {
    this._counter = value;
    this.counterChange.emit(this.counter);
  }
  get counter(): number {
    return this._counter;
  }

  constructor() {}
  ngOnInit() {}
}
