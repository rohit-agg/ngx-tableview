import { Filter } from './filter';

export class Column {

  id: string;
  title: string;
  class: string;
  default: boolean;
  sort: boolean;
  filter: Filter;

  constructor(column) {

    this.id = column.id;
    this.title = column.title;
    this.class = column.class ? column.class : '';
    this.default = column.default !== undefined ? column.default : false;
    this.sort = column.sort !== undefined ? column.sort : false;
    this.filter = column.filter ? new Filter(column.filter) : null;
  }

  isDefault() {
    return this.default;
  }
}
