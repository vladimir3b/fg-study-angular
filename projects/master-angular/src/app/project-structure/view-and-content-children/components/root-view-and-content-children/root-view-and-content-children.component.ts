import { IBookModel } from './../../../../../../../.common/dumb_data/books.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-root-view-and-content-children',
  templateUrl: './root-view-and-content-children.component.html',
  styleUrls: ['./root-view-and-content-children.component.scss']
})
export class RootViewAndContentChildrenComponent implements OnInit {
  satanicBible: IBookModel = {
    code: 'book666',
    index: 666,
    price: '$666',
    numberOfPages: 666,
    year: 1998,
    title: 'Satan\'s Bible',
    author: {
      firstName: 'Satan',
      lastName: 'Pakanel'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
