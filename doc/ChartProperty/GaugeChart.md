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

可选值： `light , dark`

说明：图表主题，共有黑白两套主题

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
<required>非必填</required>
<defaults>有默认值</defaults>

格式:`[value:90, name:'Utilization rate']`

说明：图表数据，value 为仪表盘的刻度,name 为数据名称。

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
          let htmlString =
            '<div>' +
                '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + params.color + ';">' +
                '</span>' +
                '<span style="margin-left:5px;color:#ffffff">' +
                    '<span style="display:inline-block;min-width:110px;">' + params.name+ '</span>' +
                    '<span style="font-weight:bold">' + params.value + '%</span>' +
                    '<span style="color:gray"> out </span>' +
                    '<span style="color:red">' + (100 - params.value) + '%</span>' +
                '</span>' +
            '</div>';
        return htmlString
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
</api>

<api>
<name>pointer</name>
<introduce>刻度指针是否显示</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`false`

可选值：`true, false`

说明：仪表盘的刻度指针是否显示

</api>

<api>
<name>splitColor</name>
<introduce>配置分割区间及颜色</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

格式:

```d
[
    [0.25, '#0d9458'],
    [0.5 , '#eeba18'],
    [0.75, '#ec6f1a'],
    [1 ,   '#f43146']
]
```

默认值：`'#1f55b5'`

说明：仪表盘的分割颜色，`splitColor[i][0]` 的值代表整根轴线的百分比，应在 0 到 1 之间, `splitColor[i][1]` 是对应的颜色

</api>

<api>
<name>min</name>
<introduce>仪表盘最小刻度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`0`

说明：仪表盘的最小值

</api>

<api>
<name>max</name>
<introduce>仪表盘最大刻度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`100`

说明：仪表盘的最大值

</api>

<api>
<name>startAngle</name>
<introduce>仪表盘起始角度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`225`

说明：仪表盘起始角度。圆心正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度

</api>

<api>
<name>endAngle</name>
<introduce>仪表盘结束角度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`-45`

说明：仪表盘结束角度。圆心正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度

</api>

<api>
<name>splitNumber</name>
<introduce>刻度线数量配置</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`4`

说明：整个仪表盘被分成的份数，splitNumber = n 时表示被分成了 n 份，有 n+1 条刻度线

</api>

<api>
<name>chartPosition</name>
<introduce>图表位置及大小</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：chartPosition 用来控制仪表盘的位置和半径。

<p class='ev_expand_title'>chartPosition.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>默认值：`['50%','50%']`
<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，`chartPosition.center[0]`为横坐标，`chartPosition.center[1]`为纵坐标。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时`chartPosition.center[0]`是相对于容器宽度，`chartPosition.center[1]`是相对于容器高度。

<p class='ev_expand_title'>chartPosition.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String | Number</span>
<p class='ev_expand_introduce'>默认值：`'70%'`
<p class='ev_expand_introduce'>说明：radius 仪表盘半径，可以是相对于容器`高宽中较小的一项`的`一半`的百分比，也可以是绝对的数值。

</api>

<api>
<name>text</name>
<introduce>中心文本配置</introduce>
<type>object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值:显示 data 中的 value 和 name 值

说明：仪表盘中间显示的文本格式配置。

<p class='ev_expand_title'>text.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>默认值：`[0, 0]`
<p class='ev_expand_introduce'>说明：text 文本相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。

<p class='ev_expand_title'>text.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Function</span>
<p class='ev_expand_introduce'>格式：
```css
formatter：(value)=>{ 
    return '{value|' + value + '}{unit|%}\n{name|Winning Percentages}'
    }
```
<p class='ev_expand_introduce'>说明：格式化文本函数，参数 value 为数据数值，返回的字符串格式： {styleName|要显示的文本}，styleName为`text.formatterStyle`中的属性名

<p class='ev_expand_title'>text.formatterStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>格式：
```css
formatterStyle:{
            value: {
                fontSize: 50,
                fontStyle:'italic',
                fontWeight: 'bolder',
                color: '#ffff00',
                textShadowColor: '#ffffff',
                textShadowBlur:1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [0, 0, 30, 0]
            },
            unit: {
                fontSize: 12,
                fontStyle:'italic',
                color: '#ffff00',
                textShadowColor: '#ffffff',
                textShadowBlur:1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [22, 0, 30, 6],
            },
            name: {
                fontSize: 14,
                color: '#ffffff',
                borderColor: '#ffffff',
                borderWidth: 1,
                borderRadius: 4,
                padding: [5, 5, 5, 5],
            }
        }
```
<p class='ev_expand_introduce'>说明：格式化文本样式，与上述 formatter 搭配使用，具体支持的样式可见：https://echarts.apache.org/zh/option.html#series-gauge.detail.rich.%3Cstyle_name%3E

