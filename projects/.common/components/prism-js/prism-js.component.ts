import { Component, Input, AfterViewChecked } from '@angular/core';

import 'clipboard';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

declare var Prism: any;

@Component({
  selector: 'fg-prism-js',
  templateUrl: './prism-js.component.html'
})
export class PrismJsComponent implements AfterViewChecked  {
  @Input() code = '';
  @Input() language = 'typescript';

  ngAfterViewChecked() {
    Prism.highlightAll();
  }

}


