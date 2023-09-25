替代旧属性：`chartPosition`

说明：position 用来控制仪表盘的位置和半径。

<p class='ev_expand_title'>position.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>默认值：`['50%','50%']`
<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，`position.center[0]`为横坐标，`position.center[1]`为纵坐标。
<p class='ev_expand_introduce'>支持设置成百分比和数值，设置成百分比时`position.center[0]`是相对于容器宽度，`position.center[1]`是相对于容器高度。

<p class='ev_expand_title'>position.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String | Number</span>
<p class='ev_expand_introduce'>默认值：`'70%'`
<p class='ev_expand_introduce'>说明：radius 仪表盘半径，可以是相对于容器`高宽中较小的一项`的`一半`的百分比，也可以是绝对的数值。
