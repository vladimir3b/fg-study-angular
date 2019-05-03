import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-some-dumb-messages',
  templateUrl: './some-dumb-messages.component.html',
  styleUrls: ['./some-dumb-messages.component.scss']
})
export class SomeDumbMessagesComponent implements OnInit {
  @Input() message1: string;
  @Input() message2: string;
  @Input() showMessages: boolean;

  constructor() { }

  ngOnInit() {
  }

}
