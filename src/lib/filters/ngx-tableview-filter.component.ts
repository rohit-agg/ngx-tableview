import { Component, Input } from '@angular/core';
import { FilterValue } from '../config/filter-value';

@Component({
  selector: 'ngx-tableview-filter',
  template: `
  <div class="row">

    <div class="col-4">
      <select class="form-control">
        <option *ngFor="let item of filters" [value]="item.column.value">{{item.column.title}}</option>
      </select>
    </div>

    <div class="col-8" [ngSwitch]="filter.type">

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

  </div>
  `
})
export class NgxTableviewFilterComponent {
  @Input() filters;

}
