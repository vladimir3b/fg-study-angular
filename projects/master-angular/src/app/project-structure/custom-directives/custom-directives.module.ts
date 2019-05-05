import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBooksService } from './services/manage-books.service';
import { RootCustomDirectivesComponent } from './components/root-custom-directives/root-custom-directives.component';
import { ListOfBooksComponent } from './components/list-of-books/list-of-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { FormatBookDirective } from './directives/format-book.directive';

@NgModule({
  declarations: [
    RootCustomDirectivesComponent,
    ListOfBooksComponent,
    BookDetailsComponent,
    TitleCasePipe,
    FormatBookDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ManageBooksService
  ]
})
export class CustomDirectivesModule { }
