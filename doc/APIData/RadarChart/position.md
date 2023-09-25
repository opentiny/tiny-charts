说明：position 用来控制用雷达图的位置和半径。

<p class='ev_expand_title'>position.center<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>默认值：`['50%','50%']`
<p class='ev_expand_introduce'>说明：center 为中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。

<p class='ev_expand_title'>position.radius<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String | Number |Array</span>
<p class='ev_expand_introduce'>默认值：`'50%'`
<p class='ev_expand_introduce'>说明：为number时，直接指定外半径值。为string时，50%表示外半径为可视区尺寸（容器高宽中较小一项）的50%长度。为数组时，数组的第一项是内半径，第二项是外半径，每一项遵从上述 number string 的描述（数组需要同时满足内外半径两项，请勿只有一项的情况）。
