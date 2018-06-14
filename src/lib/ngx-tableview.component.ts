import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tableview',
  templateUrl: 'ngx-tableview.component.html',
  styles: [
    '.dropdown-menu {min-width: 50rem;}'
  ]
})
export class NgxTableviewComponent implements OnInit {
  @Input() config;

  table: {

    title: string,
    class: string,
    columns: Array<string>,
    refresh: Boolean,
    projection: Boolean,
    pagination: Boolean,
  };

  columns: Array<{

    id: string,
    class: string,
    title: string,
    filter?: {

      type: string,
      items?: {},
      group?: {

        type: string,
        items?: {}
      }
    }
  }>;

  constructor() {

    this.table = {
      title: '',
      class: '',
      columns: [],
      refresh: true,
      projection: true,
      pagination: false
    };

    this.columns = [];
  }

  ngOnInit() {

    this.table = Object.assign(this.table, this.config.table);

    let tableColumns = [];
    this.config.columns.forEach(column => {

      column = Object.assign({
        id: '',
        class: '',
        title: ''
      }, column);

      if (column.filter) {

        if (column.filter.type === 'select') {
          column.filter.items = this.prepareDropdownItems(column.filter.items);
        } else if (column.filter.type === 'text' && column.filter.group && column.filter.group.type === 'select') {
          column.filter.group.items = this.prepareDropdownItems(column.filter.group.items);
        }
      }

      this.columns.push(column);
      tableColumns.push(column.id);
    });

    if (this.table.columns.length === 0) {
      this.table.columns = tableColumns;
    }
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

  preventClose(event: MouseEvent) {
    event.stopImmediatePropagation();
  }
}
