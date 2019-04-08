import { Action } from '@ngrx/store';
import { IPersonModel } from '../../persons/person.model';

export interface IManagePersonsPayload {
  person?: IPersonModel;
  personId?: string;
}

export type operationType = 'add-person' |
  'delete-person' |
  'update-person' |
  'delete-all-persons';

export const ADD_NEW_PERSON = '[Manage-Persons] Add a new person';
export const DELETE_PERSON = '[Manage-Persons] Delete a person';
export const UPDATE_PERSON = '[Manage-Persons] Update a person';
export const DELETE_ALL_PERSONS = '[Manage-Persons] Delete all persons';

export class AddNewPersonAction implements Action {
  readonly type = ADD_NEW_PERSON;
  constructor(public payload: IManagePersonsPayload) { }
}
export class DeletePersonAction implements Action {
  readonly type = DELETE_PERSON;
  constructor(public payload: IManagePersonsPayload) {}
}
export class UpdatePersonAction implements Action {
  readonly type = UPDATE_PERSON;
  constructor(public payload: IManagePersonsPayload) {}
}
export class DeleteAllPersonsAction implements Action {
  readonly type = DELETE_ALL_PERSONS;
}

export type actions = AddNewPersonAction |
  DeletePersonAction |
  UpdatePersonAction |
  DeleteAllPersonsAction;
