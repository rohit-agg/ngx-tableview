import { Item } from './item';
import { Operation } from './operation';

export class Filter {

  id: string;
  title: string;
  type: string;
  items: Array<Item>;
  default: boolean;
  operation: Array<Operation>;

  constructor(filter) {

    this.id = filter.id;
    this.title = filter.title;
    this.type = filter.type;
    this.default = filter.default !== undefined ? filter.default : false;
    this.items = [];
    this.operation = [];

    const self = this;

    if (filter.items) {
      self.items.push(new Item(-1, '(Select...)'));
      for (const value in filter.items) {
        if (filter.items.hasOwnProperty(value)) {
          self.items.push(new Item(value, filter.items[value]));
        }
      }
    }

    if (filter.operation) {
      for (const value in filter.operation) {
        if (filter.operation.hasOwnProperty(value)) {
          self.operation.push(new Operation(value, filter.operation[value]));
        }
      }
    }
  }
}
