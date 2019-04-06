import { cloneDeep } from 'lodash';

import * as fromToDo from './to-do.actions';
import { IToDoModel, ToDo } from '../../models/to-do.model';

export interface IToDoState {
  toDoEvents: Array<IToDoModel>;
}

const INITIAL_STATE: IToDoState = {
  toDoEvents: [
    new ToDo('Learn Portuguese'),
    new ToDo('Learn English'),
    new ToDo('Learn Angular'),
    new ToDo('Learn Spanish')
  ]
};
INITIAL_STATE.toDoEvents[1].completed = true;

export function toDoReducer(state: IToDoState = INITIAL_STATE, action: fromToDo.actions): IToDoState {
  state = cloneDeep(state);
  switch (action.type) {
    case fromToDo.ADD_TO_DO:
      state.toDoEvents.push(new ToDo(action.payload));
      return state;
    case fromToDo.TOGGLE_TO_DO:
      state.toDoEvents.forEach((toDo: IToDoModel) => {
        if (toDo.id === action.payload) {
          toDo.completed = !toDo.completed;
        }
      });
      return state;
    case fromToDo.TOGGLE_ALL_TO_DO:
      state.toDoEvents.forEach((toDo: IToDoModel) => {
        toDo.completed = action.payload;
      });
      return state;
    case fromToDo.CHANGE_TO_DO:
      state.toDoEvents.forEach((toDo: IToDoModel) => {
        if (toDo.id === action.payload.id) {
          toDo.text = action.payload.text;
        }
      });
      return state;
    case fromToDo.DELETE_TO_DO:
      const toDoIndex = state.toDoEvents.findIndex(toDo => toDo.id === action.payload);
      state.toDoEvents.splice(toDoIndex, 1);
      return state;
    case fromToDo.DELETE_COMPLETED_TO_DO:
      state.toDoEvents = state.toDoEvents.filter(toDo => !toDo.completed);
      return state;
    default:
      return state;
  }
}
