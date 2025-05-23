配置方式一：对象格式：

```d
markLine:{
    top:38,
    bottom:20,
    color:'red'
}
```

说明：柱状图中阈值线的相关配置

<p class='ev_expand_title'>markLine.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为上阈值线 ， <code>markLine.top</code> 必须大于 <code>MarkLine.bottom</code>

<p class='ev_expand_title'>markLine.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为下阈值线 ， <code>markLine.top</code> 必须大于 <code>MarkLine.bottom</code>

<p class='ev_expand_title'>markLine.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>#f43146</code>

<p class='ev_expand_introduce'>说明：配置阈值线颜色

<br/>
配置方式二：数组格式：

```d
markLine:[
    {
        belong: ['Domestic'], // 该阈值线归属哪一条线
        symbol:['none',''], // 端点：一条线中的阈值线仅生效第一次设置端点样式
        yAxis:35, //阈值线
        lineStyle:{ //阈值线样式
            color: 'red',
            type: 'solid' // 'solid' 'dashed' 'dotted'
        },
        label:{
            show: true,
            position: 'insideEndTop',
            formatter: 'Domestic阈值线'
        },
        pieces: { //变色区间
            gt: 25,
            lte: 35,
            color: 'red'
        }
    }
]
```

<p class='ev_expand_title'>markLine.belong<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>说明：该阈值线归属哪一条线</p>

<p class='ev_expand_title'>markLine.symbol<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String|Array</span>
<p class='ev_expand_introduce'>说明：归属同一条线的阈值线端点，只与第一次设置的端点样式有关</p>

<p class='ev_expand_title'>markLine.yAxis<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>说明：阈值</p>

<p class='ev_expand_title'>markLine.lineStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>说明：线相关样式，其他属性可参考 <a href='https://echarts.apache.org/zh/option.html#series-bar.markLine.lineStyle' target="_blank">https://echarts.apache.org/zh/option.html#series-bar.markLine.lineStyle</a></p>

<p class='ev_expand_title'>markLine.label<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>说明：文字相关样式，其他属性可参考 <a href='https://echarts.apache.org/zh/option.html#series-bar.markLine.label' target="_blank">https://echarts.apache.org/zh/option.html#series-bar.markLine.label</a></p>
