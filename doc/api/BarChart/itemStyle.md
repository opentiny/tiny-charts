默认值：`itemStyle:{barWidth:8,barGap:'60%'}`

说明：配置柱形的样式

<p class='ev_expand_title'>itemStyle.barWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：<code>8</code>

<p class='ev_expand_introduce'>说明：配置柱形的宽度

<p class='ev_expand_title'>itemStyle.barGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>60%</code>

<p class='ev_expand_introduce'>说明：配置柱形与柱形之间的间距

<p class='ev_expand_title'>itemStyle.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>格式：
```d
    color: params => {
        if (params.dataIndex % 2 == 0) {
            return "#777777";
        }
        return "#1F55B5";
    }
```

<p class='ev_expand_introduce'>说明：根据数据数组下标配置特定的柱型颜色
