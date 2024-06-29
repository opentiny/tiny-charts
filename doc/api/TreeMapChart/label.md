格式：

```d
label:{
    color:'red',
    fontSize:16,
    fontStyle:'italic',
    overflow:'break',
    formatter:'{a}/{b}/{c}'
}
```

说明：矩形树图label标签样式设置。

label放在data同一层级，本系列全部标签样式的统一设置。

label放在data的每个节点中，表示每个节点的特定设置。

<p class='ev_expand_title'>label.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Color</span>
<p class='ev_expand_introduce'>说明：配置标签文本的颜色值

<p class='ev_expand_title'>label.fontSize<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number | String</span>
<p class='ev_expand_introduce'>默认值：<code>14</code>
<p class='ev_expand_introduce'>说明：配置标签文本的字体大小

<p class='ev_expand_title'>label.fontStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：<code>normal</code>
<p class='ev_expand_introduce'>说明：配置标签文本的字体风格
<p class='ev_expand_introduce'>可选值：<code>normal</code> 、 <code>normal</code> 、 <code>oblique</code>

<p class='ev_expand_title'>label.overflow<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>break</code>
<p class='ev_expand_introduce'>说明：配置标签文本超出宽度是否截断或者换行
<p class='ev_expand_introduce'>可选值： <code>none</code>全部显示 、<code>break</code>换行 、 <code>breakAll</code>换行，跟<code>break</code>不同的是，在英语等拉丁文中，<code>breakAll</code>还会强制单词内换行

<p class='ev_expand_title'>label.ellipsis<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'><code>overflow</code>为<code>truncate</code>截断，并在末尾显示<code>ellipsis</code>配置的文本，默认为... 、

<p class='ev_expand_title'>label.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String | Function</span>

<p class='ev_expand_introduce'>说明：配置标签文本配置标签文本
<p class='ev_expand_introduce'>String示例：
<p class='ev_expand_introduce'><code>formatter: '{b}: {@c}'</code>
<p class='ev_expand_introduce'>字符串模板 模板变量有：
<p class='ev_expand_introduce'>{a}：系列名。
<p class='ev_expand_introduce'>{b}：数据名。
<p class='ev_expand_introduce'>{c}：数据值。

<p class='ev_expand_introduce'>Function示例：

<p class='ev_expand_introduce'><code>formatter: (param)=>{</code>
<p class='ev_expand_introduce'>  <code>return param.data.name</code>
<p class='ev_expand_introduce'><code>}</code>
<p class='ev_expand_introduce'>返回数据源单个数据集，自定义显示label标签内容