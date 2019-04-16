import { Pipe, PipeTransform } from '@angular/core';

import { ITaskModel } from './../../../data/models/task.model';
import * as fromFilter from './../../../data/store/filter/filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Array<ITaskModel>, filter: fromFilter.filterType): Array<ITaskModel> {
    switch (filter) {
      case 'active': return tasks.filter(event => !event.completed);
      case 'completed': return tasks.filter(event => event.completed);
      default: return tasks;
    }
  }

}
