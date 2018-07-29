import { NgxTableviewModule } from './ngx-tableview.module';

describe('NgxTableviewModule', () => {
  let ngxTableviewModule: NgxTableviewModule;

  beforeEach(() => {
    ngxTableviewModule = new NgxTableviewModule();
  });

  it('should create an instance', () => {
    expect(ngxTableviewModule).toBeTruthy();
  });
});
