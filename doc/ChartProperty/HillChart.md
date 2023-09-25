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
<name>chartPadding</name>
<introduce>图表内边距</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[50, 20, 50, 20]`

说明：调整图表的 padding 值

</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
 data:[
       {name:'BRAS 01',value:80},
       {name:'BRAS 02',value:60},
       {name:'BRAS 03',value:40},
       {name:'BRAS 04',value:31},
       {name:'BRAS 05',value:25},
    ],
```

说明：山峰图的数据 , name 为数据名称 , value 为数据大小

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
( data, dataIndex, postIndex
) => string | HTMLElement | HTMLElement[]
```

格式：

```d
 tipHtml:(params,ticket,callback)=>{
        let htmlString = '';
        htmlString +=
        `<span style="display:inline-block;margin-right:5px;height:10px;">name : ${params.name}</span>` +
        '<br/>' +
        '<span style="display:inline-block;margin-right:5px;height:10px;">' +
        'value' +
        `  :  ${params.value}</span>`;
        return htmlString;
    }
```

说明：通过回调函数的参数，自行制作一个 HTML 片段,data 表示数据, dataIndex 当前系列的索引, postIndex 当前数据在系列的索引
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
<br>
支持 16 进制颜色，rgba 顔色，英文字母顔色<br>
当配置渐变色属性时，渐变方向从下至上，下方为 color 颜色，上方为 gradientColor 颜色。
</api>

<api>
<name>opacity</name>
<introduce>图表透明度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`0.8`

说明：调整图表颜色的透明度

</api>

<api>
<name>text</name>
<introduce>山峰图顶部底部文本样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
text:{
fontSize:12,
fontColor:#bbbbbb||#4e4e4e,
show:true
}
```

说明：调整山峰顶部文字及底部文字的字号、颜色、是否显示

<p class='ev_expand_title'>text.fontSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`12`

<p class='ev_expand_introduce'>说明：调整山峰顶部文字及底部文字的字号

<p class='ev_expand_title'>text.fontColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`theme==='dark'?'#bbbbbb':'#4e4e4e'`

<p class='ev_expand_introduce'>说明：调整山峰顶部文字及底部文字的颜色

<p class='ev_expand_title'>text.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：调整山峰顶部文字是否显示
</api>

<api>
<name>coincide</name>
<introduce>相邻山峰图间隔</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`-100%`

说明：设置相邻山峰图之间的间隔，正值表示存在间隔，负值表示不存在间隔即存在重合

</api>

<api>
<name>yAxisName</name>
<introduce>配置y轴文本</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：设置相邻山峰图的标题

</api>

<api>
<name>axis</name>
<introduce>山峰图坐标轴显示</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`{show:true}`

说明：是否显示山峰图坐标轴

<p class='ev_expand_title'>axis.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否显示山峰图坐标轴
</api>

<api>
<name>gradientColor</name>
<introduce>线性渐变</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：设置山峰图渐变色，支持 16 进制颜色，rgba 顔色，英文字母顔色，循环取色。<br>渐变方向从下至上，下方为 color 颜色，上方为 gradientColor 颜色。

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
    }
}
```

说明：自定义 x 轴配置(将原先的 `String` 类型的 `xAxis`、`xAxisName`、`xAxisLine`、`xAxisInterval`、`xAxisFullGrid`、`xAxisLabelRotate`、`xAxisEllipsis`属性统一整合到 `Object` 类型的 `xAxis` 内部)

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
    }
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
</api>

<api>
<name>xAxisName</name>
<introduce>配置x轴文本(建议使用xAxis.name)</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：山峰图 x 轴的文本名称
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
<name>xAxisFullGrid</name>
<introduce>x轴坐标是否顶格(建议使用xAxis.fullGrid)</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：设置山峰图是否顶格到 x 轴左右两边
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

说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应
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
<name>xAxisEllipsis</name>
<introduce>x轴刻度文本过长展示方式(建议使用xAxis.ellipsis)</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`xAxisEllipsis:{overflow:'none'}`

说明：设置 x 轴刻度文本过长展示方式

<p class='ev_expand_title'>xAxisEllipsis.overflow<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`none`

<p class='ev_expand_introduce'>可选值：`truncate`(文本过长隐藏)，`break`(文本过长中文换行)，`breakAll`(文本过长中英文全部换行)，`none`(默认全部显示)

<p class='ev_expand_introduce'>说明：设置 x 轴刻度文本过长展示方式<br>
`truncate`，`break`，`breakAll`都需要在设置了xAxisEllipsis.labelWidth才会生效

<p class='ev_expand_title'>xAxisEllipsis.labelWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：设置x 轴刻度文本宽度
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
        name:'value',
        unit:'元',
        offset:0,
        nameTextStyle:{
            padding:[0,0,0,-45]
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
        offset:0,
        position:'right',
        name: 'Percent(%)',
        unit: '%'
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

<p class='ev_expand_title'>yAxis.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：自定义 y 轴相对于默认位置的偏移量

<p class='ev_expand_title'>yAxis.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：y 轴是否显示

<p class='ev_expand_title'>yAxis.labelTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`{color:theme==='dark'?#bbbbbb:#4e4e4e,fontSize:12}`

<p class='ev_expand_introduce'>说明：配置y轴刻度文本样式

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
