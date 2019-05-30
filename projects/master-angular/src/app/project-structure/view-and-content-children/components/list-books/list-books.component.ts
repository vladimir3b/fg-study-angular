import { DetailOneBookComponent } from './../detail-one-book/detail-one-book.component';
import { GetDataService } from './../../services/get-data.service';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit } from '@angular/core';
import { IBookModel } from 'projects/.common/dumb-data/books.data';

@Component({
  selector: 'fg-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit, AfterViewInit, AfterContentInit {
  listOfBooks: Array<IBookModel>;
  @ViewChild(DetailOneBookComponent) oneBookDetailsViewChild: DetailOneBookComponent; // this allows us to access the component object
  @ViewChildren(DetailOneBookComponent) allBooksDetails: QueryList<DetailOneBookComponent>;
  @ContentChild(DetailOneBookComponent) oneBookDetailsContentChild: DetailOneBookComponent;

  constructor(private _getData: GetDataService) {
    this.listOfBooks = this._getData.books();
  }

  ngOnInit() { }
  ngAfterViewInit() {
    // console.log(this.oneBookDetailsViewChild);
    setTimeout(() => this.oneBookDetailsViewChild.message1 = 'Eat some pizza today!', 3000);
    // console.log(this.allBooksDetails.toArray());
  }
  ngAfterContentInit() {
    console.log('Content view', this.oneBookDetailsContentChild);
  }

}
