# 坐标轴文本提示

## 背景
当图表坐标轴标签过多或者文本长度较长，需要显示全部标签时，可能会导致标签名重叠的现象                         

<div class="img-warpper">        
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/axistip.png"/>
    </div>
</div>

## 文本显示方案
{{VITE_BASECOPYRIGHTS}} HUICharts提供了以下几种解决方案
     
<div class="img-warpper img-three">
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/axistip1.png"/>
        <span class="text">方案一：文本旋转</span>
    </div>
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/axistip2.png"/>
        <span class="text">方案二：文本过长显示省略号（...）</span>
    </div>
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/axistip3.png"/>
        <span class="text">方案三：文本过长换行显示</span>
    </div>
</div>

```jsx
// 方案一：文字旋转图表配置项
let chartOption = {
    ...
    xAxis: {
        ...,
        labelRotate: 45,
    },
};

// 方案二：超长显示省略号图表配置项
let chartOption = {
    ...
    xAxis: {
       ellipsis: { // x轴文本过长显示‘...’
        labelWidth: 35, // 文本宽度，若不设置将无法进行过长截断
        overflow: 'truncate' // 'truncate' 过长文本截断
      },
    }
};

// 方案三：超长文本换行显示图表配置项
let chartOption = {
    ...
    xAxis: {
        ...,
       formatter: (value, index) => {
            // 换行显示
             return value.split(' ').join('\n')
        }
    }
};
```
## 文本气泡提示
但是某些场景下，当文字显示不全时，希望超出显示省略号(...), 鼠标悬停在文字上面的时候显示全部名称
因此{{VITE_BASECOPYRIGHTS}} HUICharts 提供了 axistip 属性，设置 xAxis(X轴) 为 true 时， 可配合 xAxis 中的 `ellipsis` 属性使用

 - axistip 设置为 true，表示 xAxis(X轴) 和 yAxis(Y轴) 鼠标悬停时均可显示文字气泡提示, 
 - axistip 为对象时，可选择配置 xAxis 或者 yAxis

<div class="img-warpper">        
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/axistip4.png"/>
    </div>
</div>

```jsx
let chartOption = {
    ...,
     axistip: {
      xAxis: true
    },
    xAxis: {
       ellipsis: { // x轴文本过长显示‘...’
        labelWidth: 35, // 文本宽度，若不设置将无法进行过长截断
        overflow: 'truncate' // 'truncate' 过长文本截断
      },
    }
};
```

<style scoped>
    .markdown-body p{
        line-height: 24px;
    }
    .img-warpper{
        width: 650px;
        margin: 16px auto;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between; 
    }
    .img-double{
        width: 900px;
    }
    .img-warpper.img-three{
        width: 1416px;
        margin: 16px auto;
    }
    .img-container{
        margin: 0 16px;
        border:1px solid #ccc;
        position:relative;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        font-size: 14px;
    }
    .img-container-dark{
        background-color:#191919;
    }
    .text{
        display: inline-block;
        margin-bottom: 8px;
    }
</style>