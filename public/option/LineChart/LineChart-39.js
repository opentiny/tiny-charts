const option = {
    theme: 'hdesign-light',
    dataset: {
        // 用 dimensions 指定了维度的顺序，第一项默认字段为product，其他项是系列名。
        dimensions: ['product', '2015', '2016', '2017'],
        // 支持采集不同频率的dimensions，有的系列无数据
        source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
        ]
    },
    xAxis: { type: 'category' },
    series: [{ type: 'line', connectNulls: true, }, { type: 'line', connectNulls: true, }, { type: 'line', connectNulls: true, }]
};