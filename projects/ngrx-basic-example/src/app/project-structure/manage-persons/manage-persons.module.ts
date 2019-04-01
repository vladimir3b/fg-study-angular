import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { ManagePersonsRouter } from './manage-persons.router';
import { ManagePersonsComponent } from './components/manage-persons/manage-persons.component';
import { ListOfPersonsComponent } from './components/list-of-persons/list-of-persons.component';
import { FullNamePipe } from './pipes/full-name.pipe';

const MATERIAL = [
  MatTableModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ManagePersonsComponent,
    ListOfPersonsComponent,
    FullNamePipe
  ],
  imports: [
    ...MATERIAL,
    CommonModule,
    ManagePersonsRouter
  ],
  exports: [ ManagePersonsRouter ]
})
export class ManagePersonsModule { }
