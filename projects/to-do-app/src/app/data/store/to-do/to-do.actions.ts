import { Action } from '@ngrx/store';

export const ADD_TO_DO = '[TO DO] Add to do';
export const TOGGLE_TO_DO = '[TO DO] Toggle to do';
export const CHANGE_TO_DO = '[TO DO] Change to do';

interface IChangeToDoPayload {
  id: number;
  text: string;
}

export class AddToDoAction implements Action {
  readonly type = ADD_TO_DO;
  constructor(public payload: string) {} // payload is the text
}
export class ToggleToDoAction implements Action {
  readonly type = TOGGLE_TO_DO;
  constructor(public payload: number) { } // payload is the id
}
export class ChangeToDoAction implements Action {
  readonly type = CHANGE_TO_DO;
  constructor(public payload: IChangeToDoPayload) {} // payload is the new text
}

export type operationType = 'add' | 'toggle' | 'change';
export type actions = AddToDoAction | ToggleToDoAction | ChangeToDoAction;
