默认值：

```d
legend:{
    show:false,
    position:{
        left:'center',
        bottom:15
    },
    itemGap:28,
    orient:'horizontal',
    reverseEvent：false,
    selectedMode:true,
    icon:'circle',
    itemHeight:14,
    itemWeight:14,
    textStyle:{
        fontSize:12,
        padding:[4,0,0,0]，
        color:'#4e4e4e',
        overflow:'none',
   }
}
```

说明：自定义图例

<p class='ev_expand_title'>legend.show<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：图例是否显示

<p class='ev_expand_title'>legend.itemGap<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>默认值：`28`

<p class='ev_expand_introduce'>说明：设置图例的间隔

<p class='ev_expand_title'>legend.width<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：图例组件的整体宽度

<p class='ev_expand_title'>legend.height<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Number</span>

<p class='ev_expand_introduce'>说明：图例组件的整体高度

<p class='ev_expand_title'>legend.position<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
position:{
    left:'center',
    bottom:15
}
```

<p class='ev_expand_introduce'>说明：<br>
自定义图例的位置<br>
`position : {top, left, right, bottom}`<br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比

<p class='ev_expand_title'>legend.orient<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`horizontal`(水平)

<p class='ev_expand_introduce'>可选值：`horizontal`（水平） 、 `vertical`（垂直）

<p class='ev_expand_introduce'>说明：图例的方向

<p class='ev_expand_title'>legend.reverseEvent<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`false`

<p class='ev_expand_introduce'>说明：图例是否支持双击反选（设置为true时，500ms内连续点击图例即视为反选）;<br>图例单击，切换自己，不影响其他图例；图例双击，图例状态全部反选。

<p class='ev_expand_title'>legend.selectedMode<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Boolean</span>

<p class='ev_expand_introduce'>默认值：`true`

<p class='ev_expand_introduce'>说明：是否可以通过点击图例改变系列的显示状态

<p class='ev_expand_title'>legend.icon<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>String</span>

<p class='ev_expand_introduce'>默认值：`circle`（圆形）

<p class='ev_expand_introduce'>可选值：`circle`（圆形） 、`rect`（长方形） 、 `roundRect`（圆角长方形） 、 `triangle`（三角形） 、 `diamond`（菱形）

<p class='ev_expand_introduce'>说明：图例的图标 ， 若定义了 `legend.data` ， 则此属性失效

<p class='ev_expand_title'>legend.data<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>Array</span>

<p class='ev_expand_introduce'>样式：

```css
data:[
    {
        icon:'image://public/image/LineChart/Domestic.png',
        iconChange:'image://public/image/LineChart/change.png',
        name:'Domestic',
    },
    {
        icon:'image://public/image/LineChart/Abroad.png',
        iconChange:'image://public/image/LineChart/change.png',
        name:'Abroad',
    }
    ],
```

<p class='ev_expand_introduce'>说明：<br>
针对不同的图例图标以数组的方式管理 ， 定义此属性后则 `legend.icon` 失效<br>`icon`:图例未选中时的背景 ， 可使用 base64 编码的路径格式<br>`iconChange`:图例选中时的背景 ， 可使用 base64 编码的路径格式<br>`name`:图例对应的名称

<p class='ev_expand_title'>legend.itemHeight<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>默认值：`14`

<p class='ev_expand_introduce'>说明：图例图标的高度

<p class='ev_expand_title'>legend.itemWidth<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Nmuber</span>

<p class='ev_expand_introduce'>默认值：`14`

<p class='ev_expand_introduce'>说明：图例图标的宽度 ， `legend.icon` 不为 `circle` 时 ， 此默认值为 25

<p class='ev_expand_title'>legend.formatter<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>无默认值</span><span class='ev_expand_type'>String/Function</span>

<p class='ev_expand_introduce'>说明：用来自定义图例的文本显示。

<p class='ev_expand_title'>legend.textStyle<span class='ev_expand_required'>非必填</span><span class='ev_expand_defaults'>有默认值</span><span class='ev_expand_type'>Object</span>

<p class='ev_expand_introduce'>默认值：

```css
textStyle:{
    fontSize:12,
    padding:[4,0,0,0]，
    color:'#4e4e4e',
    overflow:'none',
    width:50,
    rich:{  // 图例文本富文本配置
      title:{  // 文本对应的名称
        align:'right', // 设置文本右对齐
        width:100  // 设置文本显示宽度
      }
    }
}
```

<p class='ev_expand_introduce'>说明：图例图标的富文本配置 ， `theme=light`,color='#4e4e4e' ， `theme=dark`,color='#bbbbbb'。`width`设置每个图例文本的宽度，`overflow`设置图例文本过长后的显示状态，可选：none：不设置、truncate：截断且显示省略号、break：中文换行、breakAll：强制单词换行。
