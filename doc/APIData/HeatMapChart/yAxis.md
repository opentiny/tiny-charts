格式:

```d
yAxis:{
        // 设置单位
         unit:'%',
        // 设置刻度文本间隔
        interval:29,
        // 坐标轴的位置
        position:'right',
        // 坐标轴的名称
        name: 'Number',
        // 坐标轴的名称位置调整
        nameTextStyle:{
            align: 'right',
            // 用于调整y轴标题的位置
            padding: [0, -38, 0, 0]
        },
    },
```

<p class='ev_expand_title'>yAxis.unit<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置y轴label的单位。

<p class='ev_expand_title'>yAxis.interval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number | Function</span>

<p class='ev_expand_introduce'>格式：

```css
// 当interval为2时，y轴的label会每隔2个显示
interval: 2;
```

<p class='ev_expand_introduce'>

```css
// 当interval为function时，y轴的label会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
interval: (index,value) => {
    if (index % 24 === 0) {
        return true;
    }
    if (index === 61) {
        return true;
    }
    return  false;
},
```

<p class='ev_expand_introduce'>说明：自定义 y 轴label显示，仅 type 为`CalendarHeatMapChart`时有效。

<p class='ev_expand_title'>yAxis.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`'left'`

<p class='ev_expand_introduce'>可选值：`'left','right'`

<p class='ev_expand_introduce'>说明：设置y轴的位置。

<p class='ev_expand_title'>yAxis.name<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：设置y轴label的名称,此时不用配置yAxisName属性。

<p class='ev_expand_title'>yAxis.nameTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Obiect</span>

<p class='ev_expand_introduce'>说明：设置y轴名称样式，具体属性参考https://echarts.apache.org/zh/option.html#yAxis.nameTextStyle。
