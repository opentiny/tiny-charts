格式

```d
radiusAxis:{
  axisLine: {
    show: false,
    lineStyle: {
      color: undefined,
      width:1,
      type:'solid'
    }
  },
  axisTick: {
    show: false,
    length:5,
    lineStyle: {
      color: undefined,
      width:1,
      type:'solid'
    }
  },
  axisLabel: {
    show:true,
    color: undefined,
    fontSize: 12,
    align: 'right',
    margin: 20,
    width:100, // 设置文本的显示宽度
    overflow:'truncate' // 文本溢出，截断并显示省略号
  },
}
```
说明：配置极坐标系-径向轴相关属性

<p class='ev_expand_title'>radiusAxis.axisLine<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:false}`
 
<p class='ev_expand_introduce'>说明：径向轴轴线相关设置

<p class='ev_expand_title'>radiusAxis.axisTick<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:false,length:5}`
 
<p class='ev_expand_introduce'>说明：径向轴刻度线相关设置

<p class='ev_expand_title'>radiusAxis.axisLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:true,fontSize:12,align:'right',margin:20,overflow:'truncate'}`
 
<p class='ev_expand_introduce'>说明：径向轴刻度标签文本的相关设置。