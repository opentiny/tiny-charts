/*
* 由于气泡图的数据往往表示多个维度的信息，内置的tipbox很难描述清楚需要表达的信息
* 因此使用气泡图时强烈建议自定义tip，使用 tipHtml
*/
const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        position: {
            left: 'center',
            bottom: 15
        },
        show: true,
        orient: 'horizontal'
    },
    tipHtml: (params, ticket, callback) => {
        let seriesName = params.seriesName;
        let color = params.color;
        let data = params.data;
        let [x, y, radius, name, ...others] = data;
        let htmlString = '<div style="margin-bottom:4px;">' + seriesName + '</div>';
        htmlString +=
            '<div>' +
            '<span style="display:inline-block;margin-right:8px;min-width:60px;">季度：</span>' +
            '<span>' + x + '</span>' +
            '</div>';
        htmlString +=
            '<div>' +
            '<span style="display:inline-block;margin-right:8px;min-width:60px;">销售额： </span>' +
            '<span>' + y + ' 辆</span>' +
            '</div>';
        htmlString +=
            '<div>' +
            '<span style="display:inline-block;margin-right:8px;min-width:60px;">毛利润：</span>' +
            '<span>' + radius + ' 万元</span>' +
            '</div>';
        return htmlString
    },
    data: {
        '大巴车': [
            ['Q1', 70, 10, 'Q1', 'Bus'],
            ['Q2', 80, 15, 'Q2', 'Bus'],
            ['Q3', 200, 60, 'Q3', 'Bus'],
            ['Q4', 160, 40, 'Q4', 'Bus'],
        ],
        '汽车': [
            ['Q1', 95, 20, 'Q1', 'Car'],
            ['Q2', 120, 60, 'Q2', 'Car'],
            ['Q3', 180, 40, 'Q3', 'Car'],
            ['Q4', 230, 70, 'Q4', 'Car'],
        ],
        '自行车': [
            ['Q1', 268, 50, 'Q1', 'Bicycle'],
            ['Q2', 150, 36, 'Q2', 'Bicycle'],
            ['Q3', 110, 20, 'Q3', 'Bicycle'],
            ['Q4', 50, 20, 'Q4', 'Bicycle'],
        ]
    },
    yAxisName: '数量'
};
