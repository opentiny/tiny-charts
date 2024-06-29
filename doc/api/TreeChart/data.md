格式：

```d
data: [
    {
      name: '节点',
      data: [
        {
          name: 'flare',
          children: [
            {
              name: 'data',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 721 },
                    { name: 'DelimitedTextConverter', value: 4294 },
                    ...
                  ],
                },
                {
                  name: 'DataUtil',
                  value: 3322,
                },
                ...
              ],
            },
          ],
        },
      ],
    },
  ],
```

说明：树图的数据, 最外层name为本系列的数据的名称，data为需要渲染的树的数据，树的数据中name:节点的名称,value:节点的数值,children: 子节点。name,value,children 的名称是固定的，不允许做更改。name 为必传,value 和 children 可不传。
