格式：

```d
 data: [{
            name: 'flare',
            children: [
              {
                name: 'data',
                children: [
                  {
                    name: 'converters',
                    children: [
                      { name: 'Converters', value: 721 },
                      { name: 'DelimitedTextConverter', value: 4294 }
                    ]
                  },
                  {
                    name: 'DataUtil',
                    value: 3322
                  }
                ]
              },
              {
                name: 'display',
                children: [
                  { name: 'DirtySprite', value: 8833 },
                  { name: 'LineSprite', value: 1732 },
                  { name: 'RectSprite', value: 3623 }
                ]
              },
              {
                name: 'flex',
                children: [{ name: 'FlareVis', value: 4116 }]
              },
            ]
        }]
```

说明：树图的数据,name:节点的名称,value:节点的数值,children: 子节点。name,value,children 的名称是固定的，不允许做更改。name 为必传,value 和 children 可不传。
