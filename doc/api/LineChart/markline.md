格式：

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

<p class='ev_expand_introduce'>说明：配置下阈值线的文本位置
