import { Filter } from './filter';

export class Column {

  id: string;
  title: string;
  class: string;
  default: Boolean;
  filter: Filter;

  constructor(column) {

    this.id = column.id;
    this.title = column.title;
    this.class = column.class ? column.class : '';
    this.default = column.default !== undefined ? column.default : false;
    this.filter = column.filter ? new Filter(column.filter) : null;
  }

  isDefault() {
    return this.default;
  }
}
