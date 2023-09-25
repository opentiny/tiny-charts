<title>

## 配置项说明

</title>

<api>
<name>theme</name>
<introduce>主题</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`light`

可选值 `light, dark`

说明：图表主题，共有黑白两套主题

</api>

<api>
<name>type</name>
<introduce>树图类型</introduce>
<type>String</type>
<required>必填</required>
<defaults>无默认值</defaults>

可选值：`LineTreeChart，RingTreeChart`

说明：图表类型，共有线形树图和环形树图两套

</api>

<api>
<name>padding</name>
<introduce>图表内边距值</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[20, 150, 20, 150]`

说明：调整图表的 padding 值

</api>

<api>
<name>direction</name>
<introduce>线性树图起点方向</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`'left'`

可选值：`'left','right','top','bottom'`

说明：树图的起点方向,仅 type 为`LineTreeChart`时有效

</api>

<api>
<name>symbolSize</name>
<introduce>树图图元大小</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`10`

说明：树图的图元的大小

</api>

<api>
<name>lineType</name>
<introduce>线性树图连线形状</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`'curve'`

可选值：`'curve','polyline'`

说明：树图的连线的形状,仅 type 为`LineTreeChart`时有效,`'polyline'`表示折线，`'curve'`表示曲线。

</api>

<api>
<name>initialTreeDepth</name>
<introduce>树图初始展开层级</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`1`

说明：树图的初始展开层级,最小值为 1

</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
 data: [{
            name: 'flare',
            children: [
              {
                name: 'data',
                children: [
                  {
                    name: 'converters',
                    children: [
                      { name: 'Converters', value: 721 },
                      { name: 'DelimitedTextConverter', value: 4294 }
                    ]
                  },
                  {
                    name: 'DataUtil',
                    value: 3322
                  }
                ]
              },
              {
                name: 'display',
                children: [
                  { name: 'DirtySprite', value: 8833 },
                  { name: 'LineSprite', value: 1732 },
                  { name: 'RectSprite', value: 3623 }
                ]
              },
              {
                name: 'flex',
                children: [{ name: 'FlareVis', value: 4116 }]
              },
            ]
        }]
```

说明：树图的数据,name:节点的名称,value:节点的数值,children: 子节点。name,value,children 的名称是固定的，不允许做更改。name 为必传,value 和 children 可不传。

</api>

<api>
<name>tipHtml</name>
<introduce>悬浮提示框内容配置</introduce>
<type>Function</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
tipHtml 回调函数控制自定义悬浮框：
( params: Array,
  ticket: string,
  callback: (ticket: string, html: string)
) => string | HTMLElement | HTMLElement[]
```

格式：

```d
tipHtml: (params, ticket, callback) => {
    const data = params.data;
    const name = data.name;
    const value = data.value;
    let htmlString = '<div style="margin-bottom:4px;">提示框div>';
    htmlString += '<div style="margin-bottom:4px;">'+
                  '<span>'+name+'</span>'+
                  '</div>';
    if (value) {
        htmlString += '<div style="margin-bottom:4px;">'+
                    '<span style="display:inline-blocmargin-right:8px;min-width:60px;">Valuespan>'+
                    '<span>'+value+'</span>'+
                    '</div>';
        }
    return htmlString
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>
