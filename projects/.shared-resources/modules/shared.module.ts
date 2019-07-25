import { AngularMaterialModules } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const COMMON_MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  FormsModule,
  RouterModule,
  AngularMaterialModules
];
const COMMON_DECLARATIONS = [
];
const ENTRY_COMPONENTS = [
];

@NgModule({
  declarations: [
    ...COMMON_DECLARATIONS,
    ...ENTRY_COMPONENTS
  ],
  imports: [
    ...COMMON_MODULES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    ...COMMON_MODULES,
    ...COMMON_DECLARATIONS,
    ...ENTRY_COMPONENTS
  ]
})
export class SharedModules { }
