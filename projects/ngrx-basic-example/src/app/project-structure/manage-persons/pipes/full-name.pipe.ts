import { Pipe, PipeTransform } from '@angular/core';
import { INameModel } from '../../../data/persons/person.model';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(value: INameModel): string {
    return `${value.firstName} ${(value.middleName) ? value.middleName + ' ' : ''} ${value.lastName}`;
  }
}
