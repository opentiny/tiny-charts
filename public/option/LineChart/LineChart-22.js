const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    // 自定义图例配置
    legend: {
        show: true,           // 图例是否显示
        position: {           // 图例在容器中的上下左右位置
            left: 'center',
            bottom: 16
        },
        orient: 'horizontal', // 图例排布方向
        width: 200,           // 图例整体宽度
        textStyle: {          // 图例文本省略号
            width: 60,
            overflow: 'truncate',
        },
        tooltip: {            // 图例悬浮提示框
            show: true
        }
    },
    data: [
        { 'Month': 'Jan', 'Domesticxxxxxxxxxxxx': 33, 'Abroadxxxxxxxxxxxx': 37 },
        { 'Month': 'Feb', 'Domesticxxxxxxxxxxxx': 27, 'Abroadxxxxxxxxxxxx': 39 },
        { 'Month': 'Mar', 'Domesticxxxxxxxxxxxx': 32, 'Abroadxxxxxxxxxxxx': 21 },
        { 'Month': 'Apr', 'Domesticxxxxxxxxxxxx': 30, 'Abroadxxxxxxxxxxxx': 15 },
        { 'Month': 'May', 'Domesticxxxxxxxxxxxx': 37, 'Abroadxxxxxxxxxxxx': 13 },
        { 'Month': 'Jun', 'Domesticxxxxxxxxxxxx': 36, 'Abroadxxxxxxxxxxxx': 17 },
        { 'Month': 'Jul', 'Domesticxxxxxxxxxxxx': 41, 'Abroadxxxxxxxxxxxx': 23 },
        { 'Month': 'Aug', 'Domesticxxxxxxxxxxxx': 22, 'Abroadxxxxxxxxxxxx': 12 },
        { 'Month': 'Sep', 'Domesticxxxxxxxxxxxx': 17, 'Abroadxxxxxxxxxxxx': 30 },
        { 'Month': 'Oct', 'Domesticxxxxxxxxxxxx': 40, 'Abroadxxxxxxxxxxxx': 33 },
        { 'Month': 'Nov', 'Domesticxxxxxxxxxxxx': 43, 'Abroadxxxxxxxxxxxx': 21 },
        { 'Month': 'Dec', 'Domesticxxxxxxxxxxxx': 32, 'Abroadxxxxxxxxxxxx': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Units',
        minInterval: 15,
    }
};