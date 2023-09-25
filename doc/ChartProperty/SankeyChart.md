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

可选值： `light` , `dark`

说明：图表主题 ， 共有黑白两套主题
</api>

<api>
<name>color</name>
<introduce>颜色</introduce>
<type>Array | String</type>
<required>非必填</required>
<defaults>有默认值</defaults>
默认值：

`theme='light'` ，color=[
<span style="background:#6d8ff0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#6d8ff0' ，
<span style="background:#00a874;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#00a874' ，
<span style="background:#bd72f0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#bd72f0' ，
<span style="background:#c6e5ec;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#c6e5ec' ，
<span style="background:#fdc000;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#fdc000' ，
<span style="background:#9185f0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#9185f0']
<br>
`theme='dark'` ， color=[
<span style="background:#1f55b5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#1f55b5' ，
<span style="background:#278661;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#278661' ，
<span style="background:#8a21bc;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#8a21bc' ，
<span style="background:#26616b;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#26616b' ，
<span style="background:#b98c1d;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#b98c1d' ，
<span style="background:#745ef7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#745ef7']

说明：调色盘颜色列表 ，图表从颜色数组中依次循环取得颜色使用， 如果没有设置颜色列表 ， 则会根据 `theme` 决定默认值。
</api>

<api>
<name>padding</name>
<introduce>图表内边距值</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[50,20,50,20]`

说明：设置图表四个方向的 padding 值<br>
`padding : [top, right, bottom, left]`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top' ， 'middle' ， 'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left' ， 'center' ， 'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比
</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Object</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
data:{
    nodes:[
        {name:'a',value:70},
        {name:'b',value:50},
        {name:'c',value:20},
        ...
    ],
    links:[
        {source:'a',target:'b',value:50},
        {source:'a',target:'c',value:20},
        ...
    ]
}
```

说明：图表数据 ， `nodes` 为页面节点数据 ， `links` 为页面节点之间的连接关系数据

<p class='ev_expand_title'>data.nodes<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>格式：
```css
nodes:[
        {name:'a',value:70},
        {name:'b',value:50},
        {name:'c',value:20},
        ...
    ],
```

<p class='ev_expand_introduce'>说明：页面节点数据 ； `name` 为节点名称 ， `value` 为节点的数据值 ， 未定义 `value` 则默认为 0

<p class='ev_expand_title'>data.links<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>格式：
```css
 links:[
        {source:'a',target:'b',value:50},
        {source:'a',target:'c',value:20},
        ...
    ]
```

<p class='ev_expand_introduce'>说明：页面节点之间的连接关系数据 ； `source` 为节点起点 ， `target` 为节点终点 ， `value` 为节点间传递的数据值

</api>

<api>
<name>draggable</name>
<introduce>页面节点是否可拖动</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值:`true`

说明：页面节点是否可被拖动

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
  let htmlString = '';
  params.map((item, index) => {
    if (index === 0) {
      htmlString += item.name + '<br/>';
    }
    htmlString +=
      '<div>' +
        '<i style="display:inline-block;width:10px;height:10px;background-color:' + item.color + ';">' + '</i>' +
        '<span style="margin-left:5px;color:#ffffff">' +
            '<span style="display:inline-block;width:100px;">' +  item.seriesName + ' User</span>' +
            '<span style="font-weight:bold">' +  item.value + '%</span>' +
            '<span style="color:gray"> out </span>' +
            '<span style="color:red">' + (100 - item.value) + '%</span>' +
        '</span>' +
      '</div>';
  });
  return htmlString;
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>

<api>
<name>widthSpace</name>
<introduce>节点矩形样式配置</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[10,30]`

说明：自定义节点矩形宽度及每列间距 ； 第一个值与节点矩形宽度正相关 ， 第二个值与节点距下方节点的间距正相关

</api>

<api>
<name>orient</name>
<introduce>图表方向</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`horizontal`（水平）

可选值：`horizontal（水平）` ， `vertical`（垂直）

说明：自定义图表方向

</api>

<api>
<name>nodeAlign</name>
<introduce>图表布局对齐方式</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`left`

可选值：`right` ， `left`

说明：自定义图表布局对齐方式 ， 此属性只用于 data 数据交错情况的图表

</api>
