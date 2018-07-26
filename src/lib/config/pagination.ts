export class Pagination {

  start: number;
  end: number;
  count: number;
  total: number;

  records: Array<number>;

  constructor(pagination) {

    this.start = 1;
    this.end = -1;
    this.total = -1;

    this.records = pagination.records;
    this.count = this.records[0];
  }
}
