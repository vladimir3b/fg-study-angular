import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  private _message = 'NgRx basic example...';
  get message(): string {
    return this._message;
  }

  constructor() { }
  ngOnInit() { }
}
