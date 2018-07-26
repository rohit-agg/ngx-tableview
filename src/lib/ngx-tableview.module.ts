import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollapseModule, PaginationModule, BsDropdownModule } from 'ngx-bootstrap';

import { ColumnFilterPipe } from './pipes/column-filter.pipe';

import { NgxTableviewComponent } from './ngx-tableview.component';
import {
  NgxTableviewFilterComponent,
  NgxTableviewFilterSelectComponent,
  NgxTableviewFilterTextComponent
} from './ngx-tableview-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    ColumnFilterPipe,
    NgxTableviewComponent,
    NgxTableviewFilterComponent,
    NgxTableviewFilterTextComponent,
    NgxTableviewFilterSelectComponent,
  ],
  exports: [NgxTableviewComponent]
})
export class NgxTableviewModule { }
