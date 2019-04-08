import * as fromCounter from './counter.actions';

export interface IState {
  value: number;
}

const INITIAL_STATE: IState = {
  value: 10
};

export function counterReducer(state: IState = INITIAL_STATE, action: fromCounter.actions): IState {
  switch (action.type) {
    case fromCounter.INCREMENT: return { value: state.value + 1 };
    case fromCounter.DECREMENT: return { value: state.value - 1 };
    case fromCounter.MULTIPLY: return { value: state.value * action.payload };
    case fromCounter.DIVIDE: return { value: state.value / action.payload };
    case fromCounter.RESET: return { value: 0};
    default: return { ...state };
  }
}

