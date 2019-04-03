import { cloneDeep } from 'lodash';
import * as fromToDo from './to-do.actions';

import { IToDoModel, ToDo } from '../../models/to-do.model';

export interface IState {
  toDoEvents: Array<IToDoModel>;
}

const INITIAL_STATE: IState = {
  toDoEvents: [
    new ToDo('Learn Portuguese'),
    new ToDo('Learn English'),
    new ToDo('Learn Angular')
  ]
};

export function toDoReducer(state: IState = INITIAL_STATE, action: fromToDo.actions): IState {
  state = cloneDeep(state);
  switch (action.type) {
    case fromToDo.ADD_TO_DO:
      state.toDoEvents.push(new ToDo(action.payload));
      return state;
    default:
      return state;
  }
}
