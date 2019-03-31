import * as fromCounter from './counter/counter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  counter: fromCounter.IState;
}

export const REDUCERS: ActionReducerMap<IState> = {
  counter: fromCounter.counterReducer
};
