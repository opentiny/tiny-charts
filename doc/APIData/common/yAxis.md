格式：

```d
数组格式
yAxis: [
    {
        max:60,
        min:0,
        interval:10,
        position:'left',
        dataName:['Domestic'],
        name:'value',
        unit:'元',
        nameTextStyle:{
            padding:[0,0,0,-45]
        }
    },
    {
        max:90,
        min: 0,
        interval:15,
        position:'right',
        dataName:['Abroad'],
        name: 'kal',
        unit: '$',
        offset:45,
        nameTextStyle:{
            padding:[0,-45,0,0]
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
        position:'right',
        name: 'Percent(%)',
        unit: '%',
        minInterval:12,
        maxInterval:8
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

<p class='ev_expand_title'>yAxis.dataName<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：全部的折线数据

<p class='ev_expand_introduce'>说明：自定义哪条折线数据采用此 y 轴的属性，该属性仅在 `yAxis` 类型为 `Array` 时会生效。当有折线数据名未被 `dataName` 所包含，改折线数据样式按照 `yAxis[0]`配置

<p class='ev_expand_title'>yAxis.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：自定义 y 轴相对于默认位置的偏移量

<p class='ev_expand_title'>yAxis.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：y 轴是否显示

<p class='ev_expand_title'>yAxis.labelTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`{color:theme==='dark'?#bbbbbb:#4e4e4e,fontSize:12}`

<p class='ev_expand_introduce'>说明：配置y轴刻度文本样式

<p class='ev_expand_title'>yAxis.minInterval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置y轴最小刻度间隔

<p class='ev_expand_title'>yAxis.maxInterval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置y轴最大刻度间隔

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
