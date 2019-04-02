import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './component/to-do/to-do.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './component/to-do-item/to-do-item.component';
import { ToDoFooterComponent } from './component/to-do-footer/to-do-footer.component';
import { ToDoAddComponent } from './component/to-do-add/to-do-add.component';

@NgModule({
  declarations: [
    ToDoComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoFooterComponent,
    ToDoAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ToDoComponent ]
})
export class ToDoModule { }
