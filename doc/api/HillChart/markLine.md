格式：

```d
markLine:{
    top:38,
    bottom:20,
    topWholeColor:true,
    symbol:['circle'],
    symbolSize:[20,20],
    symbolRotate:0,
    symbolOffset:[0,0]
}
```

说明：山峰图中阈值线的相关配置，设置markLine.top且数据超出，山峰超出部分变色；低于markLine.bottom 的数据，山峰变色。

<p class='ev_expand_title'>markLine.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为上阈值线 

<p class='ev_expand_title'>markLine.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为下阈值线

<p class='ev_expand_title'>markLine.topWholeColor
<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：超过阈值线的数据，山峰是否整体变色(此属性只针对markLine.top设置生效)

<p class='ev_expand_title'>markLine.symbol<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span>
<span class='ev_expand_type'>String | Array</span>

<p class='ev_expand_introduce'>说明：设置阈值线端点图形标记

<p class='ev_expand_title'>markLine.symbolSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span>
<span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：设置阈值线端点图形标记的尺寸


<p class='ev_expand_title'>markLine.symbolRotate<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：设置阈值线端点图形标记的旋转角度

<p class='ev_expand_title'>markLine.symbolOffset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>说明：设置阈值线端点图形标记的偏移距离




