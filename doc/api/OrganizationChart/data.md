格式：

```d
data: {
        id: 'xxx',     // 节点id, 必填
        name: 'xxx',   // 节点数据，可根据实际场景自行定义，最终会应用到 render 方法的 data 中
        children: [   // 子节点数据
            {
                id: 'xxx',
                name: 'xxx',
                children: [
                    {
                        id: 'xxx',
                        name: 'xxx',
                    }
                ]
            },
            {
                id: 'xxx',
                name: 'xxx',
            }
        ]
    }
```