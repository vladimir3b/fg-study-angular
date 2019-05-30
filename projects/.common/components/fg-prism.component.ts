import { Input, Component } from '@angular/core';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-typescript.min';


@Component({
  selector: 'fg-prism',
  template: `<pre class="line-numbers"><code class="{{languageType}}"><ng-content></ng-content></code></pre>`

})
export class PrismComponent {
  @Input() languageType = 'language-js';
}
