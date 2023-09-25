const option = {
    theme: 'light',
    padding: [50, 60, 50, 20],
    area: true,
    data: [
        { 'Month': 'Jan一月', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb二月', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar三月', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr四月', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May五月', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun六月', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul七月', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug八月', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep九月', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct十月', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov十一月', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec十二月', 'Domestic': 32, 'Abroad': 11 }
    ],
    xAxis: {
        name: 'Month',
        data: 'Month',
        formatter: (value, index) => {
            // 过滤掉中文
            return value.replace(/[^a-zA-Z]/g, "")
        }
    },
    yAxisName: 'Units',
};