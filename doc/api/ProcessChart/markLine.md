格式：

```d
 markLine: {
    value: 80,
    color: '#09AA71',
    status：'success'
  }
```

说明: `value`表示为阈值 ， `color`表示颜色 ， `status` 表示使用status设置颜色,只在name为`'ProcessBarChart'`生效

<p class='ev_expand_title'>markLine.value<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>
<p class='ev_expand_introduce'>设置阈值

<p class='ev_expand_title'>markLine.status<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>默认值：<code>'success'</code>

<p class='ev_expand_introduce'>说明：支持四种状态色<code>'success'</code>,<code>'error'</code>,<code>'warning'</code>,<code>'subwarning'</code>

<p class='ev_expand_title'>markLine.color<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>说明：设置颜色，color的优先级比status高
