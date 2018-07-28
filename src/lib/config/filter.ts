import { IdTitle } from './id-title';

export class Filter {

  id: string;
  title: string;
  type: string;
  items: Array<IdTitle>;
  default: boolean;
  multi: boolean;
  range: boolean | Array<String>;
  operation: Array<IdTitle>;

  constructor(filter) {

    this.id = filter.id;
    this.title = filter.title;
    this.type = filter.type;
    this.default = filter.default !== undefined ? filter.default : false;
    this.multi = filter.multi !== undefined ? filter.multi : false;
    this.range = filter.range !== undefined ? filter.range : false;
    this.items = [];
    this.operation = [];

    const self = this;

    if (filter.items) {

      if (!filter.multi) {
        this.items.push(new IdTitle('', '(Select...)'));
      }

      for (const value in filter.items) {
        if (filter.items.hasOwnProperty(value)) {
          self.items.push(new IdTitle(value, filter.items[value]));
        }
      }
    }

    if (filter.operation) {
      for (const value in filter.operation) {
        if (filter.operation.hasOwnProperty(value)) {
          self.operation.push(new IdTitle(value, filter.operation[value]));
        }
      }
    }
  }
}
