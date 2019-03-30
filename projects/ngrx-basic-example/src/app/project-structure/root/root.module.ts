/***
 *    ██████╗  ██████╗  ██████╗ ████████╗
 *    ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
 *    ██████╔╝██║   ██║██║   ██║   ██║
 *    ██╔══██╗██║   ██║██║   ██║   ██║
 *    ██║  ██║╚██████╔╝╚██████╔╝   ██║
 *    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝
 *
 *    ███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗
 *    ████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝
 *    ██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗
 *    ██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝
 *    ██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗
 *    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
 *
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { FirstGradeOperationsComponent } from './components/first-grade-operations/first-grade-operations.component';
import { SecondGradeOperationsComponent } from './components/second-grade-operations/second-grade-operations.component';
import { ThirdGradeOperationsComponent } from './components/third-grade-operations/third-grade-operations.component';
import { RootCounterComponent } from './components/root-counter/root-counter.component';


@NgModule({
  declarations: [
    RootComponent,
    FirstGradeOperationsComponent,
    SecondGradeOperationsComponent,
    ThirdGradeOperationsComponent,
    RootCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
