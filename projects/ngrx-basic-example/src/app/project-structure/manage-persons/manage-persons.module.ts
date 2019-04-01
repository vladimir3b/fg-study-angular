import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePersonsRouter } from './manage-persons.router';
import { ManagePersonsComponent } from './components/manage-persons/manage-persons.component';

@NgModule({
  declarations: [ ManagePersonsComponent ],
  imports: [
    CommonModule,
    ManagePersonsRouter
  ],
  exports: [ ManagePersonsRouter ]
})
export class ManagePersonsModule { }
