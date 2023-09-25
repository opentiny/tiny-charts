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
<introduce>图表名称</introduce>
<type>string</type>
<required>必填</required>
<defaults>无默认值</defaults>

说明：图表名称，不允许自定义<br>
横向进度图--`name: 'ProcessBarChart'`,<br>
堆叠横向进度图--`name: 'StackProcessBarChart'`,<br>

</api>

<api>
<name>padding</name>
<introduce>图表内边距</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[50,20,50,20]`

说明：图表各方向的 padding 值<br>
`padding : [top, right, bottom, left]`<br>
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
进度图
data:[
        { name:'UniEPMgr',    value:80 },
        { name:'SMLoglic',    value:65 },
        { name:'SSO',         value:45 },
        ...
]
```

说明：图表数据 ， name 为页面横向进度条名称 ， value 为页面横向进度条长度

```d
堆叠进度图
data:[
         {
        name: 'China',
        children: [
        { type: 'Game', value: 30 },
        { type: 'Move', value: 20 },
        { type: 'Animation', value: 45 },
        { type: 'Fiction', value: 60 },
        ],
    },
    {
        name: 'Mexico',
        children: [
        { type: 'Game', value: 12 },
        { type: 'Move', value: 14 },
        { type: 'Animation', value: 33 },
        { type: 'Fiction', value: 44 },
        ],
    },
    ....
]
```

说明：图表数据 ， name 为当前的系列名称 ， children 为该系列的具体数据，type 为具体数据的分类名称，value 为具体数据的值
</api>

<api>
<name>unit</name>
<introduce>进度图右侧文本单位</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：横向进度图：`%`，堆叠横向进度图：无

说明：用来控制进度图右侧的文本显示单位

</api>

<api>
<name>barWidth</name>
<introduce>进度图柱形宽度</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：横向进度图 ProcessBarChart:`8`
，堆叠横向进度图 StackProcessBarChart:`20`，
说明：用来控制进度图柱形宽度

</api>

<api>
<name>calibrationValue</name>
<introduce>进度图标定值</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：进度图：`100`，堆叠进度图：当前 data 中各项 children 的 value 总和的最大值,

说明：用于进度图展示 data 中每项数据在标定值的占据比例

</api>

<api>
<name>event</name>
<introduce>进度图图表事件</introduce>
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

说明：用于进度图设置图表的处理事件,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on">https://echarts.apache.org/zh/api.html#echartsInstance.on</a>

</api>

<api>
<name>title</name>
<introduce>进度图图表标题样式</introduce>
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

说明：用于进度图设置图表标题样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a>

</api>

<api>
<name>text</name>
<introduce>进度图图表右侧文本样式</introduce>
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

说明：用于进度图设置图表右侧文本样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a>
</api>

<api>
<name>label</name>
<introduce>堆叠进度图图表图元文本样式</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
 label:{
  color:'#191919',
  fontSize:16,
  width:50
 }

```

说明：用于堆叠进度图设置图表图元文本样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a>
</api>

<api>
<name>minWidth</name>
<introduce>进度图单项数据的最小宽度</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：用于进度图图表解决各项数据差值过大，导致部分数据显示不明显的问题。
</api>

<api>
<name>state</name>
<introduce>根据状态设置颜色</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
state:{
       error:75,
       warning:60,
       subwarning:50,
       success:20
    },

```

说明：用于根据状态显示不同柱形颜色，目前仅在 theme 为`'hwCloud-dark'`时有效，状态有 error,warning,subwarning,success 四种，颜色分别为
<span style="background:#F23030;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#F23030',
<span style="background:#FF8800;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#FF8800',
<span style="background:#F7D916;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#F7D916',
<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>'#5CB300'
</api>
