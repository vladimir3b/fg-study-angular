import { Action } from '@ngrx/store';

import { ITaskModel } from 'projects/my-to-do-app/src/app/data/models/task.model';

export const ADD_TASK = '[TASKS] Add e new task';
export const TOGGLE_COMPLETED_TASK = '[TASKS] toggle complete task';
export const UPDATE_TASK = '[TASKS] Update task';
export const DELETE_TASK = '[TASKS] Delete a task';
export const DELETE_COMPLETED_TASKS = '[TASKS] Delete completed tasks';

export class AddTaskAction implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: ITaskModel) {}
}

export class ToggleCompletedTask implements Action {
  readonly type = TOGGLE_COMPLETED_TASK;
  constructor(public payload: string) { }
}

