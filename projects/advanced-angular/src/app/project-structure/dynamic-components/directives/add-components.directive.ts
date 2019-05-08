import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fgAddComponents]'
})
export class AddComponentsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
