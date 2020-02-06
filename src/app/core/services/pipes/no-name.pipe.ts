import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noname'
})
export class NoNamePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value.toLocaleUpperCase();
  }
}
