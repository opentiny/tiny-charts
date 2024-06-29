格式：

```d
data: [
  {
    name:'Z',children:[
      {name:'A',children:[
        {name:'A1',children:[]},
        {name:'A2',children:[]}
      ]},
      {name:'B',children:[
        {name:'B1',children:[]},
        {name:'B2',children:[]}
      ]}
    ]
  },
  {
    name:'Z',children:[
      {name:'C',children:[
        {name:'C1',children:[
          {name:'C1-1',children:[
            {name:'C1-1-1',children:[]},
            {name:'C1-1-2',children:[]}
          ]}
        ]},
      ]},
    ]
  }
  ...
];
```

说明：图表数据 ，`data` 是树结构数据的集合，`data` 中每个子对象都是从根节点开始，呈树结构排列。 `name` 为当前节点名，`children` 为其子节点集合
