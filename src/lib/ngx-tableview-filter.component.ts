import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tableview-filter-text',
  template: `
  <input *ngIf="!filter.operation" type="text" class="form-control" />

  <div *ngIf="filter.operation" class="input-group">
    <div class="input-group-prepend">
      <select class="form-control">
        <option *ngFor="let item of filter.operation" [value]="item.value">{{item.text}}</option>
      </select>
    </div>
    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  </div>
  `
})
export class NgxTableviewFilterTextComponent implements OnInit {
  @Input() filter;

  ngOnInit() { }
}

@Component({
  selector: 'ngx-tableview-filter-select',
  template: `

  <select *ngIf="!filter.operation" class="form-control">
    <option *ngFor="let item of filter.items" [value]="item.value">{{item.text}}</option>
  </select>

  <div *ngIf="filter.operation" class="input-group">
    <div class="input-group-prepend">
      <select class="form-control">
        <option *ngFor="let item of filter.operation" [value]="item.value">{{item.text}}</option>
      </select>
    </div>
    <select class="form-control">
      <option *ngFor="let item of filter.items" [value]="item.value">{{item.text}}</option>
    </select>
  </div>

  `
})
export class NgxTableviewFilterSelectComponent implements OnInit {
  @Input() filter;

  ngOnInit() { }
}

@Component({
  selector: 'ngx-tableview-filter',
  template: `
  <div [ngSwitch]="filter.type">

    <ng-template [ngSwitchCase]="'text'">
      <ngx-tableview-filter-text [filter]="filter"></ngx-tableview-filter-text>
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
