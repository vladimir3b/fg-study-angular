import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router
  ) { }

  ngOnInit(): void {
    // this.logActivatedRoute();
    console.log(this._router, this._router.url);
    // this._activatedRoute.url.subscribe(value => console.log(value));

  }

  logActivatedRoute(): void {
    console.log(this._activatedRoute.snapshot);    
  }
}
