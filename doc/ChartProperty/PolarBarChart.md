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
<name>data</name>
<introduce>图表数据</introduce>
<type>Array</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
圆环图 \ 饼图
 data:[
        {value: 10,name: 'VPC'},
        {value: 8, name: 'IM' },
        {value: 7, name: 'EIP'},
        ...
    ]
```

说明：图表数据 , `value`表示为数据值 ， `name`表示为数据名称 ，

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
    orient:'horizontal',
    reverseEvent：false,
    selectedMode:true,
    icon:'circle',
    itemHeight:14,
    itemWidth:14,
    type:plain,
    width:100%,
    itemGap:30,
    formatter:(name)=>{
     return 'name'
    },
    textStyle:{
        color:'#fa2a2d'
    },
    itemGap:28
}
```

说明：自定义图例

<p class='ev_expand_title'>legend.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否展示图例

<p class='ev_expand_title'>legend.itemGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`28`

<p class='ev_expand_introduce'>说明：设置图例的间隔

<p class='ev_expand_title'>legend.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`position:{left:'center',bottom:15}`

<p class='ev_expand_introduce'>说明：图例的位置<br>legend.position : {top, left, right, bottom} 控制图例位置<br>
top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比 ， 也可以是 'top' ， 'middle' ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比 ， 也可以是 'left' ， 'center' ，   'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

<p class='ev_expand_title'>legend.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`horizontal`（水平)

<p class='ev_expand_introduce'>可选值：`horizontal`（水平） ， `vertical`（垂直）

<p class='ev_expand_introduce'>说明：图例的方向

<p class='ev_expand_title'>legend.reverseEvent<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：图例是否支持双击反选（设置为true时，500ms内连续点击图例即视为反选）;<br>图例单击，切换自己，不影响其他图例；图例双击，图例状态全部反选。

<p class='ev_expand_title'>legend.selectedMode<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：是否可以通过点击图例改变系列的显示状态

<p class='ev_expand_title'>legend.icon<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`circle`（圆形)

<p class='ev_expand_introduce'>可选值：`circle`（圆形） ， `rect`（长方形） ， `roundRect`（圆角长方形） ， `triangle`（三角形） ， `diamond`（ 菱形）

<p class='ev_expand_introduce'>说明：图例的图标 ， 若定义了 `legend.data`,则此属性失效

<p class='ev_expand_title'>legend.itemHeight<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`14`

<p class='ev_expand_introduce'>说明：图例图标的高度

<p class='ev_expand_title'>legend.itemWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`14`

<p class='ev_expand_introduce'>说明：图例图标的宽度 ， `legend.icon` 不为 `circle` 时 ， 此默认值为 25

<p class='ev_expand_title'>legend.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`30`

<p class='ev_expand_introduce'>说明：`data` 中的 `children` 图例偏移量 ， 支持：数字设置绝对位置 ； 百分比设置相对位置 ； 此属性仅在 `type='multi-circle'`生效

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>格式：
```css
formatter: (name)=>{
    let data =  {
        'VPC': 100,
        'EIP': 49,
        'IM': 90,
        'SG': 14,
    }
    return '当月用户数 ' + name + '：\\n' + data[name]
},
```

<p class='ev_expand_introduce'>说明：自定义图例文本信息

<p class='ev_expand_title'>legend.type<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`plain`（普通图例）

<p class='ev_expand_introduce'>可选值：`plain`（普通图例） ， `scroll`（可滚动翻页图例）

<p class='ev_expand_introduce'>说明：自定义图例类型 ， `plain`为普通图例 ， `scroll` 为可滚动翻页图例

<p class='ev_expand_title'>legend.pageButtonPosition<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`end`

<p class='ev_expand_introduce'>可选值：`end` ， `start`

<p class='ev_expand_introduce'>说明：自定义图例滚动翻页按钮位置 ， 此属性仅在`legend.type='scroll'`时生效

<p class='ev_expand_title'>legend.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String \ Number</span>

<p class='ev_expand_introduce'>默认值：`100%`

<p class='ev_expand_introduce'>说明：图例组件的位置 ， 支持：数字设置绝对宽度 ； 百分比设置相对宽度

<p class='ev_expand_title'>legend.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：图例组件的整体高度

<p class='ev_expand_title'>legend.itemGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`30`

<p class='ev_expand_introduce'>说明：图例之间的间隔

<p class='ev_expand_title'>legend.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>格式：
```css
textStyle: {
    fontSize: 12,
    color: '#191919',
    align: 'left',
    verticalAlign: 'top',
    padding: [4, 0, 0, 0],
    rich: {
      a: {
        fontSize: 12,
        color: '#fa2a2d',
        align: 'left',
        verticalAlign: 'top',
        padding: [4, 0, 0, 0],
      },
    },
    ...
  },
```

<p class='ev_expand_introduce'>说明：图例文本的样式配置,详细参数解释见：https://echarts.apache.org/zh/option.html#legend.textStyle

</api>

<api>
<name>position</name>
<introduce>图表位置及大小</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：

```d
{
    center:['40%','50%'],
    radius:['8%','70%']
}
```

说明：调整圆盘图的位置及大小

<p class='ev_expand_title'>chartPosition.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['40%','50%']`

<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，`chartPosition.center[0]`为横坐标，`chartPosition.center[1]`为纵坐标。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时`chartPosition.center[0]`是相对于容器宽度，`chartPosition.center[1]`是相对于容器高度。

<p class='ev_expand_title'>chartPosition.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['8%','70%']`

<p class='ev_expand_introduce'>说明：调整圆盘图的n内外半径大小，`chartPosition.radius[0]`为圆盘内径，`chartPosition.radius[1]`为圆盘外径。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时`chartPosition.radius[0]`是相对于容器宽度，`chartPosition.radius[1]`是相对于容器高度。
</api>
