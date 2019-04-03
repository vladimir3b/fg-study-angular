import { ActionReducerMap } from '@ngrx/store';
import { ToDo } from './../models/to-do.model';
import * as fromToDo from './to-do/to-do.reducer';

export interface IRootState {
  toDo: fromToDo.IState;
}

export const REDUCERS: ActionReducerMap<IRootState> = {
  toDo: fromToDo.toDoReducer
};
