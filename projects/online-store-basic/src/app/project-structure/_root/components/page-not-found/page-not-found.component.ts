import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fg-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
  constructor(private _router: Router) {}
  onClick() {
    this._router.navigate(['']);
  }
}
