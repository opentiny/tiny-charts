const option = {
    theme: 'light',
    padding: [50, 60, 50, 20],
    data: [
        { 'Month': 'Jan一月', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb二月', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar三月', 'Domestic': 30, 'Abroad': 20 },
        { 'Month': 'Apr四月', 'Domestic': 31, 'Abroad': 15 },
        { 'Month': 'May五月', 'Domestic': 37, 'Abroad': 23 },
        { 'Month': 'Jun六月', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul七月', 'Domestic': 42, 'Abroad': 20 },
        { 'Month': 'Aug八月', 'Domestic': 20, 'Abroad': 12 },
        { 'Month': 'Sep九月', 'Domestic': 17, 'Abroad': 32 },
        { 'Month': 'Oct十月', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov十一月', 'Domestic': 41, 'Abroad': 20 },
        { 'Month': 'Dec十二月', 'Domestic': 30, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month',
        ellipsis: {         // x轴文本过长显示'...'
            labelWidth: 36, // 文本宽度，若不设置将无法过长截断
            overflow: 'truncate', // 'truncate' 过长文本截断
        },
    },
    yAxis: {
        name: 'Unit'
    }
};