import { ManageClientsService } from './../../services/manage-clients.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  get message(): string {
    switch (this._manageClients.userStatus) {
      case 'admin':
        return 'Click to see your selling history...';
      case 'client':
        return 'Just start shopping...';
      default:
        return 'Just login to go shopping...';
    }
  }

  get navigationLink(): string {
    switch (this._manageClients.userStatus) {
      case 'admin':
        return '/admin/history';
      case 'client':
        return '/client/products';
      default:
        return '/login';
    }
  }

  constructor(
    private _router: Router,
    private _manageClients: ManageClientsService
  ) { }


  ngOnInit() {
  }

}
