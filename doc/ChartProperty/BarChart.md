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
<span style="background:#6d8ff0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#6D8FF0' ，
<span style="background:#00a874;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#00A874' ，
<span style="background:#bd72f0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#BD72F0' ，
<span style="background:#c6e5ec;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#C6E5EC' ，
<span style="background:#fdc000;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#FDC000' ，
<span style="background:#9185f0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#9185F0']
<br>
`theme='dark '` ，color=[
<span style="background:#1f55b5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#1F55B5' ，
<span style="background:#278661;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#278661' ，&nbsp;
<span style="background:#8a21bc;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#8A21BC' ，
<span style="background:#26616b;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#26616B' ，&nbsp;
<span style="background:#b98c1d;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#B98C1D' ，
<span style="background:#745ef7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> '#745EF7']

说明：调色盘颜色列表 ，图表从颜色数组中依次循环取得颜色使用， 如果没有设置颜色列表 ， 则会根据 `theme` 决定默认值。
</api>

<api>
<name>type</name>
<introduce>配置柱状图类型</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`bar`（普通柱形）

可选值：`bar`（普通柱形） ， `range`（区间柱形） ， `stack`（堆叠柱形） ， `both-sides`（双向柱形） ， `water-fall`（瀑布柱形）

说明：配置柱状图类型<br>
`type='bar'`柱状图为普通柱状图 ， 通过柱形的高度来表现数据的大小<br>
`type='range'`柱状图为区间柱状图 ， 用于描述数据从最小值到最大值的区域<br>`type='stack'`柱状图为堆叠柱状图 , 用于展示数据叠加效果的区域<br>`type='both-sides'`柱状图为双向柱状图 , 两者数据值一正一负 ， 数据拼凑形成柱形<br>`type='water-fall'`柱状图为瀑布柱状图 ， 此时图中会自动添加一个 Total(总和)数据的柱形

</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
普通柱状图  堆叠柱状图  瀑布柱状图
data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": 37 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": 39 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": 20 },
        ...
]
```

```d
双向柱状图
data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": -37 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": -39 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": -20 },
        ...
]
```

```d
区间柱状图
data: [
        { "Month": 'Jan', "Domestic": [5,20], "Abroad": [5,23] },
        { "Month": 'Feb', "Domestic": [10,30], "Abroad": [8,25] },
        { "Month": 'Mar', "Domestic": [8,25], "Abroad": [2,20] },
        ...
]
```

说明：图表数据 ， Month 为 x 轴数据 ， Domestic 、 Abroad 为 柱状图数据名称 ， Month 及柱状图数据名称可更换

</api>

<api>
<name>xAxis</name>
<introduce>配置x轴坐标数据</introduce>
<type>String | Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：图表数据`data`数组中`data[0]`对象的第一个 key 值

格式：

```d
String类型
xAxis:'Month'
```

说明：设置图表数据中哪个 key 值作为图表的横坐标数据

格式：

```d
Object类型
xAxis:{
    data:'Month'，
    name:'Utils',
    line:{
        show:true,
        lineStyle:{
            color:'red',
            type:'dashed',
            width:2
        }
    },
    interval:2,
    fullGrid:true,
    labelRotate:45,
    ellipsis:{
        overflow:'truncate',
        labelWidth:20
    },
    nameLocation:'end',
    nameTextStyle:{
        fontSize:12,
        color:#4e4e4e
    }
}
```

说明：自定义 x 轴配置(将原先的 `String` 类型的 `xAxis`、`xAxisName`、`xAxisLine`、`xAxisInterval`、`xAxisFullGrid`、`xAxisLabelRotate`、`xAxisEllipsis` 属性统一整合到 `Object` 类型的 `xAxis` 内部)

<p class='ev_expand_title'>xAxis.data<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置图表数据中哪个 key 值作为图表的横坐标数据(`xAxis.data`即`String`类型的`xAxis`值)

<p class='ev_expand_title'>xAxis.name<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：配置x轴文本名称（`xAxis.name`即`xAxisName`）

<p class='ev_expand_title'>xAxis.line<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：
```css
xAxisLine:{
    show:true,
    lineStyle:{
        color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
        type:'solid',
        width:2
    },
    text:{
        color:theme==='dark'?#bbbbbb:#4e4e4e
    }
}
```
<p class='ev_expand_introduce'>说明：设置 x 轴样式(`xAxis.line`即`xAxisLine`)

<p class='ev_expand_title'>xAxis.interval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number | Function</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>格式：
```css
// 当xAxisInterval为2时，x轴的label会每隔2个显示
xAxisInterval: 2
```

```css
// 当xAxisInterval为function时，x轴的label会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
xAxisInterval: (index,value) => {
    if (index % 24 === 0) {
        return true;
    }
    if (index === 61) {
        return true;
    }
    return  false;
},
```

<p class='ev_expand_introduce'>说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应（`xAxis.interval`即`xAxisInterval`）

<p class='ev_expand_title'>xAxis.fullGrid<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>说明：设置图表是否顶格到 x 轴左右两边(`xAxis.fullGrid`即`xAxisFullGrid`)

<p class='ev_expand_title'>xAxis.labelRotate<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度(`xAxis.labelRotate`即`xAxisLabelRotate`)

<p class='ev_expand_title'>xAxis.ellipsis<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`xAxis.ellipsis:{overflow:'none'}`
<p class='ev_expand_introduce'>格式：
```css
xAxis.ellipsis:{
    overflow:'truncate',
    width:20
}
```
<p class='ev_expand_introduce'>说明：设置 x 轴刻度文本过长展示方式(`xAxis.ellipsis`即`xAxisEllipsis`)

<p class='ev_expand_title'>xAxis.nameLocation<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`end`
<p class='ev_expand_introduce'>可选值：`end`、`center||middle`、`start`
<p class='ev_expand_introduce'>说明：设置x轴文本位置

<p class='ev_expand_title'>xAxis.nameTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：{fontSize:12,color:'#4e4e4e'}
<p class='ev_expand_introduce'>说明：设置x轴文本样式
</api>

<api>
<name>padding</name>
<introduce>图表内边距值</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[50,20,50,20]`

