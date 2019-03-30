import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'fg-third-grade-operations',
  templateUrl: './third-grade-operations.component.html'
})
export class ThirdGradeOperationsComponent implements OnInit {
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
