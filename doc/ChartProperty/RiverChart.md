<title>

## 配置项说明

</title>

<api>
<name>data</name>
<introduce>数据</introduce>
<type>Object</type>
<required>必填</required>
<defaults>无默认值</defaults>

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

</api>

<api>
<name>width</name>
<introduce>图表的宽度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：和容器一样宽

说明：图表的宽度

</api>

<api>
<name>height</name>
<introduce>图表的高度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：和容器一样高

说明：图表的高度

</api>

<api>
<name>depthWidth</name>
<introduce>每一阶级的宽度</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
 depthWidth: ['25%', '50%', '25%']
```

默认值：`['25%', '50%', '25%']`

说明：定义每一阶级的宽度，有几个阶级配置几个，加和等于 100%
</api>

<api>
<name>background</name>
<introduce>节点的颜色</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`'#0067D1'`

说明：节点的颜色

</api>

<api>
<name>marginWidth</name>
<introduce>节点前后的间距</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

格式：

```d
 marginWidth: [
    {
      left: 50,
      right: 50,
    },
    {
      left: 100,
      right: 100,
    },
    {
      left: 50,
      right: 50,
    },
  ],
```

默认值：`marginWidth: [
    {
      left: 50,
      right: 50,
    },
    {
      left: 100,
      right: 100,
    },
    {
      left: 50,
      right: 50,
    }
  ]`

说明：有几个阶级配置几个对象，left 控制左边，right 控制右边
</api>

<api>
<name>nodeSpace</name>
<introduce>节点的垂直间隙</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`40`

说明：节点的垂直间隙

</api>

<api>
<name>scaleBar</name>
<introduce>比例尺</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`8`

说明：控制节点的高度

</api>

<api>
<name>smoothingCurves</name>
<introduce>是否启用等宽曲线</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：连接带是否采用等宽平滑曲线

</api>

<api>
<name>offsetY</name>
<introduce>是否启用等宽曲线</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`0`

说明：图表距离容器顶部的偏移值

</api>

<api>
<name>statusColor</name>
<introduce>节点内部子节点的状态颜色</introduce>
<type>Object</type>
<required>必填</required>
<defaults>无默认值</defaults>

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

</api>
