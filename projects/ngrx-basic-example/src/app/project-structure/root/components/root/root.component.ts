import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  counter = 10;

  constructor() { }
  ngOnInit() { }
}
