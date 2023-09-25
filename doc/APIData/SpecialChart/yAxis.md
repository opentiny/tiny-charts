默认值：

```d
const yAxis_base = [
    // 上方面积区域
    {
        axisLabel: {
            show: true,
            color: theme==='dark'?'#bbbbbb':'#4e4e4e',
            fontSize: 12
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: color: theme==='dark'?'rgba(238,238,238,.1)':'#eeeeee',
                width: 2
            }
        }
    },
    // 下方面积区域
    {
        inverse: true,// y轴反转
        axisLabel: {
            show: true,
            color: theme==='dark'?'#bbbbbb':'#4e4e4e',
            fontSize: 12
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: color: theme==='dark'?'rgba(238,238,238,.1)':'#eeeeee',
                width: 2
            }
        }
    }
];
```

说明：设置设置双向面积图的 y 轴样式，顺序不可颠倒，且 length 为 2。如果某个部分不需要调整，在对应位置写{}。<br>
索引为 0-----上方面积区域<br>
索引为 1-----下方面积区域

<p class='ev_expand_title'>yAXis.axisLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：
```css
axisLabel: {
    show: true,
    color: theme==='dark'?'#bbbbbb':'#4e4e4e',
    fontSize: 12
},
```

<p class='ev_expand_introduce'>说明：设置双向面积图y坐标轴文本样式

<p class='ev_expand_title'>yAXis.splitLine<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：
```css
splitLine: {
    show: true,
    lineStyle: {
        color: color: theme==='dark'?'rgba(238,238,238,.1)':'#eeeeee',
        width: 2
    }
}
```

<p class='ev_expand_introduce'>说明：设置双向面积图y坐标轴轴线样式

<p class='ev_expand_title'>yAXis.inverse<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：设置双向面积图y坐标轴反转