</api>

<api>
<name>markLine</name>
<introduce>阈值线配置</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：设置阈值线，超出阈值时，进度条会变成告警色

</api>

<api>
<name>gradientColor</name>
<introduce>线性渐变</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：[
<span style="background:#5990fd;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#5990fd'，
<span style="background:#0d9458;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#0d9458'，
<span style="background:#eeba18;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#eeba18'，
<span style="background:#ec6f1a;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#ec6f1a'，
<span style="background:#f43146;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>
'#f43146']

说明：gradientColor 表示从仪表盘左到右的渐变色,gradientColor.length == 1 时也可以表示单色。注意：splitColor 的优先级高于 gradientColor

</api>

<api>
<name>splitLine</name>
<introduce>刻度线及文本配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：控制刻度线及刻度文本是否显示

<p class='ev_expand_title'>splitLine.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`true`
<p class='ev_expand_introduce'>可选值：`true, false`
<p class='ev_expand_introduce'>说明：控制刻度线及刻度文本是否显示

</api>

<api>
<name>itemStyle</name>
<introduce>进度条样式配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：自定义进度条的宽度

<p class='ev_expand_title'>itemStyle.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`10`
<p class='ev_expand_introduce'>说明：自定义进度条的宽度

<p class='ev_expand_title'>itemStyle.lineStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：`{width:4,color:#4e4e4e||#bbbbbb,length:10}`
<p class='ev_expand_introduce'>说明：自定义多色盘进度条的间距（或者刻度线）样式，颜色及宽度长度。

<p class='ev_expand_title'>itemStyle.outerGauge<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：`show:true`
<p class='ev_expand_introduce'>说明：自定义多色盘进度条外层光晕是否显示

</api>

<api>
<name>axisLabelStyle</name>
<introduce>刻度线文本样式配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：用于调整刻度文本的样式。

<p class='ev_expand_title'>axisLabelStyle.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`theme===dark 为 #bbbbbb , theme===white 为 #4e4e4e`
<p class='ev_expand_introduce'>说明：调整刻度文本的字体颜色

<p class='ev_expand_title'>axisLabelStyle.fontSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`14`
<p class='ev_expand_introduce'>说明：调整刻度文本的字体大小

<p class='ev_expand_title'>axisLabelStyle.Weight<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`400`
<p class='ev_expand_introduce'>说明：调整刻度文本的字体宽度

<p class='ev_expand_title'>axisLabelStyle.distance<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`16`
<p class='ev_expand_introduce'>说明：调整刻度文本到刻度线的距离

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
<name>pointerStyle</name>
<introduce>调整指针样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
pointerStyle:{
    width:16;
    length:'10%'
    pointerDistance:'-108%'
    lineDistance:'5%'
}
```

说明：用于调整指针样式。

<p class='ev_expand_title'>pointerStyle.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`16`
<p class='ev_expand_introduce'>说明：调整指针宽度

<p class='ev_expand_title'>pointerStyle.length<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`10%`
<p class='ev_expand_introduce'>说明：调整指针长度

<p class='ev_expand_title'>pointerStyle.pointerDistance<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`-108%`
<p class='ev_expand_introduce'>说明：调整指针距离中心距离

<p class='ev_expand_title'>pointerStyle.lineDistance<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`5%`
<p class='ev_expand_introduce'>说明：调整外层光晕距离进度条距离

</api>

<api>
<name>mask</name>
<introduce>外层光晕蒙层配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`{show:false,hightLight:true}`

说明：外层光晕蒙层配置。

<p class='ev_expand_title'>mask.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>说明：外层光晕蒙层是否展示(蒙层区域的颜色为gradientColor循环取色，透明度.1)

<p class='ev_expand_title'>mask.hightLight<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`true`
<p class='ev_expand_introduce'>说明：外层光晕蒙层是否开启区域高亮<br>(高亮区域的颜色为gradientColor[0]，透明度1;高亮区域前面的颜色为gradientColor[0]，透明度.5;高亮区域后面的颜色为gradientColor循环取色，透明度.5)

<p class='ev_expand_title'>mask.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>说明：调整外层光晕到进度条之间的蒙层的宽度，不设置时则与lineDistance正相关。页面适配差异时需手动设置

</api>

<api>
<name>orbitalColor</name>
<introduce>仪表盘的轨道颜色</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：用来控制仪表盘的轨道颜色

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
