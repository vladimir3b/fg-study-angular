import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'fg-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  @Output() dataChanger: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  onNewDate(dateString: string): void {
    this.dataChanger.emit(new Date(dateString));
  }
}
