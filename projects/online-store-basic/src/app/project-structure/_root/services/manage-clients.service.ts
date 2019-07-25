import { Subject } from 'rxjs';
import { ADMIN_DUMB_DATA } from './../../../static-resources/dumb-data/admin.dumb-data';
import { CLIENTS_DUMB_DATA } from './../../../static-resources/dumb-data/clients.dumb-data';
import { IClientModel } from './../../../models/client.model';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as _ from 'lodash';

type userStatusType = 'client' | 'admin' | 'none';

@Injectable()
export class ManageClientsService {
  private _admin = ADMIN_DUMB_DATA[0];
  private _clients: Array<IClientModel>;
  private _loggedClient: IClientModel | null = null;
  userStatusChanged: Subject<void> = new Subject();
  userStatus: userStatusType;
  get loggedClient(): IClientModel | null {
    return _.cloneDeep(this._loggedClient);
  }

  constructor(private _router: Router) {
    this._clients = CLIENTS_DUMB_DATA;
    this.userStatus = 'none';
  }

  private _findClientIndexById(clientId: string): number {
    return this._clients.findIndex(client => client.clientId === clientId);
  }

  private _findClientIndexByUsername(username: string): number {
    return (!username) ? -1 : this._clients.findIndex(client => client.username === username);
  }

  getNameForCliendId(clientId: string): string {
    return this._clients[this._findClientIndexById(clientId)].username;
  }

  verifyAdminUsername(username: string): boolean {
    return username === this._admin.username;
  }

  verifyUsername(username: string, clientId?: string): boolean {
    const clientIndex = this._findClientIndexByUsername(username);
    if (clientIndex >= 0) {
      return this._clients[clientIndex].clientId === clientId;
    } else {
      return true;
    }
  }

  addClient(client: IClientModel) {
    this._clients.push(client);
  }

  updateClient(client: IClientModel): void {
    const toBeUpdatedIndex = this._findClientIndexById(client.clientId);
    if (toBeUpdatedIndex >= 0) {
      this._clients[toBeUpdatedIndex] = _.cloneDeep(client);
      this._loggedClient = this._clients[toBeUpdatedIndex];
    }
  }

  login(username: string, password: string): boolean {
    if (username === this._admin.username) {
      if (this._admin.password === password) {
        this.userStatus = 'admin';
        this._loggedClient = null;
        this.userStatusChanged.next();
        return true;
      } else {
        return false;
      }
    } else {
      const loggedClientIndex = this._findClientIndexByUsername(username);
      if (loggedClientIndex >= 0) {
        const loggedClient = this._clients[loggedClientIndex];
        if (loggedClient.password === password) {
          this.userStatus = 'client';
          this._loggedClient = loggedClient;
          this.userStatusChanged.next();
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  logOut() {
    this.userStatus = 'none';
    this._loggedClient = null;
    this.userStatusChanged.next();
    this._router.navigate(['']);
  }
}

@Injectable({
  providedIn: 'root'
})
export class RouterGuardClients implements CanActivate {
  constructor(
        private _manageClients: ManageClientsService,
        private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._manageClients.userStatus === 'client') {
      return true;
    } else {
      this._router.navigate(['']);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class RouterGuardAdmin implements CanActivate {
  constructor(
    private _manageClients: ManageClientsService,
    private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._manageClients.userStatus === 'admin') {
      return true;
    } else {
      this._router.navigate(['']);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class RouterGuardSignup implements CanActivate {
  constructor(
    private _manageClients: ManageClientsService,
    private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!(this._manageClients.userStatus === 'admin' || this._manageClients.userStatus === 'client')) {
      return true;
    } else {
      this._router.navigate(['']);
    }
  }
}
