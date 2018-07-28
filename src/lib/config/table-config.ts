import { Filter } from './filter';
import { Column } from './column';
import { Pagination } from './pagination';
import { TableOptions } from './table-options';

export class TableConfig {

  title: string;
  class: string;

  options: TableOptions;

  filters: Map<string, Filter>;
  columns: Array<Column>;
  projection: Array<string>;
  pagination: Pagination;

  constructor(config) {

    const self = this;

    this.title = config.title;
    this.class = config.class ? config.class : '';

    this.options = new TableOptions(config.options);

    this.columns = new Array<Column>();
    this.filters = new Map<string, Filter>();
    this.projection = config.projection ? config.projection : [];
    this.pagination = new Pagination(config.pagination);

    config.columns.forEach(function (column) {

      const ngxColumn = new Column(column);
      self.columns.push(ngxColumn);
      if (ngxColumn.default === true && self.projection.indexOf(column.id) === -1) {
        self.projection.push(column.id);
      }
    });

    config.filters.forEach(function (filter) {

      const ngxFilter = new Filter(filter);
      self.filters.set(filter.id, ngxFilter);
    });
  }

  showHeader() {
    return this.title || this.options.headerEnabled() || this.filters.size > 0;
  }

  isProjected(column) {
    return this.projection.indexOf(column) !== -1;
  }

  project(column) {

    if (this.projection.indexOf(column) !== -1) {
      this.projection.splice(this.projection.indexOf(column), 1);
    } else {
      this.projection.push(column);
    }
  }

  projectedColumns(): Array<Column> {

    const self = this;
    return this.columns.filter(function (column) {
      return self.projection.indexOf(column.id) !== -1;
    });
  }
}
