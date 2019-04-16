import { ActionReducerMap } from '@ngrx/store';

import * as fromTasks from './tasks/tasks.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface IAppState {
  tasks: fromTasks.ITasksState;
  filter: fromFilter.IFilterState;
}

export const REDUCERS: ActionReducerMap<IAppState> = {
  tasks: fromTasks.tasksReducer,
  filter: fromFilter.filterReducer
};
