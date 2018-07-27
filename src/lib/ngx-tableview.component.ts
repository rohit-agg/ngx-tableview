import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TableConfig } from './config/table-config';
import { FilterValue } from './config/filter-value';

@Component({
  selector: 'ngx-tableview',
  templateUrl: 'ngx-tableview.component.html',
  styleUrls: [
    'ngx-tableview.component.css',
    '../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxTableviewComponent implements OnInit {
  @Input() config;
  @Input() callback: Function;

  table: TableConfig;
  data: any;

  filters: Array<FilterValue>;
  filtersCollapsed: Boolean = true;
  loading: Boolean = false;

  ngOnInit() {

    this.table = new TableConfig(this.config);
    this.data = [];

    this.__prepareDefaultFilters();

    this.getData();
  }

  private __prepareDefaultFilters() {

    this.filters = this.table.filters.map(function (filter) {

      if (filter.default === true) {

        const filterValue = new FilterValue();
        filterValue.id = filter.id;
        return filterValue;
      }

    }).filter(function (value) {
      return value;
    });
  }

  getData() {

    const self = this;
    this.loading = true;

    this.callback().then(function ([data, count]) {

      self.data = data;
      self.table.pagination.total = count;
      self.table.pagination.end = self.table.pagination.start + data.length - 1;
      self.loading = false;
    });
  }
}
