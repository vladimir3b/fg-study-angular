import { Action } from '@ngrx/store';

export const ADD_TO_DO = '[TO DO] Add to do';
export const TOGGLE_TO_DO = '[TO DO] Toggle to do';
export const CHANGE_TO_DO = '[TO DO] Change to do';
export const DELETE_TO_DO = '[TO DO] Delete to do';
export const TOGGLE_ALL_TO_DO = '[TO DO] Toggle ALL to do';
export const DELETE_COMPLETED_TO_DO = '[TO DO] Delete completed task';

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
export class ToggleAllToDoAction implements Action {
  readonly type = TOGGLE_ALL_TO_DO;
  constructor(public payload: boolean) { } // payload is the completed toggle
}
export class ChangeToDoAction implements Action {
  readonly type = CHANGE_TO_DO;
  constructor(public payload: IChangeToDoPayload) {} // payload is the new text
}
export class DeleteToDoAction implements Action {
  readonly type = DELETE_TO_DO;
  constructor(public payload: number) { } // payload is the id
}
export class DeleteCompletedToDoAction implements Action {
  readonly type = DELETE_COMPLETED_TO_DO;
}

export type actions = AddToDoAction |
  ToggleToDoAction |
  ToggleAllToDoAction |
  ChangeToDoAction |
  DeleteToDoAction |
  DeleteCompletedToDoAction;
