import { TestBed, inject } from '@angular/core/testing';

import { NgxTableviewService } from './ngx-tableview.service';

describe('NgxTableviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTableviewService]
    });
  });

  it('should be created', inject([NgxTableviewService], (service: NgxTableviewService) => {
    expect(service).toBeTruthy();
  }));
});
