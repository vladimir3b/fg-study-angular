import { ConfirmationComponent } from './../components/confirmation.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './../components/messages.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const COMMON_MODULES = [
  CommonModule,
  MaterialModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  FormsModule,
  RouterModule
];
const COMMON_DECLARATIONS = [
  MessagesComponent
];
const ENTRY_COMPONENTS = [
  ConfirmationComponent
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
export class CommonModulesModule {}
