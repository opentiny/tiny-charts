格式：

```d
     data: {
        nodes: [
            {
                name: 'A1',
                value: 25,
                row: 0,
                col: 0,
            },
            {
                name: 'B1',
                value: 10,
                row: 0,
                col: 1,
            },
            ...
            ],
        links:[
            {
                source: 'A1',
                target: 'B1',
                value: 10,
            },
            {
                source: 'A1',
                target: 'B3',
                value: 3,
            },
            ...
            ]
    }
```

说明：图表的数据,nodes 代表节点信息，其中 name 为节点名称，value 为节点的值，row 为节点所在的行，col 为节点在的阶级。links 代表节点之间的连接关系，source 为父节点的 name，target 为子节点的 name，value 为连接的值，请确保各节点的 value 根据 links 的关联关系 value 加和相等。
