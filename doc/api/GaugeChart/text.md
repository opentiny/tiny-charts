默认值:显示 data 中的 value 和 name 值

说明：仪表盘中间显示的文本格式配置。

<p class='ev_expand_title'>text.offset<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Array</span>
<p class='ev_expand_introduce'>默认值：`[0, 0]`
<p class='ev_expand_introduce'>说明：text 文本相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。

<p class='ev_expand_title'>text.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Function</span>
<p class='ev_expand_introduce'>格式：
```css
formatter：(value)=>{ 
    return '{value|' + value + '}{unit|%}\n{name|Winning Percentages}'
    }
```
<p class='ev_expand_introduce'>说明：格式化文本函数，参数 value 为数据数值，返回的字符串格式： {styleName|要显示的文本}，styleName为`text.formatterStyle`中的属性名

<p class='ev_expand_title'>text.formatterStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>
<p class='ev_expand_introduce'>格式：
```css
formatterStyle:{
            value: {
                fontSize: 50,
                fontStyle:'italic',
                fontWeight: 'bolder',
                color: '#ffff00',
                textShadowColor: '#ffffff',
                textShadowBlur:1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [0, 0, 30, 0]
            },
            unit: {
                fontSize: 12,
                fontStyle:'italic',
                color: '#ffff00',
                textShadowColor: '#ffffff',
                textShadowBlur:1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [22, 0, 30, 6],
            },
            name: {
                fontSize: 14,
                color: '#ffffff',
                borderColor: '#ffffff',
                borderWidth: 1,
                borderRadius: 4,
                padding: [5, 5, 5, 5],
            }
        }
```
<p class='ev_expand_introduce'>说明：格式化文本样式，与上述 formatter 搭配使用，具体支持的样式可见：https://echarts.apache.org/zh/option.html#series-gauge.detail.rich.%3Cstyle_name%3E
