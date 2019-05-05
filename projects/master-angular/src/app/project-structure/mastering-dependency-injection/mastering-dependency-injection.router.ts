import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { RootMasteringDependencyInjectionComponent } from './components/root-mastering-dependency-injection/root-mastering-dependency-injection.component';


const ROUTES: Routes = [{
  path: 'mastering-dependency-injection',
  component: RootMasteringDependencyInjectionComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class MasteringDependencyInjectionRouter { }
