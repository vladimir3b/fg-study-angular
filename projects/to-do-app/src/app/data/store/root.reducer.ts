import { ActionReducerMap } from '@ngrx/store';
import * as fromToDo from './to-do/to-do.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface IRootState {
  toDo: fromToDo.IToDoState;
  filter: fromFilter.IFilterState;
}

export const REDUCERS: ActionReducerMap<IRootState> = {
  toDo: fromToDo.toDoReducer,
  filter: fromFilter.filterReducer
};
