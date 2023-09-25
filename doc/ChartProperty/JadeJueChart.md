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
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
第一种data类型，无子级组成的玉玦图，无法生成图例
data:[
      { name: '语文', value: 70 },
      { name: '数学', value: 90 },
      { name: '英语', value: 60 },
      ...
    ],
```

```d
第二种data类型，有子级组成的玉玦图，可生成图例
 data:[
      {
        name:'英国',
        children:[
          {type:'人口',value:10},
          {type:'海洋',value:10},
          {type:'领土',value:20}
        ]
      },
      {
        name:'法国',
        children:[
          {type:'人口',value:10},
          {type:'海洋',value:20},
          {type:'领土',value:10}
        ]
      },
      {
        name:'中国',
        children:[
          {type:'人口',value:40},
          {type:'海洋',value:30},
          {type:'领土',value:30}
        ]
      },
      ...
```

说明：图表数据 ， `name` 为数据名称 ， `value` 为数据值 ， `children` 为子级集合 ， `type` 为子级名称即默认的图例名称

</api>

<api>
<name>max</name>
<introduce>自定义标定值</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：自定义标定值 ， 用于展示 `data` 中每项数据在标定值的占据比例 ； 若为第一种 data 类型 ， 一般可取 `value` 最大值 ; 若为第二种 data 类型 ， 一般可取 `children` 数组 `value` 之和的最大值 。 未定义则 `data` 中每项数据的占比为其 `value` 值与总 `value` 值的比值 。

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
<name>chartPosition</name>
<introduce>图表位置及大小</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`{center:['50%','50%'],radius:['20%','60%']}`

说明：调整玉玦图的位置及大小

<p class='ev_expand_title'>chartPosition.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['50%','50%']`

<p class='ev_expand_introduce'>说明：调整玉玦图的位置

<p class='ev_expand_title'>chartPosition.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['20%','60%']`

<p class='ev_expand_introduce'>说明：调整玉玦图的大小

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

说明：自定义图例仅支持第二种 data 类型 ； show 是否展示图例 , position 配置图例的位置 , orient 配置图例的方向

<p class='ev_expand_title'>legend.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否展示图例

<p class='ev_expand_title'>legend.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`position:{left:'center',bottom:15}`

<p class='ev_expand_introduce'>说明：图例的位置<br>`position:{top, left, right, bottom}`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String/Function</span>

<p class='ev_expand_introduce'>说明：用来自定义图例的文本显示。

<p class='ev_expand_title'>legend.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`horizontal`（水平）

<p class='ev_expand_introduce'>可选值：`horizontal`（水平） ， `vertical`（垂直）

<p class='ev_expand_introduce'>说明：图例的方向

</api>

<api>
<name>startAngle</name>
<introduce>玉玦图的起始角度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`90`

说明：玉玦图的起始角度

</api>

<api>
<name>labelAlign</name>
<introduce>玉玦图的起点与文本位置</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`right`

可选值：`left` ， `right`

说明：设置玉玦图的起点在文本的哪一侧

</api>

<api>
<name>title</name>
<introduce>中心文本配置</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
title:{
    text:'人口统计',
    subtext:'2021-5-16',
    top:'48%',
    left:'49.5%',
    textFontSize:20,
    subtextFontSize:12
    }
```

说明：玉玦图的展示标题信息

<p class='ev_expand_title'>title.text<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置主标题

<p class='ev_expand_title'>title.subtext<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置副标题

<p class='ev_expand_title'>title.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String \ Number</span>

<p class='ev_expand_introduce'>默认值：`48%`

<p class='ev_expand_introduce'>说明：设置标题垂直方向的位置<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>

<p class='ev_expand_title'>title.left<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String \ Number</span>

<p class='ev_expand_introduce'>默认值：`49.5%`

<p class='ev_expand_introduce'>说明：设置标题水平方向的位置<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>

<p class='ev_expand_title'>title.textFontSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`20`

<p class='ev_expand_introduce'>说明：主标题文字大小

<p class='ev_expand_title'>title.subtextFontSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`12`

<p class='ev_expand_introduce'>说明：副标题文字大小
</api>
