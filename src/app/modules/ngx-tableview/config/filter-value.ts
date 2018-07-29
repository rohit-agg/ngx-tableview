import { Filter } from './filter';

export class FilterValue {

  id?: string;
  operation?: string;
  value?: string;
  from?: string;
  to?: string;

  constructor(filter: Filter) {

    this.id = filter.id;
    this.value = '';

    if (filter.operation.length > 0) {
      this.operation = filter.operation[0].id;
    }
  }
}
