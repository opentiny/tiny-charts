const option = {
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
    },
    xAxis: { type: 'category' },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'line' }]
};
