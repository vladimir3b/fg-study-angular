import { cloneDeep } from 'lodash';

import * as fromTasks from './tasks.actions';
import { ITaskModel } from '../../models/task.model';

export interface ITasksState {
  taskEvents: Array<ITaskModel>;
}

const INITIAL_STATE: ITasksState = {
  taskEvents: []
};

export function tasksReducer(state: ITasksState = INITIAL_STATE, action: fromTasks.actions): ITasksState {
  state = cloneDeep(state);
  switch (action.type) {
    case fromTasks.ADD_TASK:
      state.taskEvents.push(action.payload.task);
      return state;
    case fromTasks.TOGGLE_COMPLETED_TASK:
      state.taskEvents.forEach(task => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed;
        }
      });
      return state;
    case fromTasks.UPDATE_TASK:
      state.taskEvents.forEach(task => {
        if (task.id === action.payload.id) {
          task.title = action.payload.task.title;
          // console.log(task);
        }
      });
      return state;
    case fromTasks.DELETE_TASK:
      state.taskEvents.splice(
        state.taskEvents.findIndex(tasks => tasks.id === action.payload.id),
        1
      );
      return state;
    case fromTasks.DELETE_COMPLETED_TASKS:
      state.taskEvents = state.taskEvents.filter(task => !task.completed);
      return state;
    default: return state;
  }
}

