格式：

```d

data：{
    nodes：[
        {
            name: 'A1',
            value: 25,
            row: 0,
            col: 0,
            nodes: [
            {
                name: '需求感知',
                status: 'error',
            },
            ...
            ],
        },
    ],
    ,links:[
        {
            source: 'A1',
            target: 'B1',
            value: 10,
        },
        ...
    ]
}
 statusColor: {
    error: '#0067D1',
    normal: '#BBC0C7',
    warning: '#0067D1',
    }
```

说明：节点内部子节点的状态颜色，key 为 data 中 nodes 中的每一个节点 node 的 nodes 每一项的 status 值
