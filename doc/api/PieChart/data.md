格式：

```d
圆环图 \ 饼图
 data:[
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        ...
    ]
```

```d
多重圆环图
data:[
        {
            name:'VPC',
            value:100,
            children:[
                {name:'VPC_1',value:20},
                {name:'VPC_2',value:80},
            ]
        },
        {
            name:'IM',
            value:80,
            children:[
                {name:'IM_1',value:30},
                {name:'IM_2',value:50}
            ]
        },
        {
            name:'EIP',
            value:50,
            children:[
                {name:'EIP_1',value:10},
                {name:'EIP_2',value:40}
            ]
        }
        ...
]
```

说明：图表数据 , `value`表示为数据值 ， `name`表示为数据名称 ， `children`为添加的外环数据
