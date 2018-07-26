import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tableview-filter-text',
  template: `
  <input *ngIf="filter.operation.length == 0" type="text" class="form-control" />

  <div *ngIf="filter.operation.length > 0" class="input-group">
    <div class="input-group-prepend">
      <select class="form-control">
        <option *ngFor="let item of filter.operation" [value]="item.value">{{item.text}}</option>
      </select>
    </div>
    <input type="text" class="form-control">
  </div>
  `,
  styleUrls: [
    '../ngx-tableview.component.css'
  ]
})
export class NgxTableviewFilterTextComponent implements OnInit {
  @Input() filter;

  ngOnInit() { }
}
