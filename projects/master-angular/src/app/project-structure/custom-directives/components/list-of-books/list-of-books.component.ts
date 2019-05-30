import { Component, OnInit, Input } from '@angular/core';
import { IBookModel } from 'projects/.common/dumb-data/books.data';

@Component({
  selector: 'fg-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.scss']
})
export class ListOfBooksComponent implements OnInit {
  @Input() books: Array<IBookModel>;
  constructor() { }

  ngOnInit() {
  }

}
