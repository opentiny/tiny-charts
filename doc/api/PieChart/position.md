替代旧属性：`chartPosition`

默认值：

```d
{
    center:['50%','45%'],
    radius:['44%','50%']
}
```

说明：调整圆盘图的位置及大小

<p class='ev_expand_title'>position.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：<code>['50%','45%']</code>

<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，<code>position.center[0]</code>为横坐标，<code>position.center[1]</code>为纵坐标。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时<code>position.center[0]</code>是相对于容器宽度，<code>position.center[1]</code>是相对于容器高度。

<p class='ev_expand_title'>position.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：<code>['44%','50%']</code>

<p class='ev_expand_introduce'>说明：调整圆盘图的n内外半径大小，<code>position.radius[0]</code>为圆盘内径，<code>position.radius[1]</code>为圆盘外径。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时<code>position.radius[0]</code>是相对于容器宽度，<code>position.radius[1]</code>是相对于容器高度。
