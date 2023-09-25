默认值：

```d
const baseGrid = [
    // 上方面积区域
    {
        top: '6%',
        left: 28,
        right: 16,
        height: '42%',
        containLabel: false // grid 区域是否包含坐标轴的刻度标签
    },
    // 下方面积区域
    {
        bottom: '6%',
        left: 28,
        right: 16,
        height: '42%',
        containLabel: false
    },
];

```

说明：设置设置双向面积图的位置、宽高样式，顺序不可颠倒，且 length 为 2。如果某个部分不需要调整，在对应位置写{}。grid 属性不具备自适应能力，使用者需要根据业务场景容器大小，自定义 grid 属性<br>
索引为 0-----上方面积区域<br>
索引为 1-----下方面积区域

<p class='ev_expand_title'>grid.top<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String|Number</span>

<p class='ev_expand_introduce'>默认值：`由索引决定`

<p class='ev_expand_introduce'>说明：设置图表离容器上侧的距离

<p class='ev_expand_title'>grid.bottom<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String|Number</span>

<p class='ev_expand_introduce'>默认值：`由索引决定`

<p class='ev_expand_introduce'>说明：设置图表离容器下侧的距离

<p class='ev_expand_title'>grid.left<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String|Number</span>

<p class='ev_expand_introduce'>默认值：`由索引决定`

<p class='ev_expand_introduce'>说明：设置图表离容器左侧的距离

<p class='ev_expand_title'>grid.right<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String|Number</span>

<p class='ev_expand_introduce'>默认值：`由索引决定`

<p class='ev_expand_introduce'>说明：设置图表离容器右侧的距离

<p class='ev_expand_title'>grid.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String|Number</span>

<p class='ev_expand_introduce'>默认值：`由索引决定`

<p class='ev_expand_introduce'>说明：设置图表区域高度

<p class='ev_expand_title'>grid.containLabel<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：设置图表区域是否包含坐标轴的刻度标签
