import * as _ from 'lodash';

export class SimulateDatabase {
  static generateUniqueId(length: number): string {
    return _.times(length, () => _.random(35).toString(36)).join('') as string;
  }
}
