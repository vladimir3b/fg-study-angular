import * as fromCounter from './counter/counter.reducer';
import * as fromManagePersons from './manage-persons/manage-persons.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  counter: fromCounter.IState;
  managePersons: fromManagePersons.IState;

}

export const REDUCERS: ActionReducerMap<IState> = {
  counter: fromCounter.counterReducer,
  managePersons: fromManagePersons.managePersonsReducer
};
