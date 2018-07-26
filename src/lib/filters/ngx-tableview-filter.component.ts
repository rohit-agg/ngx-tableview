import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tableview-filter',
  template: `
  <div [ngSwitch]="filter.type">

    <ng-template [ngSwitchCase]="'text'">
      <ngx-tableview-filter-text [filter]="filter"></ngx-tableview-filter-text>
    </ng-template>

    <ng-template [ngSwitchCase]="'date'">
      <ngx-tableview-filter-date [filter]="filter"></ngx-tableview-filter-date>
    </ng-template>

    <ng-template [ngSwitchCase]="'select'">
      <ngx-tableview-filter-select [filter]="filter"></ngx-tableview-filter-select>
    </ng-template>

  </div>
  `
})
export class NgxTableviewFilterComponent implements OnInit {
  @Input() filter;

  ngOnInit() { }
}
