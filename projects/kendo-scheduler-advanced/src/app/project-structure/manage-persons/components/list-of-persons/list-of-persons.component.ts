import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IPersonModel } from 'projects/ngrx-basic-example/src/app/data/persons/person.model';

@Component({
  selector: 'fg-list-of-persons',
  templateUrl: './list-of-persons.component.html',
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
export class ListOfPersonsComponent implements OnInit {
  @Input() persons: Array<IPersonModel>;
  @Output() deletePerson: EventEmitter<string> = new EventEmitter();
  displayedColumns = [
    'name',
    'gender',
    'birthDate',
    'functions'
  ];

  constructor() { }
  ngOnInit() { }

  onDeletePerson(person: IPersonModel): void {
    this.deletePerson.emit(person.id);
  }
  onViewPerson(person: IPersonModel): void {
    console.log(person);
  }
}
