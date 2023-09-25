默认值：

```d
const xAxis_base = [
    // 上方面积区域
    {
        boundaryGap: false,
        axisLabel: {
            show: true,
            align: 'center',
            color: theme==='dark'?'#bbbbbb':'#4e4e4e',
            fontSize: 12,
            margin: 16 // x轴文本距离上方面积区域轴线的margin值
        },
    },
    // 下方面积区域
    {
        boundaryGap: false,
    }
];
```

说明：设置设置双向面积图的 x 轴样式，顺序不可颠倒，且 length 为 2。如果某个部分不需要调整，在对应位置写{}。<br>
索引为 0-----上方面积区域<br>
索引为 1-----下方面积区域

<p class='ev_expand_title'>xAxis.boundaryGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：设置双向面积图x坐标轴两边是否留白

<p class='ev_expand_title'>xAxis.axisLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：
```css
axisLabel：{
    show: true,
    align: 'center',
    color: theme==='dark'?'#bbbbbb':'#4e4e4e',
    fontSize: 12,
    margin: 16
}
```

<p class='ev_expand_introduce'>说明：设置双向面积图x坐标轴文本样式
