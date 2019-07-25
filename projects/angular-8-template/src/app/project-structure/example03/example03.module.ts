import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example0303Component } from './components/example0303/example0303.component';
import { Example0302Component } from './components/example0302/example0302.component';
import { Example0301Component } from './components/example0301/example0301.component';

@NgModule({
  declarations: [Example0303Component, Example0302Component, Example0301Component],
  imports: [
    CommonModule
  ]
})
export class Example03Module { }
