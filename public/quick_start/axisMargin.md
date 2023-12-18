# 网格对齐

## 背景

对于直角坐标系类图表，通常需要将图表左右两侧与容器左右两侧顶格对齐：

<div class="img-warpper">
    <div class="img-container">
        <img src="./image/md/axisMarginDesign.png"/>
    </div>
</div>

</br>
但是实际场景中，x轴的刻度label文本经常会因为容器的限制而被截断：

<div class="img-warpper">
    <div class="img-container" style="padding: 32px;">
        <img src="./image/md/axisMarginTruncation.png"/>
    </div>
</div>

</br>
因此我们需要将x轴的绘制区域向内缩进，以完全显示刻度label。同时拉满图表网格使其占满容器，保证两端顶格对齐(下图为使用 `xAxis.axisMargin` 实现)：

<div class="img-warpper">
    <div class="img-container" style="padding: 32px;">
        <img src="./image/md/axisMargin.png"/>
    </div>
</div>

</br>

HUI-Charts 提供了若干网格对齐方式，您可以根据页面开发场景，选择对应的对齐方式。


## padding 属性
图表配置项 option 中的 `padding` 属性用来控制图表自身在容器内的上下左右间距。</br>
通过调整 `padding` 值，可以有效规避x轴刻度label被容器截断的问题。</br>
但 `padding` 内边距会使得图表盒模型与容器盒模型不顶格对齐，因此还需要再对容器样式进行调整。

```jsx
/**
 * 图表配置项的padding说明：
 * padding : [ top, right, bottom, left ]
 * top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
 * left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
 * right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
 * bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比 
 **/
let chartOption = {
    ...
    padding: [20, 20, 20, 20],
};
```

## xAxis.fullGrid 属性
图表配置项 option 中的 `xAxis.fullGrid` 属性用来控制图表x轴两边留白，在HUI-Charts中该属性默认为 `false` ，即默认x轴两边有留白。

当 `fullGrid` 为 `true` 时，图表曲线占满整个x轴，此时通常搭配 `padding` 一起使用，否则x轴刻度label有可能会被容器截断

<div class="img-warpper img-double">
    <div class="img-container">
        <img src="./image/md/axisMarginFullGrid.png"/>
        <span>xAxis.fullGrid = true ：图形占满x轴两边</span>
    </div>
    <div class="img-container" style="margin-left: 3rem;">
        <img src="./image/md/axisMarginFullGridFalse.png"/>
        <span>xAxis.fullGrid = false ：x轴两边有留白</span>
    </div>
</div>

```jsx
// 图表配置项
let chartOption = {
    ...
    xAxis: {
        fullGrid: true
    }
};
```

## xAxis.axisMargin 属性
图表配置项 option 中的 `xAxis.axisMargin` 属性，是一个比较完善的网格解决方案，他可以实现灵活自定义x轴两边留白区域大小。

使用 `xAxis.axisMargin`时，可以`不用 padding`，就能同时实现：

* 图表和容器左右两侧顶格对齐
* x轴刻度label文本不被容器截断

<div class="img-warpper img-three">
    <div class="img-container">
        <img src="./image/md/axisMargin1.png"/>
        <span>两侧留白距离0，默认使用 xAxis.fullGrid = false</span>
    </div>
    <div class="img-container" style="margin-left: 3rem;">
        <img src="./image/md/axisMargin2.png"/>
        <span>两侧留白距离1</span>
    </div>
    <div class="img-container" style="margin-left: 3rem;">
        <img src="./image/md/axisMargin3.png"/>
        <span>两侧留白距离2</span>
    </div>20
</div>

```jsx
/**
 * axisMargin.left 表示x轴左侧留白
 * axisMargin.right 表示x轴右侧留白
 * 具体的留白数值：1个单位表示1个数据所占的x轴宽度。如x轴有15条数据，那么当 axisMargin.left = 2 时表示x轴左侧留白 "x轴总宽度/15 * 2" 的空间
 * 注意：留白数值必须为整数！
 **/
let chartOption = {
    ...
    xAxis: {
        axisMargin: {
            left: 1, // x轴左侧留白1个数据占位宽度
            right: 1 // x轴右侧留白1个数据占位宽度
        }
    }
};
```

<!-- 样式 -->
<style>
    .markdown-body p{
        line-height: 24px;
    }
    .img-warpper{
        width: 650px;
        margin: auto;
        display: flex;
        margin-top: 16px;
        margin-bottom: 16px;
        align-items: center;
        flex-direction: row;
        background-color:#ffffff;
        justify-content: space-between;
    }
    .img-double{
        width: 900px;
    }
    .img-three{
        width: 1200px;
    }
    .img-container{
        border:1px solid #ccc;
        position:relative;
        margin:0 auto;
        width: 650px;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        font-size: 14px;
    }
    .img-container-dark{
        background-color:#191919;
    }
</style>
