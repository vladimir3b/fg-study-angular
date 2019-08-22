import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IRoutesModel {
  path: string;
  caption: string;
}

@Component({
  selector: 'fg-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  links: Array<IRoutesModel> = [
    {
      path: 'home',
      caption: 'home'
    },
    {
      path: 'get-query-parameters',
      caption: 'query parameters'
    }, 
    {
      path: 'get-fragments',
      caption: 'fragments'
    },
    {
      path: 'get-paths',
      caption: 'paths'
    }, 
    {
      path: 'get-complete-url',
      caption: 'complete url'
    }
  ]

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.logActivatedRoute();
  }

  logActivatedRoute(): void {
    console.log(this._activatedRoute.snapshot);    
  }

}
