默认值：

```d
label:{
    show:true,
    type:'percent',
    line:true,
    distance:25
    lineColor:'#eee'
}
```

说明：图表的外侧文本相关配置<br>`show` 控制是否显示文本<br>`type` 圆盘外侧显示的文本格式<br>`line` 为展示图表与外侧文本之间的连线<br>`distance` 为图表与外侧文本之间的距离<br>`lineColor` 为图表与外侧文本之间的连线的颜色

<p class='ev_expand_title'>label.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：<code>true</code>

<p class='ev_expand_introduce'>说明：是否展示图表外侧文本

<p class='ev_expand_title'>label.type<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>name</code>

<p class='ev_expand_introduce'>可选值：<code>name</code> ， <code>value</code> ， <code>percent</code>

<p class='ev_expand_introduce'>说明：圆盘外侧显示的文本格式<br><code>name</code> 为展示数据名称<br> <code>value</code> 为展示数据的值<br><code>percent</code> 为展示百分比信息，保留两位小数。

<p class='ev_expand_title'>label.line<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：<code>true</code>

<p class='ev_expand_introduce'>说明：是否展示图表与外侧文本之间的连线

<p class='ev_expand_title'>label.distance<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：<code>25</code>

<p class='ev_expand_introduce'>说明：图表与外侧文本之间的距离

<p class='ev_expand_title'>label.labelHtml<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Function</span>

<p class='ev_expand_introduce'>说明：用来自定义label的内容，参考formatter格式

<p class='ev_expand_title'>label.lineColor<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：图表与外侧文本之间连线的颜色
