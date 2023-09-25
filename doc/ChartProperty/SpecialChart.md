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
<name>name</name>
<introduce>图标名称</introduce>
<type>string</type>
<required>必填</required>
<defaults>无默认值</defaults>

说明：图表名称，不允许自定义<br>
阈值线横向进度图--`name: 'ThresholdProcessBarChart'`,<br>
聚合气泡图--`name:'AssembleBubbleChart'`,<br>
标记折线图--`name:'MarkerLineChart'`,

</api>

<api>
<name>chartPadding</name>
<introduce>图表内边距</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[50,20,50,20]`

说明：图表各方向的 padding 值,此属性目前仅使用在标记折线图中<br>
`chartPadding : [top, right, bottom, left]`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top' ， 'middle' ， 'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left' ， 'center' ， 'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

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
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
阈值线横向进度图
data:[
        { name:'UniEPMgr',    value:80 },
        { name:'SMLoglic',    value:65 },
        { name:'SSO',         value:45 },
        ...
]
```

说明：图表数据 ， name 为页面横向进度条名称 ， value 为页面横向进度条长度

```d
聚合气泡图--非嵌套式  非嵌套聚合式
 data:  [
        {type: 'VPC',value: 1076,label: '1076',showLabel:true},
        {type: 'VPC',value: 362,label: '362',showLabel:true},
        {type: 'EIP',value: 530,label: '530',showLabel:false},
        ...
 ]
```

说明：图表数据 ， type 用于气泡分类 ， value 与气泡的大小正相关 ， label 展示气泡的文本信息 ， showLabel 是否展示文本信息,默认 false

```d
聚合气泡图--嵌套式
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

```d
标记折线图
data:[
      {time:'09:00',value:35},
      {time:'10:00',value:35},
      {time:'11:00',value:24},
]
```

说明：图表数据 ， time 为 x 轴数据 ， value 为 y 轴数据 ， time 、 value 名称可更换
</api>

<api>
<name>type</name>
<introduce>聚合气泡图图表类型</introduce>
<type>string</type>
<required>必填</required>
<defaults>无默认值</defaults>

说明：聚合气泡图图表类型 ， 不允许自定义<br>
非嵌套式--` type:'non-nested'`<br>
非嵌套聚合式--`type:'non-nested-aggregate'`<br>
嵌套式--`type:'nested'`

</api>

<api>
<name>chartPosition</name>
<introduce>聚合气泡图位置及大小</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`{center:['50%','50%'],radius:'80%'}`

说明：调整聚合气泡图的位置及大小

<p class='ev_expand_title'>chartPosition.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['50%','50%']`

<p class='ev_expand_introduce'>说明：调整聚合气泡图的位置

<p class='ev_expand_title'>chartPosition.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`80%`

<p class='ev_expand_introduce'>说明：调整聚合气泡图的大小

</api>

<api>
<name>distance</name>
<introduce>聚合气泡图气泡间距</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：<br>
非嵌套式气泡图：`50`<br>
非嵌套聚合式气泡图：`5`<br>
嵌套式气泡图：`5`

说明：调整聚合气泡图的气泡之间的距离

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
    orient:'horizontal'
}
```

说明：自定义图例

<p class='ev_expand_title'>legend.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：图例是否显示

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String/Function</span>

<p class='ev_expand_introduce'>说明：用来自定义图例的文本显示。

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
<name>smooth</name>
<introduce>标记折线图更改为曲线</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：标记折线图是否开启平滑曲线

</api>

<api>
<name>tooltip</name>
<introduce>标记折线图是否显示悬浮框</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`true`

说明：标记折线图是否显示鼠标悬浮框

</api>

<api>
<name>xAxis</name>
<introduce>配置x轴坐标数据</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`data`中每个子集第一个 key 值

说明：规定哪个 key 值作为标记折线图的横坐标数据

</api>

<api>
<name>yAxis</name>
<introduce>配置y轴</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：`yAxis:{interval:15,max:45}`

说明：标记折线图纵向的间隔及最大值

<p class='ev_expand_title'>yAxis.interval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：标记折线图纵向的间隔

<p class='ev_expand_title'>yAxis.max<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：标记折线图纵向的最大值

</api>

<api>
<name>yAxisName</name>
<introduce>配置y轴文本</introduce>
<type>string</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：标记折线图 y 轴的文本名称

</api>

<api>
<name>mark</name>
<introduce>标记折线图标记点样式配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
mark:{
       symbolSize:'8',
       itemStyle: {
        color: params => {
          if (params.name === '11:00' || params.name === '14:00') return '#2070F3';
          return 'transparent';
        },
      },
       formatter:params=>{
        if (params.name === '11:00') return '-0.23'+'\n煤质变化';
        if (params.name === '14:00') return '+0.17'+'\n煤质变化';
        return '';
       },
       textStyle:{
        color: 'rgba(238,238,238,0.8)',
        fontSize: 12,
        lineHeight: 16,
       },
    }
```

