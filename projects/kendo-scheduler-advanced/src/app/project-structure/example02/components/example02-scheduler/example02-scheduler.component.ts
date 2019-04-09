import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';

import { PERSONS } from './../../data/persons';
import { IPersonModel } from './../../data/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fg-example02-scheduler',
  templateUrl: './example02-scheduler.component.html',
  styles: [`
    table {
      width: 100%;
    }
    button {
      margin-right: 1rem;
    }
    td, th {
      padding: 1rem !important;
    }
    tr:hover {
      background-color: #DAF7A6 !important;
    }
    th {
      font-weight: bold;
    }
  `]
})
export class Example02SchedulerComponent implements OnInit {
  persons: Array<IPersonModel> = [];
  displayedColumns = [
    'name',
    'gender',
    'birthDate',
    'phone'
  ];

  constructor() { }
  ngOnInit() { }

  phone(person: IPersonModel): string {
    return typeof person.contact.phones === 'string' ? person.contact.phones : person.contact.phones[0];
  }

  addOnePerson(): void {
    const persons = cloneDeep(this.persons);
    const index = Math.floor(Math.random() * PERSONS.length);
    persons.push(PERSONS[index]);
    this.persons = persons;
  }
  changeOnePerson(): void {
    const persons = cloneDeep(this.persons);
    if (persons.length) {
      const index = Math.floor(Math.random() * persons.length);
      persons[index] = {
        ...persons[index],
        name: {
          firstName: 'John',
          lastName: 'Smith'
        },
        gender: 'male'
      };
      this.persons = persons;
    }
  }
  deleteAllPersons(): void {
    this.persons = [];
  }
  deleteOnePerson(): void {
    const persons = cloneDeep(this.persons);
    const index = Math.floor(Math.random() * persons.length);
    persons.splice(index, 1);
    this.persons = persons;
  }
}
