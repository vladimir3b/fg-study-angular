import { counterReducer } from './../counter.reducer';

export interface ICounterStore {
  counter: number;
}

export interface ICounterStoreReducer {
  counter: counterReducer;
}
