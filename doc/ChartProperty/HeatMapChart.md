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

可选值 `light , dark`

说明：图表主题，共有黑白两套主题。

</api>

<api>
<name>type</name>
<introduce>配置热力图类型</introduce>
<type>String</type>
<required>必填</required>
<defaults>无默认值</defaults>

可选值：`RectangularHeatMapChart`，`CalendarHeatMapChart`，`HexagonHeatMapChart`

目前有三个类型，使用热力图表时必须填写。

</api>

<api>
<name>color</name>
<introduce>颜色</introduce>
<type>String | Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值: type 为`RectangularHeatMapChart`时 <span style="background:#F43146;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#F43146'。

type 为`CalendarHeatMapChart`时 <span style="background:#1F55B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>#1F55B5。

type 为`HexagonHeatMapChart`时 [
<span style="background:#e7e7e7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#FFFFFF'，
<span style="background:#448DFF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#448DFF'，
<span style="background:#4350EA;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#4350EA'，
<span style="background:#33307C;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#33307C'，
<span style="background:#242648;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#242648'，
<span style="background:#973152;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#973152'，
<span style="background:#F8364D;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#F8364D']。

说明：设置图表 color,type 为`HexagonHeatMapChart`时,蜂窝的颜色变化数组,根据颜色数组的颜色个数 n,将 data 数据按照最小值到最大值均分为 n 个区间,图表各项的颜色取各数据所在区间的颜色。

</api>

<api>
<name>borderColor</name>
<introduce>日历热力图矩形边框色</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值:`'#1F55B5'`

说明：设置`CalendarHeatMapChart`图表的 borderColor,仅 type 为`CalendarHeatMapChart`有效

</api>

<api>
<name>showLabel</name>
<introduce>日历热力图矩形文本显示</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值:`true`

可选值：`true, false`

说明：设置`CalendarHeatMapChart`图表的图元的文本显示,仅 type 为`CalendarHeatMapChart`有效

</api>

<api>
<name>padding</name>
<introduce>图表内边距值</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值: type 为`RectangularHeatMapChart`时 `[50, 30, 20, 20]`

type 为`CalendarHeatMapChart`时，若没有 handle 属性为`[50, 30, 20, 20]`，没有为`[50, 120, 20, 20]`

type 为`HexagonHeatMapChart`时`[50, 30, 20, 20]`

说明：设置图表四个方向的 padding 值

</api>

<api>
<name>rectangleSize</name>
<introduce>矩形热力图矩形大小</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值:`8`

说明：控制矩形的大小，仅 type 为`RectangularHeatMapChart`时有效。

</api>

<api>
<name>yAxisName</name>
<introduce>配置y轴文本(建议使用yAxis.name)</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：y 轴的标题

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
    const color = params.color;
    const data = params.data;
    const [x, y, z,...others] = data;
    let htmlString = '<div style="margin-bottom:4px;">自定义日历热力图提示框</div>';
    htmlString +=
        '<div style="margin-bottom:4px;">'+
            '<span style="display:inline-block;width:10px;height:10px;margin-right:8px;border-radius:5px;border-style:solid;border-width:1px;border-color:'+color+';background-color:'+color+';"></span>'+
            '<span style="display:inline-block;margin-right:8px;min-width:60px;">Value</span>' +
            '<span>'+z+'</span>'+
            '</div>';
    return htmlString
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

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

</api>

<api>
<name>handle</name>
<introduce>日历热力图手柄相关配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：设置`CalendarHeatMapChart`图表的手柄，不传不显示手柄，仅 type 为`CalendarHeatMapChart`时有效。

<p class='ev_expand_title'>handle.inverse<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>可选值：`true, false`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄两端文本是否反转显示

<p class='ev_expand_title'>handle.text<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>格式:[A,B]
<p class='ev_expand_introduce'>默认值：data 第三个属性值的最大值和最小值
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄两端文本。

<p class='ev_expand_title'>handle.calculable<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>可选值：`true, false`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄滑块是否显示。

<p class='ev_expand_title'>handle.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`vertical`
<p class='ev_expand_introduce'>可选值：`vertical,horizontal`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄显示方向。`vertical`表示垂直，`horizontal`表示水平。

<p class='ev_expand_title'>handle.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`20`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄宽度。

<p class='ev_expand_title'>handle.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`400`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄高度。

<p class='ev_expand_title'>handle.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：`{right:'4%', bottom:'6%'}`
<p class='ev_expand_introduce'>可选值：`top, left, right, bottom`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄位置,top 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,left 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比, right 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,bottom 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比。

</api>

<api>
<name>quantity</name>
<introduce>蜂窝热力图每行排列数量</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`40`

说明：设置`HexagonHeatMapChart`图表的蜂窝的排列数量,仅 type 为`HexagonHeatMapChart`时有效。

</api>

<api>
<name>changeProperty</name>
<introduce>日历热力图热力变化配置</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`opcity`

可选值：`opcity,color`

说明：控制`CalendarHeatMapChart`图表根据什么来体现热力的变化,仅 type 为`CalendarHeatMapChart`时有效。

</api>

<api>
<name>xAxis</name>
<introduce>配置x轴坐标数据</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
Object类型
xAxis:{
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
    labelRotate:45,
}
```

说明：自定义 x 轴配置(将`xAxisName`、`xAxisLine`、`xAxisInterval`、`xAxisLabelRotate`属性统一整合到 `Object` 类型的 `xAxis` 内部)

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

<p class='ev_expand_title'>xAxis.labelRotate<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度(`xAxis.labelRotate`即`xAxisLabelRotate`)

</api>

<api>
<name>xAxisInterval</name>
<introduce>配置x轴label间距(建议使用xAxis.interval)</introduce>
<type>Number | Function</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`0`

格式:

```d
// 当xAxisInterval为2时，x轴的label会每隔2个显示
xAxisInterval: 2
```

```d
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

说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应，仅 type 为`CalendarHeatMapChart`时有效。
</api>

<api>
<name>yAxis</name>
<introduce>配置y轴</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

格式:

```d
yAxis:{
        // 设置单位
         unit:'%',
        // 设置刻度文本间隔
        interval:29,
        // 坐标轴的位置
        position:'right',
        // 坐标轴的名称
        name: 'Number',
        // 坐标轴的名称位置调整
        nameTextStyle:{
            align: 'right',
            // 用于调整y轴标题的位置
            padding: [0, -38, 0, 0]
        },
    },
```

<p class='ev_expand_title'>yAxis.unit<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置y轴label的单位。

<p class='ev_expand_title'>yAxis.interval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number | Function</span>

<p class='ev_expand_introduce'>格式：

```css
// 当interval为2时，y轴的label会每隔2个显示
interval: 2;
```

<p class='ev_expand_introduce'>

```css
// 当interval为function时，y轴的label会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
interval: (index,value) => {
    if (index % 24 === 0) {
        return true;
    }
    if (index === 61) {
        return true;
    }
    return  false;
},
```

<p class='ev_expand_introduce'>说明：自定义 y 轴label显示，仅 type 为`CalendarHeatMapChart`时有效。

<p class='ev_expand_title'>yAxis.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`'left'`

<p class='ev_expand_introduce'>可选值：`'left','right'`

<p class='ev_expand_introduce'>说明：设置y轴的位置。

<p class='ev_expand_title'>yAxis.name<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置y轴label的名称,此时不用配置yAxisName属性。

<p class='ev_expand_title'>yAxis.nameTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Obiect</span>

<p class='ev_expand_introduce'>说明：设置y轴名称样式，具体属性参考https://echarts.apache.org/zh/option.html#yAxis.nameTextStyle。

</api>

<api>
<name>xAxisName</name>
<introduce>配置x轴文本(建议使用xAxis.name)</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：热力图 x 轴的文本名称
</api>

<api>
<name>xAxisLine</name>
<introduce>设置x轴样式(建议使用xAxis.line)</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
xAxisLine:{
    show:true,
    lineStyle:{
        color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
        type:'solid',
        width:2
    }
}
```

说明：设置 x 轴样式（因为 yAxis.splitLine 属性会对 x 轴产生样式影响;可设置此属性进行样式覆盖）

<p class='ev_expand_title'>xAxisLine.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：x 轴是否显示

<p class='ev_expand_title'>xAxisLine.lineStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
lineStyle:{
    color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
    type:'solid',
    width:2
}
```

<p class='ev_expand_introduce'>说明：配置x轴刻度线样式
</api>

<api>
<name>xAxisLabelRotate</name>
<introduce>x轴label旋转角度(建议使用xAxis.labelRotate)</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度

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
<name>shape</name>
<introduce>蜂窝热力图渲染的形状</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`'hexagon'`

说明：设置 渲染的图形形状 可选值 `'hexagon'`,`'rect'`,`'circle'`

</api>
