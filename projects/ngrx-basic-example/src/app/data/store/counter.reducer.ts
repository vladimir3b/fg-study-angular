import * as fromCounter from './counter.actions';

const INITIAL_STATE = 10;

export function counterReducer(state: number = INITIAL_STATE, action: fromCounter.actions): number {
  switch (action.type) {
    case fromCounter.INCREMENT: return state + 1;
    case fromCounter.DECREMENT: return state - 1;
    case fromCounter.MULTIPLY:  return state * action.payload;
    case fromCounter.DIVIDE: return state / action.payload;
    case fromCounter.RESET: return 0;
    default: return state;
  }
}

