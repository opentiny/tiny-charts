格式：

```d
type='base'||'process'的数据格式
data:[
      { name: '语文', value: 70 },
      { name: '数学', value: 90 },
      { name: '英语', value: 60 },
      ...
    ],
```

```d
type='stack'的数据格式
 data:[
      {
        name:'英国',
        children:[
          {type:'人口',value:10},
          {type:'海洋',value:10},
          {type:'领土',value:20}
        ]
      },
      {
        name:'法国',
        children:[
          {type:'人口',value:10},
          {type:'海洋',value:20},
          {type:'领土',value:10}
        ]
      },
      {
        name:'中国',
        children:[
          {type:'人口',value:40},
          {type:'海洋',value:30},
          {type:'领土',value:30}
        ]
      },
      ...
```

说明：图表数据 ， `name` 为数据名称 ， `value` 为数据值 ， `children` 为子级集合 ， `type` 为子级名称即默认的图例名称
