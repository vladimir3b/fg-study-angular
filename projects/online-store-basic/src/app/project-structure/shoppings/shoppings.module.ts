import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

@NgModule({
  declarations: [ ShoppingListComponent ],
  imports: [
    CommonModulesModule
  ]
})
export class ShoppingsModule { }
