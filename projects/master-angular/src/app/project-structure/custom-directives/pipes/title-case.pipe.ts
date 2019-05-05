import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const words = value.toLowerCase().split(' ');
    let result = '';
    words.forEach(word => result += `${word.charAt(0).toUpperCase()}${word.slice(1)} `);
    return result;
  }

}
