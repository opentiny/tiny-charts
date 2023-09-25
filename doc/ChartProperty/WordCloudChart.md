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
 data:[
        {
          name: 'visualMap',
          value: 122199,
        },
        {
          name: 'continuous',
          value: 10288,
        },
        {
          name: 'contoller',
          value: 620,
        },
        ...
 ]
```

说明：图表数据 ， name 为页面节点名称 ， value 与页面节点大小正相关

</api>

<api>
<name>gridSize</name>
<introduce>词云图文本间距</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`16`

说明：网格大小 ， 自定义各文本之间距离

</api>

<api>
<name>sizeRange</name>
<introduce>字体范围</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[14,60]`

说明：字体大小范围

</api>

<api>
<name>rotationRange</name>
<introduce>文字旋转范围</introduce>
<type>Array</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`[0,0]`

说明：文字旋转角度范围

</api>

<api>
<name>rotationStep</name>
<introduce>文字旋转步值</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`0`

说明：文字旋转步值 ， 未配置 `rotationRange` 时 ， `rotationStep` 值恒为 0 ； 配置 `rotationRange` 时 ， `rotationStep` 值不得为 0

</api>

<api>
<name>shape</name>
<introduce>词云图形状</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`circle`（圆形）

可选值：`circle`（圆形） , `cardioid`（心形） , `diamond`（菱形） , `triangle-forward`（前三角形） , `triangle`（三角形） , `pentagon`（五角形） , `star`（星形）

说明：配置词云图形状

</api>

<api>
<name>width</name>
<introduce>词云图宽度</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`75%`

说明：配置词云图形状宽度

</api>

<api>
<name>height</name>
<introduce>词云图高度</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`80%`

说明：配置词云图形状高度

</api>

<api>
<name>maskImage</name>
<introduce>词云图形状图片配置</introduce>
<type>String</type>
<required>非必填</required>
<defaults>无默认值</defaults>

说明：配置词云图的形状图片

</api>

<api>
<name>textColor</name>
<introduce>词云图文本颜色</introduce>
<type>Function</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：

```d
textColor: (data) => {
      return 'rgb('+ Math.round(Math.random() * 256) +','+ Math.round(Math.random() * 256) +',' + Math.round(Math.random() * 256) + ')';
    },
```

说明：自定义词云图每个文本的颜色 ； 若同时定义了属性`color` ， 则以`textColor`为准

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
