说明：对齐 echarts 的 `title` 属性，替代旧属性`text`。无需配置位置属性，默认中心文本自动居中对齐。

格式：

```d
title:{
    show: false,
    text: " ",
    subtext: " ",
    itemGap: 16,
    textStyle: {
        color: '#191919',
        fontSize: 48,
        fontWeight: 'normal'
    },
    subtextStyle: {
        color: '#777777',
        fontSize: 20,
    },
}
```

<p class='ev_expand_title'>title.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>
<p class='ev_expand_introduce'>默认值：<code>false</code>
<p class='ev_expand_introduce'>说明：中心文本是否显示

<p class='ev_expand_title'>title.itemGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>默认值：<code>16</code>
<p class='ev_expand_introduce'>说明：主副标题之间的间隔

<p class='ev_expand_title'>title.text<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>说明：主标题文本，支持使用\n换行

<p class='ev_expand_title'>title.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：

```css
textStyle: {
        color: '#191919',
        fontSize: 48,
        fontWeight: 'normal'
    }
```
<p class='ev_expand_introduce'>说明：主标题文本的样式


<p class='ev_expand_title'>title.subtext<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>说明：副标题文本，支持使用\n换行

<p class='ev_expand_title'>title.subtextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>默认值：

```css
subtextStyle: {
        color: '#777777',
        fontSize: 20,
    }
```
<p class='ev_expand_introduce'>说明：副标题文本的样式