说明：设置图表四个方向的 `padding` 值<br>
`padding : [top, right, bottom, left]`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top' ， 'middle' ， 'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left' ， 'center' ， 'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比
</api>

<api>
<name>legend</name>
<introduce>图例配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
legend:{
    show:false,
    position:{
        left:'center',
        bottom:15
    },
    itemGap:28
    orient:'horizontal'，
    reverseEvent：false,
    selectedMode:true,
    icon:'circle',
    itemHeight:14,
    itemWeight:14,
    textStyle:{
    fontSize:12,
    padding:[4,0,0,0]，
    color:'#4e4e4e',
    overflow:'none',
}
}
```

说明：自定义图例

<p class='ev_expand_title'>legend.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：图例是否显示

<p class='ev_expand_title'>legend.itemGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`28`

<p class='ev_expand_introduce'>说明：设置图例的间隔

<p class='ev_expand_title'>legend.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：图例组件的整体宽度

<p class='ev_expand_title'>legend.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
position:{
    left:'center',
    bottom:15
}
```

<p class='ev_expand_introduce'>说明：<br>
自定义图例的位置<br>
`position : {top, left, right, bottom}`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

<p class='ev_expand_title'>legend.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`horizontal`(水平)

<p class='ev_expand_introduce'>可选值：`horizontal`（水平） , `vertical`（垂直）

<p class='ev_expand_introduce'>说明：图例的方向

<p class='ev_expand_title'>legend.reverseEvent<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：图例是否支持双击反选（设置为true时，500ms内连续点击图例即视为反选）;<br>图例单击，切换自己，不影响其他图例；图例双击，图例状态全部反选。

<p class='ev_expand_title'>legend.selectedMode<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：是否可以通过点击图例改变系列的显示状态

