const option = {
    theme: 'hwCloud-light',
    area: true,
    /*
    * 此处使用padding:[300,400,300,400]是为了模拟小容器。实际页面开发不需要如此配置。
    */
    padding: [300, 400, 300, 400],
    smooth: true,
    silent: true,
    legend: {
        show: false,
    },
    markLine: {
        top: 38,
        topLine: false,
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, },
        { 'Month': 'Feb', 'Domestic': 27, },
        { 'Month': 'Mar', 'Domestic': 31, },
        { 'Month': 'Apr', 'Domestic': 30, },
        { 'Month': 'May', 'Domestic': 37, },
        { 'Month': 'Jun', 'Domestic': 36, },
        { 'Month': 'Jul', 'Domestic': 42, },
        { 'Month': 'Aug', 'Domestic': 22, },
        { 'Month': 'Sep', 'Domestic': 17, },
        { 'Month': 'Oct', 'Domestic': 40, },
        { 'Month': 'Nov', 'Domestic': 42, },
        { 'Month': 'Dec', 'Domestic': 32, },
    ],
    xAxis: {
        data: 'Month',
        show: false,
        fullGrid: true
    },
    yAxis: {
        show: false
    }
};
