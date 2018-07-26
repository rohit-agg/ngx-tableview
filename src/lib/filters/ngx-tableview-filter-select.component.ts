import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tableview-filter-select',
  template: `

  <select *ngIf="filter.operation.length == 0" class="form-control">
    <option *ngFor="let item of filter.items" [value]="item.value">{{item.text}}</option>
  </select>

  <div *ngIf="filter.operation.length > 0" class="input-group">
    <div class="input-group-prepend">
      <select class="form-control">
        <option *ngFor="let item of filter.operation" [value]="item.value">{{item.text}}</option>
      </select>
    </div>
    <select class="form-control">
      <option *ngFor="let item of filter.items" [value]="item.value">{{item.text}}</option>
    </select>
  </div>
  `,
  styleUrls: [
    '../ngx-tableview.component.css'
  ]
})
export class NgxTableviewFilterSelectComponent implements OnInit {
  @Input() filter;

  ngOnInit() { }
}
