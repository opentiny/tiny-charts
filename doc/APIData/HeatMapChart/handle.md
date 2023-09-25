说明：设置`CalendarHeatMapChart`图表的手柄，不传不显示手柄，仅 type 为`CalendarHeatMapChart`时有效。

<p class='ev_expand_title'>handle.inverse<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>可选值：`true, false`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄两端文本是否反转显示

<p class='ev_expand_title'>handle.text<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>格式:[A,B]
<p class='ev_expand_introduce'>默认值：data 第三个属性值的最大值和最小值
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄两端文本。

<p class='ev_expand_title'>handle.calculable<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：`false`
<p class='ev_expand_introduce'>可选值：`true, false`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄滑块是否显示。

<p class='ev_expand_title'>handle.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：`vertical`
<p class='ev_expand_introduce'>可选值：`vertical,horizontal`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄显示方向。`vertical`表示垂直，`horizontal`表示水平。

<p class='ev_expand_title'>handle.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`20`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄宽度。

<p class='ev_expand_title'>handle.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：`400`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄高度。

<p class='ev_expand_title'>handle.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：`{right:'4%', bottom:'6%'}`
<p class='ev_expand_introduce'>可选值：`top, left, right, bottom`
<p class='ev_expand_introduce'>说明：设置`CalendarHeatMapChart`图表的手柄位置,top 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,left 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比, right 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,bottom 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比。
