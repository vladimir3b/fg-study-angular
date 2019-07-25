import { NgModule } from '@angular/core';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { ShoppingConfirmationComponent } from './components/shopping-confirmation/shopping-confirmation.component';
import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';

@NgModule({
  declarations: [
    CartListComponent,
    ShoppingConfirmationComponent
  ],
  imports: [
    CommonModulesModule
  ]
})
export class CartModule { }
