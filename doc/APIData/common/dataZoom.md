默认值：

```d
dataZoom:{
    start:0,
    end:100,
    show:false,
    position:{
        left:36,
        bottom:20
    },
    height:24
}
```

说明：设置折线图区域缩放轴是否展示及位置

<p class='ev_expand_title'>dataZoom.start<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`0`

<p class='ev_expand_introduce'>说明：区域缩放轴的数据窗口范围的起始百分比

<p class='ev_expand_title'>dataZoom.end<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`100`

<p class='ev_expand_introduce'>说明：区域缩放轴的数据窗口范围的结束百分比

<p class='ev_expand_title'>dataZoom.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：是否展示区域缩放轴

<p class='ev_expand_title'>dataZoom.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：`position:{left:36,bottom:20}`

<p class='ev_expand_introduce'>说明：<br>
自定义区域缩放轴的位置<br>
`position:{top, left, right, bottom}`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

<p class='ev_expand_title'>dataZoom.style<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>格式：
```css
 style:{
          // 背景底色
          backgroundColor: '#111',
          // 选中区域数据填充色
          selectDataColor:'#314461',
          // 未选中区域数据填充色
          unSelectDataColor:'#454749',
          // 选中区域的蒙层颜色
          middleFillerColor:'rgba(49,68,97,.5)',
          // 设置手柄样式
          handleStyle:{
            color:'red',
            borderColor:'yellow',
            shadowColor:'blue'
          }
        }
```

<p class='ev_expand_introduce'>说明：自定义区域缩放轴的相关颜色样式配置

<p class='ev_expand_title'>dataZoom.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`24`

<p class='ev_expand_introduce'>说明：设置区域缩放轴的高度
