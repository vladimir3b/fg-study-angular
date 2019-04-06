import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IToDoModel } from 'projects/to-do-app/src/app/data/models/to-do.model';
import * as fromRoot from './../../../../data/store/root.reducer';
import * as fromToDo from './../../../../data/store/to-do/to-do.actions';

@Component({
  selector: 'fg-to-do-item',
  templateUrl: './to-do-item.component.html',
  styles: []
})
export class ToDoItemComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  @Input() toDo: IToDoModel;
  @ViewChild('textInputField') textInputField: ElementRef;
  editingToDo = false;
  checkInput: FormControl;
  textInput: FormControl;

  constructor(private _store: Store<fromRoot.IRootState>) { }

  ngOnInit() {
    this.checkInput = new FormControl(this.toDo.completed);
    this.textInput = new FormControl(this.toDo.text, Validators.required);
    this._subscriptions.push(
      this.checkInput.valueChanges.subscribe(() =>
        this._store.dispatch(new fromToDo.ToggleToDoAction(this.toDo.id))
      )
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  edit(): void {
    this.editingToDo = true;
    // It MUST be a setTimeout here otherwise it won't select!
    setTimeout(() => this.textInputField.nativeElement.select());
  }
  unFocus(save: boolean = false): void {
    this.editingToDo = false;
    if (save && this.textInput.valid && this.textInput.value !== this.toDo.text) {
      this._store.dispatch(new fromToDo.ChangeToDoAction({
        id: this.toDo.id,
        text: this.textInput.value
      }));
    } else {
      this.textInput.setValue(this.toDo.text);
    }
  }
}
