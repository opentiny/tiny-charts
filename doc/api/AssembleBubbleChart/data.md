```d
聚合气泡图------非嵌套式/非嵌套聚合式
 data:  [
        {type: 'VPC',value: 1076,label: '1076',showLabel:true},
        {type: 'VPC',value: 362,label: '362',showLabel:true},
        {type: 'EIP',value: 530,label: '530',showLabel:false},
        ...
 ]
```

```d
聚合气泡图------嵌套式
data:[
        {
          type: 'VPC',value:100,label: 'VPC',
          children:[
            {value: 28,label: 'UK',showLabel:true},
            {value: 23,label: 'France',showLabel:true},
            {value: 23,label: 'Belgium',showLabel:true},
            ...
          ]
        },
        {
          type: 'EIP',value:100,label: 'EIP',
          children:[
            {value: 23,label: 'Angola',showLabel:true},
            {value: 23,label: 'Ghana',showLabel:true},
            {value: 23,label: 'Congo',showLabel:true},
            ...
          ]
        },
        {
          type: 'SG',value:100,label: 'SG',
          children:[
            {value: 28,label: 'Brazil'},
            {value: 23,label: 'Argentina'},
            {value: 23,label: 'Bolivia',showLabel:true},
            ...
          ]
        },
]
```

说明：图表数据 ， type 用于气泡分类 ， value 与气泡的大小正相关 ， label 展示气泡的文本信息 ， showLabel 是否展示文本信息,默认 false
