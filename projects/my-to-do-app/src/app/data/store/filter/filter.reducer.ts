import * as fromFilter from './filter.actions';

export interface IFilterState {
  filter: fromFilter.filterType;
}

const INITIAL_STATE: IFilterState = {
  filter: 'all'
};

export function filterReducer(state: IFilterState = INITIAL_STATE, action: fromFilter.actions): IFilterState {
  state = { ...state };
  switch (action.type) {
    case fromFilter.SET_FILTER:
      state.filter = action.payload;
      return state;
    default:
      return state;
  }
}
