import { Pipe, PipeTransform } from '@angular/core';

import { IToDoModel } from '../../../data/models/to-do.model';
import * as fromToDo from './../../../data/store/filter/filter.actions';

@Pipe({
  name: 'filterToDo'
})
export class FilterToDoPipe implements PipeTransform {

  transform(toDoEvents: Array<IToDoModel>, filter: fromToDo.filterType): Array<IToDoModel> {
    switch (filter) {
      case 'active': return toDoEvents.filter(event => !event.completed);
      case 'completed': return toDoEvents.filter(event => event.completed);
      default: return toDoEvents;
    }
  }
}
