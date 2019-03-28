import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  private _message = 'This Angular Application is working fine...';
  get message(): string {
    return this._message;
  }

  constructor() { }
  ngOnInit() { }
}
