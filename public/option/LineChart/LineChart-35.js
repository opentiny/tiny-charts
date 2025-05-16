const option = {
    theme: 'light',
    smooth: true,
    markLine: [
        {
            belong: ['Domestic'], // 归属那条线
            symbol:['circle',''], // 端点
            yAxis: 25, //阈值
            lineStyle: { // 阈值线样式
                color: 'red'
            },
            label:{ // 文本样式
                position: 'insideEndTop', // 文本位置
            },
        },
        {
            belong: ['Domestic'], 
            symbol:['circle',''], 
            yAxis: 35, 
            lineStyle: { 
                color: 'red',
                type: 'dashed'
            },
            label: { 
                position: 'insideStartTop',
                formatter: 'Domestic的阈值线'
            }
        },
        {
            belong: ['Abroad'], 
            symbol:['rect','circle'], 
            yAxis: 40, 
            lineStyle: { 
                color: 'red',
                type: 'dashed'
            },
            label: { 
                position: 'end'
            }
        }
    ],
    data: [
        { 'Month': 'Jan', 'Domestic': 37, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 14 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 17 },
        { 'Month': 'Jun', 'Domestic': 33, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 17 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 37, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

