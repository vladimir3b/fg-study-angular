import { ManageBooksService } from './../../services/manage-books.service';
import { Component, OnInit } from '@angular/core';
import { IBookModel } from 'projects/.common/dumb_data/books.data';

@Component({
  selector: 'fg-root-custom-directives',
  templateUrl: './root-custom-directives.component.html',
  styleUrls: ['./root-custom-directives.component.scss']
})
export class RootCustomDirectivesComponent implements OnInit {
  listOfBooks: Array<IBookModel>;

  constructor(private _manageBooks: ManageBooksService) { }

  ngOnInit() {
    this.listOfBooks = this._manageBooks.books();
  }

}
