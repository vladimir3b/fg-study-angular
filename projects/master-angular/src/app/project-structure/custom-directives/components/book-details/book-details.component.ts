import { Component, OnInit, Input } from '@angular/core';

import { IBookModel } from './../../../../../../../.common/dumb_data/books.data';

@Component({
  selector: 'fg-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: IBookModel;
  constructor() { }

  ngOnInit() {
  }

}
