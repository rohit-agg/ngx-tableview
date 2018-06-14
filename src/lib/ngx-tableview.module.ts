import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgxTableviewComponent } from './ngx-tableview.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    NgxTableviewComponent
  ],
  exports: [NgxTableviewComponent]
})
export class NgxTableviewModule { }