<p class='ev_expand_title'>legend.icon<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`circle`（圆形）

<p class='ev_expand_introduce'>可选值：`circle`（圆形） 、`rect`（长方形） 、 `roundRect`（圆角长方形） 、 `triangle`（三角形） 、 `diamond`（菱形）

<p class='ev_expand_introduce'>说明：图例的图标的形状 ， 若定义了 `legend.data` ， 则此属性失效

<p class='ev_expand_title'>legend.data<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>样式：

```css
data:[
    {
        icon:'image://public/image/LineChart/Domestic.png',
        iconChange:'image://public/image/LineChart/change.png',
        name:'Domestic',
    },
    {
        icon:'image://public/image/LineChart/Abroad.png',
        iconChange:'image://public/image/LineChart/change.png',
        name:'Abroad',
    }
    ],
```

<p class='ev_expand_introduce'>说明：<br>
针对不同的图例图标以数组的方式管理 ， 定义此属性后则 `legend.icon` 失效<br>`icon`:图例未选中时的背景 ， 可使用 base64 编码的路径格式<br>`iconChange`:图例选中时的背景 ， 可使用 base64 编码的路径格式<br>`name`:图例对应的名称

<p class='ev_expand_title'>legend.itemHeight<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>默认值：`14`

<p class='ev_expand_introduce'>说明：图例图标的高度

<p class='ev_expand_title'>legend.itemWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>默认值：`14`

<p class='ev_expand_introduce'>说明：图例图标的宽度 ， `legend.icon` 不为 `circle` 时 ， 此默认值为 25

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String/Function</span>

<p class='ev_expand_introduce'>说明：用来自定义图例的文本显示。

<p class='ev_expand_title'>legend.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
textStyle:{
    fontSize:12,
    padding:[4,0,0,0]，
    color:'#4e4e4e',
    overflow:'none',
    width
}
```

<p class='ev_expand_introduce'>说明：图例图标的富文本配置 ， `theme=light`,color='#4e4e4e' ， `theme=dark`,color='#bbbbbb'。`width`设置每个图例文本的宽度，`overflow`设置图例文本过长后的显示状态，可选：none：不设置、truncate：截断且显示省略号、break：中文换行、breakAll：强制单词换行。
</api>

<api>
<name>itemStyle</name>
<introduce>柱体样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`itemStyle:{barWidth:8,barGap:'60%'}`

说明：配置柱形的样式

<p class='ev_expand_title'>itemStyle.barWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`8`

<p class='ev_expand_introduce'>说明：配置柱形的宽度

<p class='ev_expand_title'>itemStyle.barGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`60%`

<p class='ev_expand_introduce'>说明：配置柱形与柱形之间的间距

<p class='ev_expand_title'>itemStyle.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>格式：
```d
    color: params => {
        if (params.dataIndex % 2 == 0) {
            return "#777777";
        }
        return "#1F55B5";
    }
```

<p class='ev_expand_introduce'>说明：根据数据数组下标配置特定的柱型颜色
</api>

<api>
<name>direction</name>
<introduce>柱体方向</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`vertical`（垂直）

可选值：`vertical`（垂直） , `horizontal`（水平）

说明：配置柱状图的方向

</api>

<api>
<name>markLine</name>
<introduce>阈值线配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
markLine:{
    top:38,
    bottom:20,
    color:'red'
}
```

说明：柱状图中阈值线的相关配置

<p class='ev_expand_title'>markLine.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为上阈值线 ， `markLine.top` 必须大于 `MarkLine.bottom`

<p class='ev_expand_title'>markLine.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为下阈值线 ， `markLine.top` 必须大于 `MarkLine.bottom`

<p class='ev_expand_title'>markLine.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`#f43146`

<p class='ev_expand_introduce'>说明：配置阈值线颜色

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
与 topTipHtml 区别：它不会只定位在图像顶部，会随鼠标移动而改变位置;划入 axisPointer 区域就会显型<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>

