import { cloneDeep } from 'lodash';
import { Injectable } from '@angular/core';

import { LIST_OF_BOOKS, IBookModel } from '../../../../../../.common/dumb-data/books.data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  books(): Array<IBookModel> {
    return cloneDeep(LIST_OF_BOOKS);
  }

}
