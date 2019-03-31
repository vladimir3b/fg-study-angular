import { NgModule } from '@angular/core';

import { ManagePersonsRouter } from './manage-persons.router';
import { ManagePersonsComponent } from './components/manage-persons/manage-persons.component';

@NgModule({
  declarations: [ ManagePersonsComponent ],
  imports: [ ManagePersonsRouter ],
  exports: [ ManagePersonsRouter ]
})
export class ManagePersonsModule { }
