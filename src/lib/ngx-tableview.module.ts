import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollapseModule, PaginationModule, BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';

import { ColumnFilterPipe } from './pipes/column-filter.pipe';

import { NgxTableviewComponent } from './ngx-tableview.component';
import { NgxTableviewFilterTextComponent } from './filters/ngx-tableview-filter-text.component';
import { NgxTableviewFilterDateComponent } from './filters/ngx-tableview-filter-date.component';
import { NgxTableviewFilterSelectComponent } from './filters/ngx-tableview-filter-select.component';
import { NgxTableviewFilterComponent } from './filters/ngx-tableview-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    ColumnFilterPipe,
    NgxTableviewComponent,
    NgxTableviewFilterComponent,
    NgxTableviewFilterTextComponent,
    NgxTableviewFilterDateComponent,
    NgxTableviewFilterSelectComponent,
  ],
  exports: [NgxTableviewComponent]
})
export class NgxTableviewModule { }
