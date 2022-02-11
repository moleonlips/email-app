import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    return value.substring(0, limit) + '...';
  }

}
