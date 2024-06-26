const option = {
    theme: 'light',
    padding: [50, 30, 20, 20],
    legend: {
        show: false,
    },
    // 当值为 null 时表示该线不显示，当值为 0 时表示该线仍然有值
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 27 },
        { 'Month': 'Mar', 'Domestic': 31 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 33 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 17 },
        { 'Month': 'Oct', 'Domestic': 20 },
        { 'Month': 'Nov', 'Domestic': 25 },
        { 'Month': 'Dec', 'Domestic': 33 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'UnitC'
    },
    series: [
        {
            name: 'Domestic',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#5990fd'
                    }, {
                        offset: 1, color: '#f43146'
                    }],
                }
            }
        }
    ]
};
