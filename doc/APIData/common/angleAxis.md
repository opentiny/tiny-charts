格式：

```d
angleAxis:{
  splitNumber: 6,
  startAngle: 90,
  axisLine: {
    show: false,
    lineStyle: {
      color: undefined,
      width:1,
      type:'solid'
    }
  },
  splitLine: {
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
    show: true,
    fontSize: 12,
    color: undefined,
    formatter:'percent'
  },
}
```
说明：配置极坐标系-角度轴相关属性

<p class='ev_expand_title'>angleAxis.splitNumber<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>number</span>

<p class='ev_expand_introduce'>默认值：`6`
 
<p class='ev_expand_introduce'>说明：角度轴的分割段数

<p class='ev_expand_title'>angleAxis.startAngle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>number</span>

<p class='ev_expand_introduce'>默认值：`90`
 
<p class='ev_expand_introduce'>说明：角度轴的起始角度

<p class='ev_expand_title'>angleAxis.axisLine<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:false}`
 
<p class='ev_expand_introduce'>说明：角度轴轴线相关设置

<p class='ev_expand_title'>angleAxis.splitLine<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:false}`
 
<p class='ev_expand_introduce'>说明：角度轴区域中的分隔线相关设置

<p class='ev_expand_title'>angleAxis.axisTick<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:false,length:5}`
 
<p class='ev_expand_introduce'>说明：角度轴刻度线相关设置

<p class='ev_expand_title'>angleAxis.axisLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>object</span>

<p class='ev_expand_introduce'>默认值：`{show:true,fontSize:12,formatter:'percent'}`
 
<p class='ev_expand_introduce'>说明：角度轴刻度标签文本的相关设置。<br>其中`formatter`的参数可选为`percent`：刻度文本展示为百分比数据；`number`：刻度文本展示为数值数据；`回调函数/字符串模板`：'{value}单位/function(value){return value+'单位'}'，展示自定义文本