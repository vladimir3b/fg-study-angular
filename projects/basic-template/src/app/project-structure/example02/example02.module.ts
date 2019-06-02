import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example0201Component } from './components/example0201/example0201.component';
import { Example0202Component } from './components/example0202/example0202.component';
import { Example0203Component } from './components/example0203/example0203.component';

@NgModule({
  declarations: [Example0201Component, Example0202Component, Example0203Component],
  imports: [
    CommonModule
  ]
})
export class Example02Module { }