<api>
<name>dataZoom</name>
<introduce>区域缩放轴配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
dataZoom:{
    start:0,
    end:100,
    show:false,
    position:{
        left:36,
        bottom:20
    },
    height:24
}
```

说明：设置柱形图区域缩放轴是否展示及位置

<p class='ev_expand_title'>dataZoom.start<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：区域缩放轴的数据窗口范围的起始百分比

<p class='ev_expand_title'>dataZoom.end<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`100`

<p class='ev_expand_introduce'>说明：区域缩放轴的数据窗口范围的结束百分比

<p class='ev_expand_title'>dataZoom.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否展示区域缩放轴

<p class='ev_expand_title'>dataZoom.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`24`

<p class='ev_expand_introduce'>说明：设置区域缩放轴的高度

<p class='ev_expand_title'>dataZoom.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`position:{left:36,bottom:20}`

<p class='ev_expand_introduce'>说明：<br>
自定义区域缩放轴的位置<br>
`position:{top, left, right, bottom}`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

<p class='ev_expand_title'>dataZoom.style<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>格式：
```css
 style:{
          // 背景底色
          backgroundColor: '#111',
          // 选中区域数据填充色
          selectDataColor:'#314461',
          // 未选中区域数据填充色
          unSelectDataColor:'#454749',
          // 选中区域的蒙层颜色
          middleFillerColor:'rgba(49,68,97,.5)',
          // 设置手柄样式
          handleStyle:{
            color:'red',
            borderColor:'yellow',
            shadowColor:'blue'
          }
        }

````

<p class='ev_expand_introduce'>说明：自定义区域缩放轴的相关颜色样式配置
</api>

<api>
<name>label</name>
<introduce>柱体文本</introduce>
<type>Object | Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
对象形式
label:{
    show:false,
    position:'inside',
    offset:[0,0]
}
````

```d
数组形式
label:[
    {
        show:false,
        position:'inside',
        offset:[0,0]
    },
]
```

说明：柱状图的柱形文本配置<br>
`label='Object'` , 所有的柱形统一配置<br>
`label='Array'` , 可在其内部定义多个样式 ， 按顺序依次对不同名称的柱形进行配置

<p class='ev_expand_title'>label.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：柱状图的柱形文本是否显示

<p class='ev_expand_title'>label.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`inside`（内部）

<p class='ev_expand_introduce'>可选值：`inside`（内部） ， `top`（外部靠顶） ， `bottom`（外部靠底） ， `left`（外部靠左） ， `right`（外部靠右） ， `insideLeft`（内部靠左） ， `insideRight`（内部靠右） ， `insideTop`（内部靠上） ， `insideBottom`（内部靠底） ， `insideTopLeft`（内部左上） ， `insideBottomLeft`（内部左下） ， `insideTopRight`（内部右上） ， `insideBottomRight`（内部右下）

<p class='ev_expand_introduce'>说明：柱状图的柱形文本位置

<p class='ev_expand_title'>label.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`[0,0]`

<p class='ev_expand_introduce'>说明：柱状图的柱形文本横向及纵向偏移量

<p class='ev_expand_title'>label.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>格式：

```css
formatter:params=>{
            if(params.name==='总进尺'){
                if(params.seriesName==='Domestic'){
                    params.value=2120
                    params.data=2120
                }else if(params.seriesName==='Abroad'){
                    params.data=2000
                    params.value=2120
                }
                return params.data+'m'
            }
           return params.data+'t'
        }
```

<p class='ev_expand_introduce'>说明：自定义柱状图的柱形文本信息
</api>

<api>
<name>yAxis</name>
<introduce>配置y轴</introduce>
<type>Array | Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
数组格式
yAxis: [
    {
        max:60,
        min:0,
        interval:10,
        position:'left',
        dataName:['Domestic'],
        name:'value',
        unit:'元',
        nameTextStyle:{
            padding:[0,0,0,-45]
        }
    },
    {
        max:90,
        min: 0,
        interval:15,
        position:'right',
        dataName:['Abroad'],
        name: 'kal',
        unit: '$',
        offset:45,
        nameTextStyle:{
            padding:[0,-45,0,0]
        }
    }
    ],
