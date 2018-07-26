import { Component, OnInit, Input } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'ngx-tableview-filter-date',
  template: `
  <input *ngIf="filter.operation.length == 0" type="text" class="form-control" bsDatepicker [bsConfig]="config" />

  <div *ngIf="filter.operation.length > 0" class="input-group">
    <div class="input-group-prepend">
      <select class="form-control">
        <option *ngFor="let item of filter.operation" [value]="item.value">{{item.text}}</option>
      </select>
    </div>
    <input type="text" class="form-control" bsDatepicker [bsConfig]="config">
  </div>
  `,
  styleUrls: [
    '../ngx-tableview.component.css'
  ]
})
export class NgxTableviewFilterDateComponent implements OnInit {
  @Input() filter;

  config: BsDatepickerConfig;

  constructor() {

    this.config = new BsDatepickerConfig();
  }

  ngOnInit() {

    this.config.containerClass = 'theme-default';
  }
}
