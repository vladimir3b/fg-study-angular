import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line:max-line-length
import { RootMasteringDependencyInjectionComponent } from './components/root-mastering-dependency-injection/root-mastering-dependency-injection.component';

@NgModule({
  declarations: [RootMasteringDependencyInjectionComponent],
  imports: [
    CommonModule
  ]
})
export class MasteringDependencyInjectionModule { }
