默认值：图表数据`data`数组中`data[0]`对象的第一个 key 值

格式：

```d
String类型
xAxis:'Month'
```

说明：设置图表数据中哪个 key 值作为折线图的横坐标数据

格式：

```d
Object类型
xAxis:{
    data:'Month'，
    name:'Utils',
    line:{
        show:true,
        lineStyle:{
            color:'red',
            type:'dashed',
            width:2
        }
    },
    interval:2,
    fullGrid:true,
    labelRotate:45,
    ellipsis:{
        overflow:'truncate',
        labelWidth:20
    },
    nameLocation:'end',
    nameTextStyle:{
        fontSize:12,
        color:#4e4e4e
    }
}
```

说明：自定义 x 轴配置(将原先的 `String` 类型的 `xAxis`、`xAxisName`、`xAxisLine`、`xAxisInterval`、`xAxisFullGrid`、`xAxisLabelRotate`、`xAxisEllipsis` 属性统一整合到 `Object` 类型的 `xAxis` 内部)

<p class='ev_expand_title'>xAxis.data<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>
 
<p class='ev_expand_introduce'>说明：设置图表数据中哪个 key 值作为折线图的横坐标数据(<code>xAxis.data</code>即<code>String</code>类型的<code>xAxis</code>值)

<p class='ev_expand_title'>xAxis.name<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>说明：配置x轴文本名称（<code>xAxis.name</code>即<code>xAxisName</code>）

<p class='ev_expand_title'>xAxis.line<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
xAxisLine:{
    show:true,
    lineStyle:{
        color:theme==='dark'?rgba(238,238,238,.1):rgba(25,25,25,.1),
        type:'solid',
        width:2
    },
    text:{
        color:theme==='dark'?#bbbbbb:#4e4e4e
    }
}
```
<p class='ev_expand_introduce'>说明：设置 x 轴样式(<code>xAxis.line</code>即<code>xAxisLine</code>)

<p class='ev_expand_title'>xAxis.interval<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number | Function</span>

<p class='ev_expand_introduce'>默认值：<code>0</code>

<p class='ev_expand_introduce'>格式：

```css
// 当xAxisInterval为2时，x轴的label会每隔2个显示
xAxisInterval: 2
```

```css
// 当xAxisInterval为function时，x轴的label会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
xAxisInterval: (index,value) => {
    if (index % 24 === 0) {
        return true;
    }
    if (index === 61) {
        return true;
    }
    return  false;
},
```

<p class='ev_expand_introduce'>说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应（<code>xAxis.interval</code>即<code>xAxisInterval</code>）

<p class='ev_expand_title'>xAxis.fullGrid<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：<code>false</code>
<p class='ev_expand_introduce'>说明：设置图表是否顶格到 x 轴左右两边(<code>xAxis.fullGrid</code>即<code>xAxisFullGrid</code>)

<p class='ev_expand_title'>xAxis.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：<code>true</code>
<p class='ev_expand_introduce'>说明：设置x坐标轴是否显示

<p class='ev_expand_title'>xAxis.labelRotate<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：<code>false</code>
<p class='ev_expand_introduce'>说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度(<code>xAxis.labelRotate</code>即<code>xAxisLabelRotate</code>)

<p class='ev_expand_title'>xAxis.ellipsis<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：<code>xAxis.ellipsis:{overflow:'none'}</code>
<p class='ev_expand_introduce'>格式：

```css
xAxis.ellipsis:{
    overflow:'truncate',
    width:20
}
```
<p class='ev_expand_introduce'>说明：设置 x 轴刻度文本过长展示方式(<code>xAxis.ellipsis</code>即<code>xAxisEllipsis</code>)

<p class='ev_expand_title'>xAxis.nameLocation<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：<code>end</code>
<p class='ev_expand_introduce'>可选值：<code>end</code>、<code>center||middle</code>、<code>start</code>
<p class='ev_expand_introduce'>说明：设置x轴文本位置

<p class='ev_expand_title'>xAxis.nameTextStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：{fontSize:12,color:'#4e4e4e'}
<p class='ev_expand_introduce'>说明：设置x轴文本样式
