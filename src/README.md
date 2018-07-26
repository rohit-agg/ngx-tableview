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
    type: <string>,
    items: <Map<string, string>>,
    operation: <Map<string, string>>
  }],
  columns: [{
    id: <string>,
    title: <string>,
    class: <string>,
    default: <boolean>,
    filter: {
      type: <string>,
      items: <Map<string, string>>,
      operation: <Map<string, string>>
    }
  }],
  projection: [<string>]
}
```
