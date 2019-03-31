import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ManagePersonsComponent } from './components/manage-persons/manage-persons.component';

const ROUTES: Routes = [{
  path: 'manage-persons',
  component: ManagePersonsComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class ManagePersonsRouter { }
