import { Component, OnInit, Input } from '@angular/core';
import { TableConfig } from './config/table-config';

@Component({
  selector: 'ngx-tableview',
  templateUrl: 'ngx-tableview.component.html',
  styleUrls: [
    'ngx-tableview.component.css'
  ]
})
export class NgxTableviewComponent implements OnInit {
  @Input() config;

  projectionCollapsed: Boolean = true;
  filtersCollapsed: Boolean = true;

  table: TableConfig;

  data: Object;

  ngOnInit() {

    this.table = new TableConfig(this.config);

    if (this.table.filters) {

      // this.table.filters.forEach((filter, index) => {

      //   if (filter.type === 'select') {
      //     this.table.filters[index].items = this.prepareDropdownItems(filter.items);
      //   }
      //   if (filter.operation) {
      //     this.table.filters[index].operation = this.prepareDropdownItems(filter.operation);
      //   }
      // });
    }

    // if (this.table.pagination) {
    //   this.pagination = this.config.pagination;
    // }

    if (this.config.data) {
      this.data = this.config.data;
    }

    // let tableColumns = [];
    // this.config.columns.forEach(column => {

    //   column = Object.assign({
    //     id: '',
    //     class: '',
    //     title: '',
    //     defaut: false
    //   }, column);

    //   if (column.filter) {

    //     if (column.filter.type === 'select') {
    //       column.filter.items = this.prepareDropdownItems(column.filter.items);
    //     }

    //     if (column.filter.operation) {
    //       column.filter.operation = this.prepareDropdownItems(column.filter.operation);
    //     }
    //   }

    //   this.columns.push(column);
    //   tableColumns.push(column.id);
    // });

    // if (this.table.columns.length === 0) {
    //   this.table.columns = tableColumns;
    // }
  }

  private prepareDropdownItems = function (items) {

    const preparedItems = [
      {
        value: '',
        text: '(Select)'
      }
    ];

    for (const key in items) {

      if (isNaN(parseInt(key))) {

        preparedItems.push({
          value: key,
          text: items[key]
        });

      } else {

        preparedItems.push({
          value: items[key],
          text: items[key]
        });
      }
    }

    return preparedItems;
  };

  getColumns() {

    const columns = [],
      self = this;
    // this.columns.forEach(function (column) {
    //   if (self.table.columns.indexOf(column.id) !== -1) {
    //     columns.push(column);
    //   }
    // });
    return columns;
  }

  preventClose(event: MouseEvent) {
    event.stopImmediatePropagation();
  }

  toggleColumn(column) {

    // let index = this.table.columns.indexOf(column);
    // if (index === -1) {
    //   this.table.columns.push(column);
    // } else {
    //   this.table.columns.splice(index, 1);
    // }
  }
}
