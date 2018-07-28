import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TableConfig } from './config/table-config';
import { FilterValue } from './config/filter-value';
import { RequestConfig } from './config/request-config';

@Component({
  selector: 'ngx-tableview',
  templateUrl: 'ngx-tableview.component.html',
  styleUrls: [
    'ngx-tableview.component.css',
    '../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css',
    '../../../../node_modules/@ng-select/ng-select/themes/default.theme.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxTableviewComponent implements OnInit {
  @Input() config;
  @Input() callback: Function;

  table: TableConfig;
  data: any;
  request: RequestConfig;

  filtersCollapsed: Boolean = true;
  loading: Boolean = false;
  searchText: string;

  bsConfig = {
    showWeekNumbers: false,
    dateInputFormat: 'DD-MM-YYYY'
  };

  ngOnInit() {

    this.table = new TableConfig(this.config);
    this.data = [];
    this.request = new RequestConfig();

    this.__prepareDefaultConfig();
    this.getData();
  }

  private __prepareDefaultConfig() {

    const self = this;

    this.table.filters.forEach(filter => {

      if (filter.default === true) {
        const filterValue = new FilterValue(filter);
        self.request.filters.push(filterValue);
      }
    });

    this.request.records = this.table.pagination.count;
  }

  getData() {

    const self = this;
    this.loading = true;

    const request = Object.assign({}, this.request);
    request.filters = request.filters.filter(function (item) {

      const type = self.table.filters.get(item.id).type;
      switch (type) {

        case 'text':
        case 'select':

          if (item.value && item.value.trim().length > 0) {
            return item;
          } else if (item.from && item.to && item.from.trim().length > 0 && item.to.trim().length > 0) {
            return item;
          }
          break;

        case 'date':

          if (item.value) {

            const value = item.value.toString().toLowerCase();
            if (value !== 'invalid date') {
              return item;
            }

          } else if (item.from && item.to) {

            const from = item.from.toString().toLowerCase(),
              to = item.to.toString().toLowerCase();
            if (from !== 'invalid date' && to !== 'invalid date') {
              return item;
            }
          }
          break;
      }
    });

    this.callback(request).then(function ([data, count]) {

      self.data = data;
      self.table.pagination.total = count;
      self.table.pagination.start = ((self.request.page - 1) * self.request.records) + 1;
      self.table.pagination.end = self.table.pagination.start + data.length - 1;
      self.loading = false;
    });
  }

  showAll() {

    const self = this;
    this.table.columns.forEach(function (column) {
      if (self.table.projection.indexOf(column.id) === -1) {
        self.table.projection.push(column.id);
      }
    });
  }

  hideAll() {

    const self = this;
    this.table.columns.forEach(function (column) {
      if (!column.isDefault()) {
        self.table.projection.splice(self.table.projection.indexOf(column.id), 1);
      }
    });
  }

  addFilter() {

    const key = this.table.filters.keys().next().value;
    const filterValue = new FilterValue(this.table.filters.get(key));
    this.request.filters.push(filterValue);
  }

  removeFilter(index) {

    this.request.filters.splice(index, 1);
  }

  sort(column: string) {

    if (column !== this.request.sort) {

      this.request.sort = column;
      this.request.order = -1;

    } else {
      this.request.order = this.request.order * -1;
    }

    this.getData();
  }

  records() {

    this.request.page = 1;
    this.getData();
  }

  page(event) {

    this.request.page = event.page;
    this.getData();
  }
}
