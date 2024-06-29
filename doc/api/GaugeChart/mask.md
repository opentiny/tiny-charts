默认值：`{show:false,hightLight:true}`

说明：外层光晕蒙层配置。

<p class='ev_expand_title'>mask.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：<code>false</code>
<p class='ev_expand_introduce'>说明：外层光晕蒙层是否展示(蒙层区域的颜色为gradientColor循环取色，透明度.1)

<p class='ev_expand_title'>mask.hightLight<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：<code>true</code>
<p class='ev_expand_introduce'>说明：外层光晕蒙层是否开启区域高亮<br>(高亮区域的颜色为gradientColor[0]，透明度1;高亮区域前面的颜色为gradientColor[0]，透明度.5;高亮区域后面的颜色为gradientColor循环取色，透明度.5)

<p class='ev_expand_title'>mask.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>说明：调整外层光晕到进度条之间的蒙层的宽度，不设置时则与lineDistance正相关。页面适配差异时需手动设置
