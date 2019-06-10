import { Component, OnInit } from '@angular/core';
// import * as prism from 'prismjs';

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


@Component({
  selector: 'fg-example0101',
  templateUrl: './example0101.component.html',
  styles: []
})
export class Example0101Component implements OnInit {

  code1 = `const myArray = [10, 20, 30, 40, 50, 60];
const myNewArray = [];
console.log('Imperative Programming:');
for (let i = 0; i <= myArray.length - 1; i++) {
  if (myArray[i] * 10 <= 300) {
    myNewArray.push(myArray[i]);
  }
}
console.log(myNewArray);`;

  constructor() { }

  ngOnInit() {
  }

}
