默认值：

```d
xAxisLine:{
    show:true,
    lineStyle:{
        color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
        type:'solid',
        width:2
    }
}
```

说明：设置 x 轴样式

<p class='ev_expand_title'>xAxisLine.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：x 轴是否显示

<p class='ev_expand_title'>xAxisLine.lineStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
lineStyle:{
    color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
    type:'solid',
    width:2
}
```

<p class='ev_expand_introduce'>说明：配置x轴刻度线样式
