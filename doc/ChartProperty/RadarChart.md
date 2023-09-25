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

说明：图表主题，共有黑白两套主题

</api>

<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Object</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
data:{
        'Domestic':{
            'Equipment': 43,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 78
        },
        'Abroad':{
            'Equipment': 75,
            'VM': 55,
            'CSP': 93,
            'RD': 90,
            'Markets': 86
        }
    }
```

说明：图表的数据,可以有多组数据，但每组数据的维度名称必须一致。

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
tipHtml: (params, radarKeys, ticket, callback)=>{
        let data = params.data;
        let dataName = data.name;
        let markLine = 81;
        let marklineColor = '#f43146';
        let htmlString = '<div style="margin-bottom:4px;">' + dataName + '</div>';
        data.value.forEach((item, index) => {
            let color = (item >= markLine) ? marklineColor : params.color;
            htmlString +=  '<div style="margin-bottom:4px;">' +
                                '<span style="display:inline-block;width:8px;height:8px;margin-right:8px;border-radius:5px;background-color:' + color + ';"></span>' +
                                '<span style="display:inline-block;margin-right:8px;min-width:60px;font-size:12px">' + radarKeys[index] + '</span>' +
                                '<span style="font-size:14px">' + (item || '-') + '</span>' +
                           '</div>';
        });
        return htmlString
    }
```

说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
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
<p class='ev_expand_introduce'>说明：图表的图例位置,`left,right,top,bottom`一般取水平和垂直方向各一个,`left,right,top,bottom`取值可以写具体的数值，也可以是`center,left,right,top,middle,bittom`这样的方向词，也可以是`50%`这样的相对于各边的百分比。

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String/Function</span>

<p class='ev_expand_introduce'>说明：用来自定义图例的文本显示。

<p class='ev_expand_title'>legend.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`horizontal`
<p class='ev_expand_introduce'>可选值：`vertical, horizontal`
<p class='ev_expand_introduce'>说明：图表的图例的放置方向。

</api>

<api>
<name>radarMax</name>
<introduce>图例放置方向</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`data中的最大值`

说明:图表的图例的放置方向

</api>

<api>
<name>markLine</name>
<introduce>阈值线配置</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>无默认值</defaults>

格式：`markLine: 81`

说明:图表的阈值线

</api>

<api>
<name>chartPosition</name>
<introduce>图表位置及大小</introduce>
<type>Object</type>
<required>非必填</required>
<defaults>有默认值</defaults>

说明：chartPosition 用来控制用雷达图的位置和半径。

<p class='ev_expand_title'>chartPosition.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>默认值：`['50%','50%']`
<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。

<p class='ev_expand_title'>chartPosition.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String | Number</span>
<p class='ev_expand_introduce'>默认值：`'50%'`
<p class='ev_expand_introduce'>说明：radius 雷达图半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
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
<name>radarMark</name>
<introduce>底部坐标系刻度值显示</introduce>
<type>Boolean</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`true`

可选值:`true,false`

说明：雷达图底部坐标系是否显示刻度值。

</api>

<api>
<name>unit</name>
<introduce>单组数据雷达图的数据单位</introduce>
<type>String</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`%`

说明：控制单组数据雷达图的顶部显示数据的单位

</api>
