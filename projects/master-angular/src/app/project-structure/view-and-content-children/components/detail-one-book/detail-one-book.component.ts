import { IBookModel } from 'projects/.common/dumb-data/books.data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-detail-one-book',
  templateUrl: './detail-one-book.component.html',
  styleUrls: ['./detail-one-book.component.scss']
})
export class DetailOneBookComponent implements OnInit {
  @Input() book: IBookModel;
  message1 = 'This is a dumb message that will be shown in the console.';
  message2 = 'This is another dumb message that will be shown in the console.';
  showMessage = false;

  constructor() { }

  ngOnInit() {
    this.showSomeDumbMessages();
  }

  showSomeDumbMessages() {
    // setTimeout(() => this.showMessage = true, 5000);
    this.showMessage = true;
  }

}
