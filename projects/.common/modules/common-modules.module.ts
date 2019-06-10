import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


const COMMON_MODULES = [
  MaterialModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
];
const COMMON_DECLARATIONS = [

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
