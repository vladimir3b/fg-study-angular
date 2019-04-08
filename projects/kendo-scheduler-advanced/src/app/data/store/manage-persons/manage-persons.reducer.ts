
import { cloneDeep } from 'lodash';
import * as fromManagePersons from './manage-persons.actions';
import { IPersonModel } from '../../persons/person.model';

export interface IState {
  persons: Array<IPersonModel>;
}

const INITIAL_STATE: IState = {
  persons: []
};

export function managePersonsReducer(state: IState = INITIAL_STATE, action: fromManagePersons.actions): IState {
  state = cloneDeep(state);
  switch (action.type) {
    case fromManagePersons.ADD_NEW_PERSON: {
      const index = state.persons.findIndex(
        (person: IPersonModel) => person.id === action.payload.person.id
        // here is person.id, not personId; person.id refers to new person to be added id
      );
      if (index === -1) {
        state.persons.push(action.payload.person);
      }
      break;
    }
    case fromManagePersons.DELETE_PERSON: {
      const index = state.persons.findIndex(
        (person: IPersonModel) => person.id === action.payload.personId
      );
      if (index >= 0) {
        state.persons.splice(index, 1);
      }
      break;
    }
    case fromManagePersons.UPDATE_PERSON: {
      const index: number = state.persons.findIndex(
        (person: IPersonModel) =>
          person.id === action.payload.personId
      );
      if (index >= 0) {
        const index1: number = state.persons.findIndex(
          (person: IPersonModel) =>
            person.id === action.payload.person.id
        );
        if (index1 === -1) {
          // verify if the updated person already exists
          state.persons[index] = action.payload.person;
        }
      }
      break;
    }
    case fromManagePersons.DELETE_ALL_PERSONS:
      state.persons = [];
      break;
  }
  return state;
}
