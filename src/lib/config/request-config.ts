import { FilterValue } from './filter-value';

export class RequestConfig {

  sort?: string;
  order?: number;
  records?: number;
  page?: number;
  match?: string;
  filters?: Array<FilterValue>;

  constructor() {

    this.order = 0;
    this.page = 1;
    this.match = 'all';
    this.filters = [];
  }
}
