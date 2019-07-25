import { SimulateDatabase } from './../../../../../../.common/classes/similate-database';
import { Injectable } from '@angular/core';
import { ISellingModel } from '../../../models/sellings.model';

@Injectable()
export class ManageSellingsService {
  sellings: Array<ISellingModel> = [];

  addToSellingHistory(selling: ISellingModel) {
    this.sellings.push({
      ...selling,
      sellingId: SimulateDatabase.generateUniqueId(25)
    });
  }
}
