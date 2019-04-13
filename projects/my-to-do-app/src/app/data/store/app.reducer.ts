import { ActionReducerMap } from '@ngrx/store';

export interface IAppReducer {
  tasks: fromToDo.IToDoState;
}

export const REDUCERS: ActionReducerMap<IAppReducer> = {
  tasks: fromToDo.toDoReducer,
};
