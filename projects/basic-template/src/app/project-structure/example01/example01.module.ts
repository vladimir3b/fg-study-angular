import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example0101Component } from './components/example0101/example0101.component';
import { Example0102Component } from './components/example0102/example0102.component';
import { Example0103Component } from './components/example0103/example0103.component';

@NgModule({
  declarations: [Example0101Component, Example0102Component, Example0103Component],
  imports: [
    CommonModule
  ]
})
export class Example01Module { }
