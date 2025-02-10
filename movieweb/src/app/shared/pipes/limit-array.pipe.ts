import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitArray',
  standalone: true
})
export class LimitArrayPipe implements PipeTransform {
  transform(array: any[] | undefined, limit: number = 8): any[] {
    return array ? array.slice(0, limit) : [];
  }
}
