import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { RootMasteringContentChildrenComponent } from './components/root-mastering-content-children/root-mastering-content-children.component';


const ROUTES: Routes = [{
  path: 'mastering-content-children',
  component: RootMasteringContentChildrenComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class MasteringContentChildrenRouter { }
