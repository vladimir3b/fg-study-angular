import { Action } from '@ngrx/store';

import { ITaskModel } from 'projects/my-to-do-app/src/app/data/models/task.model';

export const ADD_TASK = '[TASKS] Add e new task';
export const TOGGLE_COMPLETED_TASK = '[TASKS] toggle complete task';
export const UPDATE_TASK = '[TASKS] Update task';
export const DELETE_TASK = '[TASKS] Delete a task';
export const DELETE_COMPLETED_TASKS = '[TASKS] Delete completed tasks';

export class AddTaskAction implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: { task: ITaskModel }) {}
}
export class ToggleCompletedTaskAction implements Action {
  readonly type = TOGGLE_COMPLETED_TASK;
  constructor(public payload: { id: string }) { }
}
export class UpdateTaskAction implements Action {
  readonly type = UPDATE_TASK;
  constructor(public payload: {
    id: string;
    task: ITaskModel
  }) {}
}
export class DeleteTaskAction implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: { id: string }) { }
}
export class DeleteCompletedTasksAction implements Action {
  readonly type = DELETE_COMPLETED_TASKS;
}

export type actions = AddTaskAction |
  ToggleCompletedTaskAction |
  UpdateTaskAction |
  DeleteTaskAction |
  DeleteCompletedTasksAction;
