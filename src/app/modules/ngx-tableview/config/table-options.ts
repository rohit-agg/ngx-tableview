export class TableOptions {

  refresh: Boolean;
  projection: Boolean;
  pagination: Boolean;

  constructor(options) {

    this.refresh = options.refresh !== undefined ? options.refresh : true;
    this.projection = options.projection !== undefined ? options.projection : true;
    this.pagination = options.pagination !== undefined ? options.pagination : false;
  }

  headerEnabled(): Boolean {

    return (this.refresh || this.projection);
  }
}
