import { ActionReducerMap } from '@ngrx/store';

import * as fromTasks from './tasks/tasks.reducer';

export interface IAppState {
  tasks: fromTasks.ITasksState;
}

export const REDUCERS: ActionReducerMap<IAppState> = {
  tasks: fromTasks.tasksReducer
};
