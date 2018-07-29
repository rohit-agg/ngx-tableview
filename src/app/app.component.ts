import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  config = {
    'title': 'Hello World',
    'class': '',
    options: {
      'pagination': true,
    },
    projection: ['one', 'four', 'six'],
    filters: [
      {
        id: 'one',
        title: 'one',
        type: 'text',
        default: true
      },
      {
        id: 'two',
        title: 'two',
        type: 'date'
      },
      {
        id: 'three',
        title: 'three',
        type: 'select',
        items: {
          1: 'Hello1',
          2: 'Hello2'
        },
        default: true
      },
      {
        id: 'four',
        title: 'four',
        type: 'text',
        operation: {
          'LIKE1': 'LIKE',
          'IS1': 'IS'
        }
      },
      {
        id: 'five',
        title: 'five',
        type: 'date',
        operation: {
          'LIKE1': 'LIKE',
          'IS1': 'IS'
        },
        default: true
      },
      {
        id: 'six',
        title: 'six',
        type: 'select',
        items: {
          1: 'Hello1',
          2: 'Hello2'
        },
        operation: {
          'LIKE1': 'LIKE',
          'IS1': 'IS'
        }
      },
      {
        id: 'seven',
        title: 'seven',
        type: 'select',
        multi: true,
        items: {
          1: 'Hello1',
          2: 'Hello2'
        }
      },
      {
        id: 'eight',
        title: 'eight',
        type: 'select',
        multi: true,
        items: {
          1: 'Hello1',
          2: 'Hello2'
        },
        operation: {
          'LIKE1': 'LIKE',
          'IS1': 'IS'
        }
      },
      {
        id: 'nine',
        title: 'nine',
        type: 'text',
        default: true,
        range: true
      },
      {
        id: 'ten',
        title: 'ten',
        type: 'date',
        range: true
      },
      {
        id: 'eleven',
        title: 'eleven',
        type: 'text',
        operation: {
          'LIKE1': 'LIKE',
          'IS1': 'IS'
        },
        range: ['LIKE1']
      },
      {
        id: 'twelve',
        title: 'twelve',
        type: 'date',
        operation: {
          'LIKE1': 'LIKE',
          'IS1': 'IS'
        },
        default: true,
        range: ['LIKE1']
      }
    ],
    'columns': [
      {
        id: 'one',
        title: 'One'
      },
      {
        id: 'two',
        title: 'Two',
        default: true,
        sort: true
      },
      {
        id: 'three',
        title: 'Three'
      },
      {
        id: 'six',
        title: 'Six',
        sort: true
      },
      {
        id: 'four',
        title: 'Four',
        sort: true
      },
      {
        id: 'five',
        title: 'Five'
      },
      {
        id: 'seven',
        title: 'Seven',
        default: true
      },
    ],
    'pagination': {
      records: [5, 10]
    }
  };

  data = [
    {
      'one': 'one 1',
      'two': 'two 1',
      'three': 'three 1',
      'four': 'four 1',
      'five': 'five 1'
    },
    {
      'one': 'one 2',
      'two': 'two 2',
      'three': 'three 2',
      'four': 'four 2',
      'five': 'five 2'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    },
    {
      'one': 'one 3',
      'two': 'two 3',
      'three': 'three 3',
      'four': 'four 3',
      'five': 'five 3'
    }
  ];

  getData() {

    let self = this;
    return new Promise(function (resolve, reject) {

      setTimeout(function () {
        resolve([self.data.slice(-5), self.data.length]);
      }, 2000);
    });
  }

}
