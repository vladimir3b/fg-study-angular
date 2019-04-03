import { Action } from '@ngrx/store';

export type operationType = 'add';

export const ADD_TO_DO = '[TO DO] Add to do';

export class AddToDoAction implements Action {
  readonly type = ADD_TO_DO;
  constructor(public payload: string) {}
}

export type actions = AddToDoAction;
