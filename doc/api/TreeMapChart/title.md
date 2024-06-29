格式：

```d
title:{
    top:0,
    left:0,
    right:0,
    bottom:0,
    text:'',
    textStyle:{
      color:'#000',
      fontSize:12,
      rich:{
        富文本名称:{
          color:'#fff',
          padding:[0,8,0,0]
        }
      }
    },
    subtext:'',
    subtextStyle:{},

}
```

说明：矩形树图title标题样式设置。

<p class='ev_expand_title'>title.top | title.left | title.right | title.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Sting | Number</span>
<p class='ev_expand_introduce'>说明：配置标题的定位，可以选择'20%'相对于容器宽高的百分比，也可以选择20具体的像素值

<p class='ev_expand_title'>title.text<span class='ev_expand_required'>必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>说明：配置标题的文本，支持<code>\n</code>换行,支持<code>rich</code>富文本，详情见案例-title标题样式，如 text: `{data|合计}{value|400元}`,

<p class='ev_expand_title'>title.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>object</span>
<p class='ev_expand_introduce'>说明：配置标题的字体样式
<p class='ev_expand_introduce'>常用属性：<code>color</code> 、 <code>fontStyle</code> 、 <code>fontWeight</code>、<code>fontFamily</code>、<code>fontSize</code>

<p class='ev_expand_title'>title.subtext<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>
<p class='ev_expand_introduce'>说明：配置标题副标题文本

<p class='ev_expand_title'>title.subtextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>object</span>
<p class='ev_expand_introduce'>说明：配置标题的副标题字体样式
<p class='ev_expand_introduce'>常用属性：<code>color</code> 、 <code>fontStyle</code> 、 <code>fontWeight</code>、<code>fontFamily</code>、<code>fontSize</code>

<p class='ev_expand_title'>title.textStyle.rich<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>object</span>
<p class='ev_expand_introduce'>说明：配置标题的富文本样式
<p class='ev_expand_introduce'>常用属性：<code>color</code> 、 <code>fontStyle</code> 、 <code>fontWeight</code>、<code>fontFamily</code>、<code>fontSize</code>、<code>padding</code>(<code>padding: [3, 4, 5, 6]</code>：表示 [上, 右, 下, 左] 的边距。)
<p class='ev_expand_introduce'>案例说明：需要搭配<code>title.text</code>一起使用:
<p class='ev_expand_introduce'>title: {
<p class='ev_expand_introduce'> &nbsp;&nbsp;   text: `{data|合计配置项}{value|400个}`,
<p class='ev_expand_introduce'> &nbsp;&nbsp;   textStyle: {
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;    rich: {
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      data: {
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       color: '#888888',
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       },
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       value: {
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         color: '#888888'
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }
<p class='ev_expand_introduce'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     }
<p class='ev_expand_introduce'> &nbsp;&nbsp;  }
<p class='ev_expand_introduce'> &nbsp;&nbsp;}

<p class='ev_expand_title'>title.subtextStyle.rich<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>object</span>
<p class='ev_expand_introduce'>说明：配置副标题的富文本样式
<p class='ev_expand_introduce'>常用属性：<code>color</code> 、 <code>fontStyle</code> 、 <code>fontWeight</code>、<code>fontFamily</code>、<code>fontSize</code>、<code>padding</code>(<code>padding: [3, 4, 5, 6]</code>：表示 [上, 右, 下, 左] 的边距。)
