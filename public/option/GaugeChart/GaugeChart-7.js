const option = {
    theme: 'light',
    position: {
        center: ['50%', '50%'],
        radius: '45%',
    },
    color: "#5CB300",
    splitNumber: 5,
    splitLine: {
        show: false,
    },
    text: {
        // offset: text文本相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
        offset: ['0%', '35%'],
        // 格式化文本函数，参数value为数据数值，返回的字符串格式： {styleName|要显示的文本}
        formatter: function (value) {
            return '{value|' + value + '}{unit|%}\n{name|任职匹配率}\n\n\n{status|正常}'
        },
        // 格式化文本样式，与上述formatter搭配使用，格式： styleName: {...样式}
        // 具体支持的样式可见：
        // https://echarts.apache.org/zh/option.html#series-gauge.detail.rich.%3Cstyle_name%3E 
        formatterStyle: {
            value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#191919',
                textShadowColor: '#ffffff',
                textShadowBlur: 1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [0, 0, 30, 0]
            },
            unit: {
                fontSize: 12,
                fontStyle: 'italic',
                color: '#191919',
                textShadowColor: '#ffffff',
                textShadowBlur: 1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [22, 0, 30, 6],
            },
            name: {
                fontSize: 14,
                color: '#595959',
                padding: [15, 5, 5, 5],
            },
            status: {
                fontSize: 12,
                color: '#5CB300',
                backgroundColor: '#f5f5f5',
                width: 120,
                height: 32,
                borderRadius: 20,
                align: 'center',
            },
        },
    },
    data: [
        {
            value: 87.8,
            name: 'Winning Percentage',
        },
    ]
};
