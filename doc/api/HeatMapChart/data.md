格式：

```d
type 为RectangularHeatMapChart时
// [[x,y,z,name],[x,y,z,name],...]
// [维度X数据 维度Y数据 矩形透明度维度数据 单项数据名称]
// 坐标轴的数据根据相应维度数据从小到大排序生成。
data:[
        [10, 10, 10, 'Australia'],
        [30, 20, 21, 'Canada'],
        [40, 60, 29, 'China'],
        ...
      ]

```

```d
type 为CalendarHeatMapChart时
// [
//   { Name: 'Q1', Week:'Monday', Value: 88,},
//   { Name: 'Q1', Week:'Tuesday', Value: 66,},
//   { Name: 'Q1', Week:'Wednesday', Value: 78,}
//    ...
//  ]
// [{维度X数据 维度Y数据 单项数据}]
// Name:x 轴数据类别,属性名称自定义， Week:y 轴数据类别,属性名称自定义， Value:显示的文本,属性名称自定义。x,y 轴的数据类别显示顺序按照 data 中书写顺序决定。
 data: [
            { Name: 'Q1', Week:'Monday', Value: 88,},
            { Name: 'Q1', Week:'Tuesday', Value: 66,},
            { Name: 'Q1', Week:'Wednesday', Value: 78,},
            ...
            { Name: 'Q2', Week:'Monday', Value: 36,},
            { Name: 'Q2', Week:'Tuesday', Value: 22,},
            { Name: 'Q2', Week:'Wednesday', Value: 99,},
            ...
            { Name: 'Q3', Week:'Monday', Value: 77,},
            { Name: 'Q3', Week:'Tuesday', Value: 46,},
            { Name: 'Q3', Week:'Wednesday', Value: 30,},
            ...
        ]
```

```d
type 为HexagonHeatMapChart时
  data: [
            {
                name:'A',
                value:24
            },
            ...
        ]
  //name为节点的名称，value为节点的值
```

说明：图表的数据
