# 数据集
图表的数据，常规配置是在option.data中设置数据，但是从 ECharts4 支持数据集开始，更推荐使用数据集来管理数据。因为这样，数据可以被多个组件复用，也方便进行 “数据和其他配置” 分离的配置风格。毕竟，在运行时，数据是最常改变的，而其他配置大多并不会改变。
因此 {{VITE_BASECOPYRIGHTSPAT}} 也可以支持dataset，您可以在 {{VITE_BASECOPYRIGHTSPAT}} 的配置项上面添加`dataset`配置进行扩展。
数据集在`1.3.28`版本开始支持，并且在该版本，仅支持下`线形图`和`柱状图`，且仅在图表初始化数据时生效，暂不支持refreshData等更新数据的场景。

```javascript
// 常规data的配置
const option = {
    theme: 'hdesign-light',
    data: [
        { 'Month': 'Jan', 'Domestics': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestics': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestics': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestics': 30, 'Abroad': 15 },
    ],
    xAxis: {
        data: 'Month',
    }
};

```
</br>
{{VITE_BASECOPYRIGHTSPAT}} 提供了三种dataset的方式：

一、source为`二维数组`，类目和系列名放在二维数组的第一项，series可以定义不同的type。
```javascript
option = {
    theme: 'hdesign-light',
    dataset: {
        // 提供一份数据。
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: { type: 'category' },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};

```

二、source为`二维数组`，通过encode配置映射到x和y轴的数据，只需要配置series长度为1
```javascript
option = {
    theme: 'hdesign-light',
    dataset: {
    source: [
        ['score', 'amount', 'product'],
        [89.3, 58212, 'Matcha Latte'],
        [57.1, 78254, 'Milk Tea'],
        [74.4, 41032, 'Cheese Cocoa'],
        [50.1, 12755, 'Cheese Brownie'],
        [89.7, 20145, 'Matcha Cocoa'],
        [68.1, 79146, 'Tea'],
        [19.6, 91852, 'Orange Juice'],
        [10.6, 101852, 'Lemon Juice'],
        [32.7, 20112, 'Walnut Brownie']
    ]
    },
    series: [
    {
        type: 'bar',
        encode: {
        // 将 "amount" 列映射到 X 轴。
        x: 'amount',
        // 将 "product" 列映射到 Y 轴。
        y: 'product'
        }
    }
    ]
};

```

三、source为`对象数组`，类目和系列名放在dimensions维度里。同时，可以支持采集不同频率的dimensions,例如折线数据多于柱状图数据，采集的频率不同。
```javascript
option = {
    theme: 'hdesign-light',
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
        ],
        // 支持采集不同频率的dimensions,有的系列无数据
        // source: [
        //     { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
        //     { product: 'Milk Tea', '2015': 83.1, '2017': 55.1 },
        //     { product: 'Cheese Cocoa', '2015': 86.4, '2017': 82.5 },
        //     { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
        // ]
    },
    xAxis: { type: 'category' },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'line' }]
};

```