import { RootCounterComponent } from './components/root-counter/root-counter.component';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';
import { CounterRouter } from './counter.router';
import { ThirdGradeOperationsComponent } from './components/third-grade-operations/third-grade-operations.component';
import { SecondGradeOperationsComponent } from './components/second-grade-operations/second-grade-operations.component';
import { FirstGradeOperationsComponent } from './components/first-grade-operations/first-grade-operations.component';

@NgModule({
  declarations: [
    CounterComponent,
    RootCounterComponent,
    FirstGradeOperationsComponent,
    SecondGradeOperationsComponent,
    ThirdGradeOperationsComponent
  ],
  imports: [ CounterRouter ],
  exports: [ CounterRouter ]
})
export class CounterModule { }
