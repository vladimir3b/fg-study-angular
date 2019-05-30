import { KendoModule } from './kendo.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrismComponent } from './../components/fg-prism.component';

const COMMON_MODULES = [
  MaterialModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  KendoModule
];
const COMMON_DECLARATIONS = [
  PrismComponent
];

@NgModule({
  declarations: [
    ...COMMON_DECLARATIONS
  ],
  imports: [
    ...COMMON_MODULES
  ],
  exports: [
    ...COMMON_MODULES,
    ...COMMON_DECLARATIONS
  ]
})
export class CommonModulesModule {}