说明：标记折线图中特殊标记点的相关配置

<p class='ev_expand_title'>mark.symbolSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：标记点的大小配置

<p class='ev_expand_title'>mark.itemStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>格式：
```css
 itemStyle: {
        color: params => {
          if (params.name === '11:00' || params.name === '14:00') return '#2070F3';
          return 'transparent';
        },
      }
```

<p class='ev_expand_introduce'>说明：标记点的颜色配置

<p class='ev_expand_title'>mark.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>格式：
```css
 formatter:params=>{
        if (params.name === '11:00') return '-0.23'+'\n煤质变化';
        if (params.name === '14:00') return '+0.17'+'\n煤质变化';
        return '';
       }
```

<p class='ev_expand_introduce'>说明：标记点的文本信息配置

<p class='ev_expand_title'>mark.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：
```css
 textStyle:{
        color: '#fff',
        fontSize: 12,
        lineHeight: 12,
       },
```

<p class='ev_expand_introduce'>说明：标记点的文本样式配置

</api>

<api>
<name>markPoint</name>
<introduce>标记折线图标记区域背景配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
markPoint: {
        data: [
          {
            xAxis: '11:00',
            yAxis: 0,
            symbolSize: [30, 119],
            symbolOffset: [0, -60],
            symbol: 'image://public/image/SpecialChart/rectangle-blue.png',
          },
          {
            xAxis: 5,
            yAxis: 0,
            symbolSize: [30, 119],
            symbolOffset: [0, -60],
            symbol: 'image://public/image/SpecialChart/rectangle-blue.png',
          },
        ],
      }
```

说明：标记折线图中标记区域背景的相关配置

<p class='ev_expand_title'>markPoint.data<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>格式：
```css
data: [
          {
            xAxis: '11:00',
            yAxis: 0,
            symbolSize: [30, 119],
            symbolOffset: [0, -60],
            symbol: 'image://public/image/SpecialChart/rectangle-blue.png',
          },
          {
            xAxis: 5,
            yAxis: 0,
            symbolSize: [30, 119],
            symbolOffset: [0, -60],
            symbol: 'image://public/image/SpecialChart/rectangle-blue.png',
          },
        ]
```

<p class='ev_expand_introduce'>说明：`xAxis、yAxis` 为标记区域的位置 ， 可使用`data`中的名称或索引<br>
`symbolSize` 为图表标注的宽度及高度,默认[50,50]<br>
`symbolOffset` 为图表标注的水平竖直方向的位移值 ， 默认[0,0]<br>
`symbol` 为图表标注的背景 ， 默认为 `pin` ， 可使用 base64 编码的路径格式

</api>

<api>
<name>markLine</name>
<introduce>阈值线横向进度图和标记折线图阈值线配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：
标记折线图

```d
 markLine:{
        silent:true,
        top:24.5,
        topLable:'目标:24.5',
        topColor:'#779182',
        labelColor:'#779182',
        labelPosition:'insideStartTop',
        fontSize:12,
        distance:[0,10],
    }
```

格式：
阈值线横向进度图

```d
markLine:{
        value:40,
        bounds:'left',
        itemColor:{
            initialColor:['rgba(243,66,98,0.50)'],
            endColor:['#F34262']
    },
    color:'#fff'
   }
```

说明：阈值线的相关配置

<p class='ev_expand_title'>markLine.silent<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：标记折线图-图形是否不响应鼠标事件

<p class='ev_expand_title'>markLine.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：标记折线图-配置将哪根 y 轴刻度线做为阈值线

<p class='ev_expand_title'>markLine.topLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：标记折线图-配置阈值线的文本信息

<p class='ev_expand_title'>markLine.topColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`red`

<p class='ev_expand_introduce'>说明：标记折线图-配置阈值线的颜色

<p class='ev_expand_title'>markLine.labelColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`red`

<p class='ev_expand_introduce'>说明：标记折线图-配置阈值线的文本颜色

<p class='ev_expand_title'>markLine.labelPosition<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`insideEndTop`（结束位置上方）

<p class='ev_expand_introduce'>可选值：`insideEndTop`（结束位置上方） ， `insideStartTop`（起始位置上方） ， `insideEndBottom`（结束位置下方）， `insideStartBottom`（起始位置下方） ， `start`（起始位置） ， `end`（结束位置）`

