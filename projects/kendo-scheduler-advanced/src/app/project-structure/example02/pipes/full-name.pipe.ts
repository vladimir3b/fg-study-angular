import { Pipe, PipeTransform } from '@angular/core';
import { INameModel } from '../data/models';


@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(value: INameModel): string {
    return `${value.firstName} ${(value.middleName) ? value.middleName + ' ' : ''} ${value.lastName}`;
  }
}
