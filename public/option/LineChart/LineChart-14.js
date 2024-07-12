const option = {
    theme: 'light',
    padding: [50, 30, 20, 20],
    legend: {
        show: false,
    },
    // 折线图每个拐点样式
    itemStyle: {
        symbolSize: 15,
    },
    // 当值为 null 时表示该线不显示，当值为 0 时表示该线仍然有值
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 24 },
        { 'Month': 'Mar', 'Domestic': 31 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 14 },
        { 'Month': 'Oct', 'Domestic': null },
        { 'Month': 'Nov', 'Domestic': 14 },
        { 'Month': 'Dec', 'Domestic': null }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Unit'
    },
    series: [
        {
            name: 'Domestic', // 覆盖 Domestic 线条的样式
            showSymbol: true,
            symbol:'circle',
            label: {
                show: true,
                formatter: (params) => {
                    if (params.dataIndex === 8) {
                        return '今日累计\n' + params.value + 't';
                    } else {
                        return '';
                    }
                },
            }
        }
    ]
};
