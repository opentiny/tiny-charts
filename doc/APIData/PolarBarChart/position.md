默认值：

```d
{
    center:['50%','50%'],
    radius:['8%','70%']
}
```

说明：调整圆盘图的位置及大小

<p class='ev_expand_title'>position.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['50%','50%']`

<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，`position.center[0]`为横坐标，`position.center[1]`为纵坐标。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时`position.center[0]`是相对于容器宽度，`position.center[1]`是相对于容器高度。

<p class='ev_expand_title'>position.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>默认值：`['8%','70%']`

<p class='ev_expand_introduce'>说明：调整圆盘图的n内外半径大小，`position.radius[0]`为圆盘内径，`position.radius[1]`为圆盘外径。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时`position.radius[0]`是相对于容器宽度，`position.radius[1]`是相对于容器高度。
