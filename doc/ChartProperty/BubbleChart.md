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
<name>padding</name>
<introduce>图表内边距值</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[50, 20, 50, 20]`

说明：调整图表的 padding 值

</api>

<api>
<name>legend</name>
<introduce>图例配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明:图表的图例配置

<p class='ev_expand_title'>legend.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>可选值：`true, false`
<p class='ev_expand_introduce'>说明：图表的图例配置。

<p class='ev_expand_title'>legend.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：`{left: 'center',bottom: 12}`
<p class='ev_expand_introduce'>可选值：`left,right,top,bottom`
<p class='ev_expand_introduce'>说明：图表的图例位置,`left,right,top,bottom`一般取水平和垂直方向各一个,`left,right,top,bottom`取值可以写具体的数值，也可以是`center,left,right,top,middle,bottom`这样的方向词，也可以是`50%`这样的相对于各边的百分比。

<p class='ev_expand_title'>legend.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`horizontal`
<p class='ev_expand_introduce'>可选值：`vertical, horizontal`
<p class='ev_expand_introduce'>说明：图表的图例的放置方向。

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String/Function</span>

<p class='ev_expand_introduce'>说明：用来自定义图例的文本显示。

</api>

<api>
<name>bubbleSize</name>
<introduce>气泡大小范围</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[10, 70]`

说明：气泡大小范围,气泡半径维度决定了气泡的大小,bubbleSize 决定了气泡大下的上下限

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
        let seriesName = params.seriesName;
        let color = params.color;
        let data = params.data;
        let [x, y, radius, name, ...others] = data;
        let htmlString = '<div style="margin-bottom:4px;">' + seriesName + '</div>';
        htmlString +=
            '<div>' +
                '<span style="display:inline-block;margin-right:8px;min-width:60px;">季度：</span>' +
                '<span>' + x + '</span>' +
            '</div>';
        htmlString +=
            '<div>' +
                '<span style="display:inline-block;margin-right:8px;min-width:60px;">销售额： </span>' +
                '<span>'+ y +' 辆</span>'+
            '</div>';
        htmlString +=
            '<div>' +
                '<span style="display:inline-block;margin-right:8px;min-width:60px;">毛利润：</span>' +
                '<span>'+ radius + ' 万元</span>' +
            '</div>';
        return htmlString
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>

<api>
<name>yAxisName</name>
<introduce>配置y轴文本</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明： y 轴的名称

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
<type>Object</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
/*{
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    ...
* }
*/
data:{
        '1990': [
            [28604, 77, 17096869, 'Australia', 1990],
            [31163, 77.4, 27662440, 'Canada', 1990],
            [60001, 68, 1154605773, 'China', 1990],
            ...
        ],
        '2000': [
            [19349, 69.6, 147568552, 'Russia', 2000],
            [10670, 67.3, 53994605, 'Turkey', 2000],
            [26424, 75.7, 57110117, 'United Kingdom', 2000],
            ...
        ],
        '2015': [
            [44056, 81.8, 23968973, 'Australia', 2015],
            [43294, 81.7, 35939927, 'Canada', 2015],
            [13334, 76.9, 1376048943, 'China', 2015],
            ...
        ],
        ...
    },


```

说明： 数据(data 属性)顺序必须严格按照指定的维度来摆放，data 里面可以配置多个数组来实现多组数据

</api>

<api>
<name>trendLineConfig</name>
<introduce>配置趋势线</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明： 显示图表的趋势线。注意！在使用趋势线功能时，需要额外 `npm install echarts-stat -d `,`trendLineConfig` 为趋势线配置，开发人员可根据当前数据的形态，选择合理的趋势线函数,详细的配置文档可见 https://echarts.apache.org/handbook/zh/concepts/data-transform/#使用外部的数据转换器

</api>

<api>
<name>markLine</name>
<introduce>阈值线配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：`{x: 50000, y: 70}`

说明： 显示图表的阈值线。注意！在气泡图下，在使用阈值线的同时，需要手动配置数据分组，数据颜色

</api>

<api>
<name>xAxis</name>
<introduce>配置x轴坐标数据</introduce>
<type> Object</type>
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
    fullGrid:true,
    labelRotate:45,
}
```

说明：自定义 x 轴配置(将`xAxisName`、`xAxisLine`、`xAxisInterval`、`xAxisFullGrid`、`xAxisLabelRotate`属性统一整合到 `Object` 类型的 `xAxis` 内部)

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

<p class='ev_expand_title'>xAxis.fullGrid<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>说明：设置图表是否顶格到 x 轴左右两边(`xAxis.fullGrid`即`xAxisFullGrid`)

<p class='ev_expand_title'>xAxis.labelRotate<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度(`xAxis.labelRotate`即`xAxisLabelRotate`)

</api>

<api>
<name>xAxisName</name>
<introduce>配置x轴文本(建议使用xAxis.name)</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：气泡图 x 轴的文本名称
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

说明：设置 x 轴样式

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
<name>xAxisFullGrid</name>
<introduce>x轴坐标是否顶格(建议使用xAxis.fullGrid)</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

说明：设置气泡图是否顶格到 x 轴左右两边
</api>
