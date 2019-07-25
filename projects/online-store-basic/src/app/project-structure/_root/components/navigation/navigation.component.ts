import { ManageClientsService } from './../../services/manage-clients.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  navigation = [
    {
      path: '',
      label: 'Home'
    },
    {
      path: 'login',
      label: 'Login'
    },
    {
      path: 'client/signup',
      label: 'Signup'
    }
  ];
  hideLogOut = true;
  constructor(
      private _router: Router,
      private _manageClients: ManageClientsService
  ) { }

  ngOnInit() {
    this.subscriptions.push(this._manageClients.userStatusChanged.subscribe(() => {
      switch (this._manageClients.userStatus) {
        case 'client':
          this.navigation = [
            {
              path: '',
              label: 'Home'
            },
            {
              path: 'client/setup',
              label: 'Edit Client'
            },
            {
              path: 'client/products',
              label: 'Products'
            },
            {
              path: 'client/cart',
              label: 'Cart'
            }
          ];
          this.hideLogOut = false;
          break;
        case 'admin':
          this.navigation = [
            {
              path: '',
              label: 'Home'
            },
            {
              path: 'admin/products',
              label: 'Manage Products'
            },
            {
              path: 'admin/history',
              label: 'History'
            }
          ];
          this.hideLogOut = false;
          break;
        default:
          this.navigation = [
            {
              path: '',
              label: 'Home'
            },
            {
              path: 'login',
              label: 'Login'
            },
            {
              path: 'client/signup',
              label: 'Signup'
            }
          ];
          this.hideLogOut = true;
          break;
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  logOut(): void {
    this._manageClients.logOut();
  }

  navigate(baseLink: string): void {
    this._router.navigateByUrl(`/${baseLink}`);
  }
}
