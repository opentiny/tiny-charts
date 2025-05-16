配置方式一：对象格式：

```d
markLine:{
    top:38,
    topLabel:'上阈值线',
    topColor:'red',
    topPosition:'start',
    bottom:20，
    bottomLabel:'下阈值线',
    bottomColor:'blue',
    bottomPosition:'end'
}
```

说明：折线图中阈值线的相关配置

<p class='ev_expand_title'>markLine.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为上阈值线 ， <code>markLine.top</code>必须大于 <code>MarkLine.bottom</code>

<p class='ev_expand_title'>markLine.topLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：配置上阈值线的文本信息

<p class='ev_expand_title'>markLine.topColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>red</code>

<p class='ev_expand_introduce'>说明：配置上阈值线的文本颜色

<p class='ev_expand_title'>markLine.topPosition<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>insideEndTop</code>（结束位置上方）

<p class='ev_expand_introduce'>可选值：<code>insideEndTop</code>（结束位置上方） 、 <code>insideStartTop</code>（开始位置上方） 、 <code>insideEndBottom</code>（结束位置下方） 、 <code>insideStartBottom</code>（开始位置上方） 、 <code>start</code>（开始位置） 、 <code>end</code>（结束位置）

<p class='ev_expand_introduce'>说明：配置上阈值线的文本位置

<p class='ev_expand_title'>markLine.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>说明：配置将哪根 y 轴刻度线做为下阈值线 ， <code>markLine.top</code> 必须大于 <code>MarkLine.bottom</code>

<p class='ev_expand_title'>markLine.bottomLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：配置下阈值线的文本信息

<p class='ev_expand_title'>markLine.bottomColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>red</code>

<p class='ev_expand_introduce'>说明：配置下阈值线的文本颜色

<p class='ev_expand_title'>markLine.bottomPosition<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>insideEndTop</code>

<p class='ev_expand_introduce'>可选值：<code>insideEndTop</code>（结束位置上方） 、 <code>insideStartTop</code>（开始位置上方） 、 <code>insideEndBottom</code>（结束位置下方） 、 <code>insideStartBottom</code>（开始位置上方） 、 <code>start</code>（开始位置） 、 <code>end</code>（结束位置）

<p class='ev_expand_introduce'>说明：配置下阈值线的文本位置</p>
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
<p class='ev_expand_introduce'>说明：线相关样式，其他属性可参考 <a href='https://echarts.apache.org/zh/option.html#series-line.markLine.lineStyle' target="_blank">https://echarts.apache.org/zh/option.html#series-line.markLine.lineStyle</a></p>

<p class='ev_expand_title'>markLine.label<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>说明：文字相关样式，其他属性可参考 <a href='https://echarts.apache.org/zh/option.html#series-line.markLine.label' target="_blank">https://echarts.apache.org/zh/option.html#series-line.markLine.label</a></p>

<p class='ev_expand_title'>markLine.pieces<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array|Object</span>
<p class='ev_expand_introduce'>说明：变色区间设置，可使用数组形式设置多个变色区间。 其他属性配置可参考 <a href=https://echarts.apache.org/zh/option.html#visualMap-piecewise.pieces target="_blank">https://echarts.apache.org/zh/option.html#visualMap-piecewise.pieces</a> </p>
<p class='ev_expand_introduce'><code>注意：</code>变色区间需结合实际场景设置，设置冲突可能导致变色失效。</p>