import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set filter';

export type filterType = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public payload: filterType) {} // payload is the filter type
}

export type actions = SetFilterAction;
