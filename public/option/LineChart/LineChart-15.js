const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
        position: {
            left: 'center',
            bottom: 15
        },
        // data:针对不同的图例图标以数组的方式管理
        // data[i].name:图例对应的数据名称 Key 值，必填
        // data[i].icon:图例图标未选中时的背景,可使用base64编码的路径格式
        // data[i].iconChange:图例图标选中时的背景,可使用base64编码的路径格式
        data: [
            {
                name: 'Domestic',
                icon: 'image://public/image/charts/legend/Domestic.png',
                iconChange: 'image://public/image/charts/legend/change.png'
            },
            {
                name: 'Abroad',
                icon: 'image://public/image/charts/legend/Abroad.png',
                iconChange: 'image://public/image/charts/legend/change.png'
            }
        ],
        // 图例图标的高度
        itemHeight: 4,
        // 图例图标的宽度
        itemWidth: 25,
        // 图例富文本样式
        textStyle: {
            fontSize: 12,
            color: '#bbb',
            padding: [4, 0, 0, 0],
        }
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Units'
    }
};