<p class='ev_expand_introduce'>说明：标记折线图-配置阈值线的文本位置

<p class='ev_expand_title'>markLine.fontSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`12`

<p class='ev_expand_introduce'>说明：标记折线图-配置阈值线的文本字体

<p class='ev_expand_title'>markLine.distance<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`[0,0]`

<p class='ev_expand_introduce'>说明：标记折线图-配置阈值线的文本距离 `labelPosition` 的水平与垂直距离

<p class='ev_expand_title'>markLine.value<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：阈值线横向进度图-配置阈值线的标定值

<p class='ev_expand_title'>markLine.bounds<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`right`

<p class='ev_expand_introduce'>说明：阈值线横向进度图-控制阈值线哪一边的图表变告警色

<p class='ev_expand_title'>markLine.itemColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array | Object</span>

<p class='ev_expand_introduce'>默认值：`['#F43146']`

<p class='ev_expand_introduce'>说明：阈值线横向进度图-配置告警色，当传数组的时候默认取数组第一个颜色，传对象itemColor:{
            initialColor:['rgba(243,66,98,0.50)'],
            endColor:['#F34262']
    }实现渐变色

}

<p class='ev_expand_title'>markLine.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`['#F46465']`
<p class='ev_expand_introduce'>说明：阈值线横向进度图-配置阈值线的颜色

</api>

<api>
<name>unit</name>
<introduce>阈值线横向进度图文本单位</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：用来控制阈值线横向进度图右侧的文本显示单位

</api>

<api>
<name>barWidth</name>
<introduce>阈值线横向进度图柱形宽度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`8`
说明：用来控制阈值线横向进度图柱形宽度

</api>

<api>
<name>calibrationValue</name>
<introduce>阈值线横向进度图标定值</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`100`

说明：用于横向进度图、阈值线横向进度图和堆叠横向进度图展示 data 中每项数据在标定值的占据比例

</api>

<api>
<name>event</name>
<introduce>阈值线横向进度图和聚合气泡图图表事件</introduce>
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

说明：用于阈值线横向进度图和聚合气泡图设置图表的处理事件,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on">https://echarts.apache.org/zh/api.html#echartsInstance.on</a>

</api>

<api>
<name>title</name>
<introduce>阈值线横向进度图图表标题样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
 title:{
  color:'#191919',
  fontSize:16,
  width:50
 }

```

说明：用于阈值线横向进度图设置图表标题样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a>

</api>

<api>
<name>text</name>
<introduce>阈值线横向进度图图表右侧文本样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
 text:{
  color:'#191919',
  fontSize:16,
  width:50
 }

```

说明：用于阈值线横向进度图设置图表右侧文本样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a>
</api>

<api>
<name>minWidth</name>
<introduce>阈值线横向进度图单项数据的最小宽度</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：用于阈值线横向进度图图表解决各项数据差值过大，导致部分数据显示不明显的问题。
</api>

<api>
<name>linearGradient</name>
<introduce>阈值线横向进度图柱体线性渐变</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：线性渐变，循环取色(支持 rgb 颜色、英文单词颜色、十六进制颜色)

格式：

```d
linearGradient:{
        initialColor:['red','#fff'],
        endColor:['blue','yellow']
    }
```

<p class='ev_expand_title'>linearGradient.initialColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：柱体起始颜色，循环取色。当此属性未配置时则从color属性中循环取色

<p class='ev_expand_title'>linearGradient.endColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：柱体末尾颜色，循环取色。当此属性未配置时则从color属性中循环取色

</api>

<api>
<name>splitLineColor</name>
<introduce>阈值线横向进度图的分割线颜色</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：用来控制阈值线横向进度图的分割线颜色

</api>

<api>
<name>backgroundBarColor</name>
<introduce>阈值线横向进度图的背景柱条颜色</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：用来控制阈值线横向进度图的背景柱条颜色

</api>
