const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    // 控制柱形的样式, 默认为符合EBG图表规范的柱形样式, 此处仅用来显示能力
    itemStyle: {
        barWidth: 8,
        barGap: '60%',
    },
    data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": 27, 'Exit': 23 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": 19, 'Exit': 14 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": 20, 'Exit': 10 },
        { "Month": 'Apr', "Domestic": 30, "Abroad": 15, 'Exit': 6 },
        { "Month": 'May', "Domestic": 37, "Abroad": 13, 'Exit': 31 },
        { "Month": 'Jun', "Domestic": 36, "Abroad": 17, 'Exit': 20 },
        { "Month": 'Jul', "Domestic": 42, "Abroad": 22, 'Exit': 14 },
        { "Month": 'Aug', "Domestic": 22, "Abroad": 32, 'Exit': 13 },
        { "Month": 'Sep', "Domestic": 47, "Abroad": 30, 'Exit': 40 },
        { "Month": 'Oct', "Domestic": 40, "Abroad": 33, 'Exit': 25 },
        { "Month": 'Nov', "Domestic": 42, "Abroad": 22, 'Exit': 29 },
        { "Month": 'Dec', "Domestic": 32, "Abroad": 11, 'Exit': 13 }
    ],
    xAxis: {
        data: "Month",
    },
    yAxis: {
        name: "Percent(%)"
    },

    // stepGradient为分段渐变，可在内部配置多个对象，循环取色
    // step为分段区域(对应的data数据中最大值不得超出step的最大值,最小值不得小于step的最小值)
    // gradientColor为分段区域的颜色（支持rgb颜色、英文单词颜色、十六进制颜色。）。
    // step与gradientColor数组长度需一致
    stepGradient: [
        {
            step: [0, 10, 20, 30, 40, 50],
            gradientColor: ['pink', 'yellow', 'blue', 'red', '#ffffff', '#000000']
        },
        /** {
            step:[0,10,20,30,40],
            gradientColor:['yellow','red','gray','green','#cccccc']
        }*/
    ]
};
