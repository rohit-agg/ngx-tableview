import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollapseModule, PaginationModule, BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { ColumnFilterPipe } from './pipes/column-filter.pipe';
import { ToArrayPipe } from './pipes/to-array.pipe';

import { NgxTableviewComponent } from './ngx-tableview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule
  ],
  declarations: [
    ColumnFilterPipe,
    ToArrayPipe,
    NgxTableviewComponent
  ],
  exports: [
    NgxTableviewComponent
  ]
})
export class NgxTableviewModule { }
