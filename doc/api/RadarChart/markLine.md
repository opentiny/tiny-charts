格式：

```d
number类型，相对于所有数据项作比较，超过数据为红色
markLine：20
Object类型,threshold为阈值的配置选项，需要针对所有data中的数据项配置，不能缺少
markLine:{
        threshold:{
            'Equipment': 25,
            'VM': 40,
            'CSP': 35,
            'RD': 20,
            'Markets': 50
        }
},
雷达图的数据
data:{
        'Domestic':{
            'Equipment': 43,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 78
        }
}
```

说明:图表的阈值线
