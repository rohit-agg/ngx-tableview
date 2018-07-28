# ngx-tableview

## Configuration

```json
{
  title: <string>,
  class: <string>,
  options: {
    refresh: <boolean>,
    projection: <boolean>,
    pagination: <boolean>
  },
  filters: [{
    id: <string>,
    title: <string>,
    type: <string>,
    default: <boolean>,
    items: <Map<string, string>>,
    operation: <Map<string, string>>,
    multi: <boolean>
  }],
  columns: [{
    id: <string>,
    title: <string>,
    class: <string>,
    sort: <boolean>,
    default: <boolean>
  }],
  projection: [<string>]
}
```
