import { Component, Input } from '@angular/core';

@Component({
  selector: 'fg-message',
  template: `
  <div fxLayout="column"
      class="mb-5"
      fxLayoutAlign="space-between center">

    <h1 class="display-1 pt-5">
      {{ message.icon }}
    </h1>
    <h1 class="display-3 text-center">
      {{ message.title }}
    </h1>
    <div [innerHTML]="message.html"></div>
    <button
        *ngIf="message.viewButton"
        (click)="message.onClick()"
        class="btn btn-link">{{ message.buttonText }}</button>
  </div>
  `
})
export class MessagesComponent {
  @Input() message: {
    icon: string;
    title: string;
    html: string;
    viewButton: boolean;
    buttonText: string;
    onClick: () => void;
  };
}
