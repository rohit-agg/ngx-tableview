import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(items: Map<any, any>): any[] {

    const entries = new Array<any>();
    items.forEach(item => {
      entries.push(item);
    });
    return entries;
  }
}
