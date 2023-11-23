import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myUpper',
    standalone: true
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }
}
