import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableviewComponent } from './ngx-tableview.component';

describe('NgxTableviewComponent', () => {
  let component: NgxTableviewComponent;
  let fixture: ComponentFixture<NgxTableviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
