格式：

```d
进度图
data:[
        { name:'UniEPMgr',    value:80 },
        { name:'SMLoglic',    value:65 },
        { name:'SSO',         value:45 },
        ...
]
```

说明：图表数据 ， name 为页面横向进度条名称 ， value 为页面横向进度条长度

```d
堆叠进度图
data:[
         {
        name: 'China',
        children: [
        { type: 'Game', value: 30 },
        { type: 'Move', value: 20 },
        { type: 'Animation', value: 45 },
        { type: 'Fiction', value: 60 },
        ],
    },
    {
        name: 'Mexico',
        children: [
        { type: 'Game', value: 12 },
        { type: 'Move', value: 14 },
        { type: 'Animation', value: 33 },
        { type: 'Fiction', value: 44 },
        ],
    },
    ....
]
```

说明：图表数据 ， name 为当前的系列名称 ， children 为该系列的具体数据，type 为具体数据的分类名称，value 为具体数据的值
