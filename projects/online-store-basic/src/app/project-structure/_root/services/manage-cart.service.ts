import { Subject } from 'rxjs';
import { SimulateDatabase } from './../../../../../../.common/classes/similate-database';
import { ManageClientsService } from './manage-clients.service';
import { ICartModel } from './../../../models/cart.mode';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ManageCartService {
  private _shoppingCart: Array<ICartModel> = [];
  get shoppingCart(): Array<ICartModel> {
    const currentClientId = this._manageClients.loggedClient.clientId;
    return _.cloneDeep(this._shoppingCart.filter(element => element.clientId === currentClientId));
  }
  cartChanged: Subject<void> = new Subject();

  constructor(private _manageClients: ManageClientsService) { }

  private _findElementIndexByproductId(productId: string): number {
    const currentClientId = this._manageClients.loggedClient.clientId;
    return this._shoppingCart.findIndex(element => element.clientId === currentClientId && element.productId === productId);
  }

  addElementToCart(element: ICartModel): void {
    const elementIndex = this._findElementIndexByproductId(element.productId);
    if (elementIndex <= -1) {
      this._shoppingCart.push({
        ...element,
        elementId: SimulateDatabase.generateUniqueId(25)
      });
      this.cartChanged.next();
    } else {
      this._shoppingCart[elementIndex].quantity++;
      this.cartChanged.next();
    }
  }

  updateElementQuantity(element: ICartModel): void {
    const elementIndex = this._findElementIndexByproductId(element.productId);
    if (elementIndex >= 0) {
      this._shoppingCart[elementIndex].quantity = element.quantity;
      this.cartChanged.next();
    }
  }

  deleteElement(element: ICartModel): void {
    const elementIndex = this._findElementIndexByproductId(element.productId);
    if (elementIndex >= 0) {
      this._shoppingCart.splice(elementIndex, 1);
      this.cartChanged.next();
    }
  }
}
