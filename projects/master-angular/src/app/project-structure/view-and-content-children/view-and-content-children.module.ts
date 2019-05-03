import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootViewAndContentChildrenComponent } from './components/root-view-and-content-children/root-view-and-content-children.component';
import { GetDataService } from './services/get-data.service';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { DetailOneBookComponent } from './components/detail-one-book/detail-one-book.component';
import { SomeDumbMessagesComponent } from './components/some-dumb-messages/some-dumb-messages.component';

@NgModule({
  declarations: [
    RootViewAndContentChildrenComponent,
    ListBooksComponent,
    DetailOneBookComponent,
    SomeDumbMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GetDataService
  ]
})
export class ViewAndContentChildrenModule { }
