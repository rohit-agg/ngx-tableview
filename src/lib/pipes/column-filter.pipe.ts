import { Pipe, PipeTransform } from '@angular/core';
import { Column } from '../config/column';

@Pipe({
  name: 'columnFilter'
})
export class ColumnFilterPipe implements PipeTransform {

  transform(items: Column[], searchText: string): Column[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.title.toLowerCase().includes(searchText);
    });
  }
}
