import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fgFormatBook]'
})
export class FormatBookDirective {

  constructor(
      private _elementRef: ElementRef,
      private _render: Renderer2,
  ) {
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'blue');
    // console.log(this._elementRef.nativeElement.querySelector('fg-book-details'));
    this._render.removeChild(this._elementRef.nativeElement, this._elementRef.nativeElement);
  }

}
