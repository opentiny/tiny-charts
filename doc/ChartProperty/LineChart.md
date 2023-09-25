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

可选值： `light` , `dark` , `hwCloud-light` , `hwCloud-light`

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
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
data: [
  { Month: 'Jan', Domestic: 33, Abroad: 37 },
  { Month: 'Feb', Domestic: 27, Abroad: 39 },
  { Month: 'Mar', Domestic: 31, Abroad: 20 },
  ...
];
```

说明：图表数据 ， Month 为 x 轴数据 ， Domestic 、 Abroad 为 折线名称 , Month 及折线名称（key 值）可更换
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
    itemGap:28,
    orient:'horizontal',
    reverseEvent：false，
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

<p class='ev_expand_title'>legend.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：图例组件的整体高度

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

<p class='ev_expand_introduce'>可选值：`horizontal`（水平） 、 `vertical`（垂直）

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

说明：设置图表数据中哪个 key 值作为折线图的横坐标数据

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

<p class='ev_expand_introduce'>说明：设置图表数据中哪个 key 值作为折线图的横坐标数据(`xAxis.data`即`String`类型的`xAxis`值)

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
<name>smooth</name>
<introduce>折线是否更改为曲线</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：折线图是否开启平滑曲线
</api>

<api>
<name>step</name>
<introduce>折线是否更改为阶梯线</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：折线图是否配置阶梯线 ， 配置 `step:true` 则 `smooth:true` 失效
</api>

<api>
<name>predict</name>
<introduce>折线更改为预测线的数据名</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：`predict:'Feb'`

说明：折线图从哪条 x 轴数据之后开启趋势预测线
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
    topLabel:'上阈值线',
    topColor:'red',
    topPosition:'start',
    bottom:20，
    bottomLabel:'下阈值线',
    bottomColor:'blue',
    bottomPosition:'end'
}
```

说明：折线图中阈值线的相关配置

<p class='ev_expand_title'>markLine.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为上阈值线 ， `markLine.top` 必须大于 `MarkLine.bottom`

<p class='ev_expand_title'>markLine.topLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：配置上阈值线的文本信息

<p class='ev_expand_title'>markLine.topColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`red`

<p class='ev_expand_introduce'>说明：配置上阈值线的文本颜色

<p class='ev_expand_title'>markLine.topPosition<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`insideEndTop`（结束位置上方）

<p class='ev_expand_introduce'>可选值：`insideEndTop`（结束位置上方） 、 `insideStartTop`（开始位置上方） 、 `insideEndBottom`（结束位置下方） 、 `insideStartBottom`（开始位置上方） 、 `start`（开始位置） 、 `end`（结束位置）

<p class='ev_expand_introduce'>说明：配置上阈值线的文本位置

<p class='ev_expand_title'>markLine.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为下阈值线 ， `markLine.top` 必须大于 `MarkLine.bottom`

<p class='ev_expand_title'>markLine.bottomLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：配置下阈值线的文本信息

<p class='ev_expand_title'>markLine.bottomColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`red`

<p class='ev_expand_introduce'>说明：配置下阈值线的文本颜色

<p class='ev_expand_title'>markLine.bottomPosition<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`insideEndTop`

<p class='ev_expand_introduce'>可选值：`insideEndTop`（结束位置上方） 、 `insideStartTop`（开始位置上方） 、 `insideEndBottom`（结束位置下方） 、 `insideStartBottom`（开始位置上方） 、 `start`（开始位置） 、 `end`（结束位置）

<p class='ev_expand_introduce'>说明：配置下阈值线的文本位置
</api>

<api>
<name>markPoint</name>
<introduce>峰值标记</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`markPint:{max:false,min:false}`

说明：折线图峰值标记的相关配置

<p class='ev_expand_title'>markPoint.max<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否显示最大峰值标记

<p class='ev_expand_title'>markPoint.min<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否显示最小峰值标记
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
<name>tipHtmlStyle</name>
<introduce>悬浮提示框样式配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`tipHtmlStyle:{padding:[14,16]}`

说明：悬浮提示框的 样式配置

<p class='ev_expand_title'>tipHtmlStyle.padding<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`[14,16]`

<p class='ev_expand_introduce'>说明：悬浮提示框的padding值配置

<p class='ev_expand_title'>tipHtmlStyle.backgroundColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`theme='light' , backgroundColor='#fff' `<br> `theme='dark' , backgroundColor='#393939'`

<p class='ev_expand_introduce'>说明：悬浮提示框的背景色配置
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
    zoomOnMouseWheel:true,
    height:24
}
```

说明：设置折线图区域缩放轴是否展示及位置

<p class='ev_expand_title'>dataZoom.start<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：区域缩放轴的数据窗口范围的起始百分比

<p class='ev_expand_title'>dataZoom.end<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`100`

<p class='ev_expand_introduce'>说明：区域缩放轴的数据窗口范围的结束百分比

<p class='ev_expand_title'>dataZoom.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否展示区域缩放轴

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
```

<p class='ev_expand_introduce'>说明：自定义区域缩放轴的相关颜色样式配置
<p class='ev_expand_title'>dataZoom.zoomOnMouseWheel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：是否允许鼠标滑轮缩放图表

<p class='ev_expand_title'>dataZoom.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`24`

<p class='ev_expand_introduce'>说明：设置区域缩放轴的高度
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

<p class='ev_expand_introduce'>可选值：`left` 、 `right`

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

<p class='ev_expand_introduce'>默认值：全部的折线数据

<p class='ev_expand_introduce'>说明：自定义哪条折线数据采用此 y 轴的属性，该属性仅在 `yAxis` 类型为 `Array` 时会生效。当有折线数据名未被 `dataName` 所包含，改折线数据样式按照 `yAxis[0]`配置

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
<name>labelHtml</name>
<introduce>配置图表数据点文本</introduce>
<type>Function</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
labelHtml: params => {
  if (params.dataIndex === 8) return '今日累计\\n' + params.value + 't';
  return '';
};
```

说明：设置折线图数据点的文本
</api>

<api>
<name>itemStyle</name>
<introduce>配置图表数据点文本样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`itemStyle:{symbolSize:20,borderColor:'#fff'}`

说明：设置折线图数据点的样式

<p class='ev_expand_title'>itemStyle.symbolSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`20`

<p class='ev_expand_introduce'>说明：设置折线图数据点的大小

<p class='ev_expand_title'>itemStyle.borderColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<br>
`theme=light` ， symbolSize=`#ffffff`<br>
`theme=dark` ， symbolSize=`#191919`

<p class='ev_expand_introduce'>说明：设置折线图数据点的边框颜色
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
<name>silent</name>
<introduce>是否关闭hover动效</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：是否关闭 hover 态的效果
</api>

<api>
<name>linearGradient</name>
<introduce>线性渐变</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：线性渐变，循环取色(支持 rgb 颜色、英文单词颜色、十六进制颜色)，渐变方向由左向右

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
