import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fg-login-error',
  templateUrl: './login-error.component.html',
  styles: []
})
export class LoginErrorComponent {

  @Output() retryLogin: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.retryLogin.emit();
  }

}
