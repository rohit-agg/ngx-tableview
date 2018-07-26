import { Filter } from './filter';
import { Column } from './column';
import { Pagination } from './pagination';
import { TableOptions } from './table-options';

export class TableConfig {

  title: string;
  class: string;

  options: TableOptions;

  filters: Array<Filter>;
  columns: Array<Column>;
  projection: Array<string>;
  pagination: Pagination;

  constructor(config) {

    const self = this;

    this.title = config.title;
    this.class = config.class ? config.class : '';

    this.options = new TableOptions(config.options);

    this.columns = new Array<Column>();
    this.projection = [];

    config.columns.forEach(function (column) {

      const ngxColumn = new Column(column);
      self.columns.push(ngxColumn);
      if (ngxColumn.default === true) {
        self.projection.push(column.id);
      }
    });
  }

  showHeader() {
    return this.title || this.options.headerEnabled() || this.filters;
  }

  projected(column) {
    return this.projection.indexOf(column) !== -1;
  }

  project(column) {

    if (this.projection.indexOf(column) !== -1) {
      this.projection.splice(this.projection.indexOf(column), 1);
    } else {
      this.projection.push(column);
    }
  }
}
