

## 使用方式

您可以调用`new CardManager(dom, cardOption)`方法实现图表卡片。

```javascript
// 引用图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引入卡片组件
import CardManager from '{{VITE_BASECOPYRIGHTSPAT}}/feature/card';
// 引入卡片样式
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/card/index.css';

// .card-container为卡片容器，charts-container为图表容器
<div class="card-container">
    <div class='chart-container'></div>
</div>

// 渲染卡片
const cardContainer = document.getElementByClassName('.card-container')[0];
let card = new CardManager(cardContainer,cardOption);

// 渲染图表
const chartContainer = document.getElementByClassName('.chart-container')[0];
let chartIns = new HuiCharts();
chartIns.init(chartContainer);
chartIns.setSimpleOption('BarChart', barChartOpt, {});
chartIns.render();

```

## 图标卡片配置详解

标题区配置

```javascript

title:{ // 标题区配置
    name: 'Chart name', // 卡片标题名字 
    size: 'small', // 标题字号 枚举值small、large默认small
    tip: { // 提示文本
        show: false, // 是否显示提示文本
        content: '标题提示内容' // 提示文本内容
    },
},
renderTitle:(titleDom) => { // 自定义重绘标题区域内容，titleDom为标题容器
        ...
}

```

功能区配置

```javascript

operation:{ // 功能区配置
    data:[{
        type: 'button', // type为枚举值，有button、icon、icon-button3种类型
        data: [{
            text: '今天', // 按钮文本
            name: 'today' // 名字
        },{
            text: '7天内',
            name: 'week',
        },{
            text: '30天内',
            name: 'month'
        }],
        active: 0 // 当前选中项
    },{
        type: 'icon',
        data: [{
            path: './icons/refresh.png', // 图片路径
            name: 'refresh' // 名字
        }],
    },{
        type: 'icon-button', 
        data: [{
            path: './icons/line.png', // 图片路径
            name: 'line' // 名字
        },{
            path: './icons/stackbar.png',
            name: 'stackbar'
        },{
            path: './icons/bar.png',
            name: 'bar'
        }],
        active: 0
    }],
    onChange:(data,index) => { // 值改变时回调
        ... 
    },
},
renderOperation:(operationDom) => { // 自定义重绘功能区域内容，operationDom为功能区域容器
        ...
}

```

关键数值区域

```javascript

valueArea: { // 关键数值区域配置
    data:[{
        value: 92.3, // 值
        unit: '%', // 单位
        desc: 'Average QPS', // 描述
    },{
        value: 94.7,
        unit: '%',
        desc: 'Average QPS',
    },{
        value: 96.8,
        unit: '%',
        desc: 'Average QPS',
    }],
},
renderValueArea:(valueAreaDom) => { // 自定义重绘关键数值区域内容，valueAreaDom为数值区域容器
        ...
}

```