```

```d
对象格式
yAxis:
    {
        max: 60,
        min: 0,
        interval:5,
        position:'right',
        name: 'Percent(%)',
        unit: '%',
        minInterval:12,
        maxInterval:8
    },
```

说明：自定义 y 轴配置

<p class='ev_expand_title'>yAxis.max<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：自定义 y 轴最大值

<p class='ev_expand_title'>yAxis.min<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：自定义 y 轴最小值

<p class='ev_expand_title'>yAxis.interval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：自定义 y 轴数值刻度

<p class='ev_expand_title'>yAxis.splitNumber<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：自定义 y 轴分割线数量 ， 在定义 yAXis.interval 时 ， 此属性失效

<p class='ev_expand_title'>yAxis.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`left`

<p class='ev_expand_introduce'>可选值：`left` , `right`

<p class='ev_expand_introduce'>说明：自定义 y 轴位置

<p class='ev_expand_title'>yAxis.name<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：自定义 y 轴名称

<p class='ev_expand_title'>yAxis.nameTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>格式：

```css
nameTextStyle:
    {
        align:'right',
        padding:[0,0,0,0],
        color:'red',
        fontSize:30
    }
```

<p class='ev_expand_introduce'>说明：自定义 y 轴标题文本样式

<p class='ev_expand_title'>yAxis.unit<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：自定义 y 轴刻度单位

<p class='ev_expand_title'>yAxis.dataName<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：全部的柱形数据

<p class='ev_expand_introduce'>说明：自定义何条柱形数据采用 此 y 轴的属性配置;此属性仅在 `yAxis` 类型为 `Array` 时 ， 更改会生效;当有柱形数据名未被 `dataName` 所包含 ， 则多余的柱形数据样式按照 `yAxis[0]`配置

<p class='ev_expand_title'>yAxis.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：自定义 y 轴相对于默认位置的偏移量

<p class='ev_expand_title'>yAxis.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：y 轴是否显示

<p class='ev_expand_title'>yAxis.labelTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`{color:theme==='dark'?#bbbbbb:#4e4e4e,fontSize:12}`

<p class='ev_expand_introduce'>说明：配置y轴刻度文本样式

<p class='ev_expand_title'>yAxis.minInterval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置y轴最小刻度间隔

<p class='ev_expand_title'>yAxis.maxInterval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置y轴最大刻度间隔

<p class='ev_expand_title'>yAxis.splitLine<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
splitLine:{
    show:true,
    lineStyle:{
        color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
        type:'solid',
        width:2
    }
}
```

<p class='ev_expand_introduce'>说明：配置y轴刻度线样式
</api>

<api>
<name>lineDataName</name>
<introduce>柱状图更改为折线图的数据名</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：需要转换为折线图的数据名称<br>
折柱混合图是建立在 barChart 的基础上实现的（不可颠倒），除了折线图的预测线 `predict` 属性，其它属性都能支持

</api>

<api>
<name>linearGradient</name>
<introduce>线性渐变</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：线性渐变，循环取色(支持 rgb 颜色、英文单词颜色、十六进制颜色),渐变方向由上向下

格式：

```d
linearGradient:{
        initialColor:['blue','yellow'],
        endColor:['red','#fff'],
    }
```

<p class='ev_expand_title'>linearGradient.initialColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：起始颜色，循环取色。当此属性未配置时则从color属性中循环取色

<p class='ev_expand_title'>linearGradient.endColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：末尾颜色，循环取色。当此属性未配置时则从color属性中循环取色

</api>

<api>
<name>stepGradient</name>
<introduce>柱体分段渐变</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：分段渐变，可在内部配置多个对象，循环取色(支持 rgb 颜色、英文单词颜色、十六进制颜色)

格式：

```d
stepGradient:[
        {
            step:[0,10,20,30,40,50],
            gradientColor:['pink','yellow','blue','red','#ffffff','#000000']
        },
        /** {
            step:[0,10,20,30,40],
            gradientColor:['yellow','red','gray','green','#cccccc']
        }*/
    ]
```

<p class='ev_expand_title'>stepGradient.step<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：分段区域（对应的data数据中最大值不得超出step的最大值,最小值不得小于step的最小值）

<p class='ev_expand_title'>stepGradient.gradientColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：分段区域的颜色。step数组与对应gradientColor数组长度需一致

</api>

<api>
<name>event</name>
<introduce>图表事件</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
 event:{
    series：{
      click:(parms)=>{
        ...
      },
      mousemove:(params)=>{
        ...
      },
      ...
    },
    ....
    }
```

说明：自定义设置图表的处理事件,具体用法参考<a href="https://echarts.apache.org/zh/api.html#echartsInstance.on">https://echarts.apache.org/zh/api.html#echartsInstance.on</a>

</api>

<api>
<name>axisPointer</name>
<introduce>坐标指示器样式（数据背景区域样式）</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：坐标指示器样式（数据背景区域样式），(支持 rgb 颜色、英文单词颜色、十六进制颜色)

默认值：`{theme === 'dark' ? 'rgba(238,238,238,0.08)' : 'rgba(25,25,25,0.08)'}`

格式：

```d
axisPointer:{
        color:'rgba(49,68,97,.5)',
        gradientColor:['rgba(49,68,97,.5)','rgba(49,68,97,.1)'],
    }
```

<p class='ev_expand_title'>stepGradient.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：坐标指示器颜色。同时存在axisPointer.color与axisPointer.gradientColor属性，以axisPointer.gradientColor属性生效

<p class='ev_expand_title'>stepGradient.gradientColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：坐标指示器渐变色。同时存在axisPointer.color与axisPointer.gradientColor属性，以axisPointer.gradientColor属性生效

</api>

<api>
<name>tipHtmlStyle</name>
<introduce>悬浮提示框样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：悬浮提示框样式

默认值：

```d
tipHtmlStyle:{
        padding:[14,16],
        backgroundColor:theme==='dark':'#393939':'#ffffff'
        borderWidth:0,
        textStyle:{
            color:theme==='dark':'#f5f5f5':'#191919'
            fontSize:14,
            fontWeight:'normal'
        }
    }
```

<p class='ev_expand_title'>tipHtmlStyle.padding<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`[14,16]`

<p class='ev_expand_introduce'>说明：悬浮提示框内边距

<p class='ev_expand_title'>tipHtmlStyle.backgroundColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`theme==='dark':'#393939':'#ffffff'`

<p class='ev_expand_introduce'>说明：悬浮提示框背景色

<p class='ev_expand_title'>tipHtmlStyle.borderWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：悬浮提示框边框宽度

<p class='ev_expand_title'>tipHtmlStyle.borderColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：悬浮提示框边框颜色

<p class='ev_expand_title'>tipHtmlStyle.borderRadius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：悬浮提示框边框圆角

<p class='ev_expand_title'>tipHtmlStyle.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
textStyle:{
            color:theme==='dark':'#f5f5f5':'#191919'
            fontSize:14,
            fontWeight:'normal'
        }
```

<p class='ev_expand_introduce'>说明：悬浮提示框文本样式

</api>

<api>
<name>topTipHtml</name>
<introduce>顶部位置悬浮提示框</introduce>
<type>Function</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
topTipHtml 回调函数控制自定义悬浮框：
( params: Array,
  ticket: string,
  callback: (ticket: string, html: string)
) => string | HTMLElement | HTMLElement[]
```

格式：

```d
topTipHtml: (params, ticket, callback) => {
  let htmlString = '';
  htmlString+=params.value
  return htmlString;
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
与 tipHtml 区别：它只会定位在图像顶部，不随鼠标移动而改变位置;划入 axisPointer 区域不会使其展示，只有划到对应数据才会显型<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>
