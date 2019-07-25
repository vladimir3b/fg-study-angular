import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListAdminComponent } from './components/products-list-admin/products-list-admin.component';
import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';
import { NgModule } from '@angular/core';
import { ProductsListClientComponent } from './components/products-list-client/products-list-client.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductsListClientComponent,
    ProductsListAdminComponent,
    ProductDetailsComponent,
    EditProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModulesModule
  ],
  entryComponents: [
    ProductDetailsComponent,
    EditProductComponent,
    AddProductComponent
  ]
})
export class ProductsModule { }
