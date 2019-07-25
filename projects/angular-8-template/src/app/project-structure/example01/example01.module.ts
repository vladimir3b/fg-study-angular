import { NgModule } from '@angular/core';

import { Example0101Component } from './components/example0101/example0101.component';
import { Example0102Component } from './components/example0102/example0102.component';
import { Example0103Component } from './components/example0103/example0103.component';
import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';

@NgModule({
  declarations: [Example0101Component, Example0102Component, Example0103Component],
  imports: [
    CommonModulesModule
  ]
})
export class Example01Module { }
