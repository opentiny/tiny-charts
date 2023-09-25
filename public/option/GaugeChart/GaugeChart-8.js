const option = {
    theme: 'light',
    splitNumber: 5,
    text: {
        // offset: text文本相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
        offset: [0, 0],
        // 格式化文本函数，参数value为数据数值，返回的字符串格式： {styleName|要显示的文本}
        formatter: function (value) {
            return '{value|' + value + '}{unit|%}{icon|↑7%}{name|VS Yesterday}'
        },
        // 格式化文本样式，与上述formatter搭配使用，格式： styleName: {...样式}
        // 具体支持的样式可见：
        // https://echarts.apache.org/zh/option.html#series-gauge.detail.rich.%3Cstyle_name%3E 
        formatterStyle: {
            value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#000000',
            },
            unit: {
                fontSize: 12,
                color: '#999999',
                padding: [20, 0, 0, 6],
            },
            icon: {
                fontSize: 14,
                color: 'green',
                padding: [20, 6, 0, 0],
            },
            name: {
                fontSize: 14,
                color: '#ffffff',
                padding: [20, 0, 0, 0],
            }
        }
    },
    data: [
        {
            value: 51,
            name: 'VS Yesterday'
        },
    ]
};
