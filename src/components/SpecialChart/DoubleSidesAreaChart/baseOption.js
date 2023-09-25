const baseOption = {
    // 设置坐标轴指示器上下两个区域都显示
    axisPointer: {
        link: {
            xAxisIndex: 'all',
        }
    },
    series: [
        {
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 10,

            xAxisIndex: 0,
            yAxisIndex: 0,
        },
        {
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 10,

            xAxisIndex: 1,
            yAxisIndex: 1,
        }
    ]
};

/**
 * 处理双向面积图的grid,grid为数组且length===2
 * @param {*} iChartOpt 
 */
const baseGrid = [
    // 上面积区域
    {
        top: '6%',
        left: 28,
        right: 16,
        height: '42%',
        containLabel: false // grid 区域是否包含坐标轴的刻度标签
    },
    // 下面积区域
    {
        bottom: '6%',
        left: 28,
        right: 16,
        height: '42%',
        containLabel: false
    },
];

/**
 * 双向面积图特殊处理，xAXis为数组且length===2
 * @param {*} iChartOpt 
 */
const baseXaxis = [
    // 上面积区域
    {
        type: 'category',
        // 两边留白
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            align: 'center',
            color: undefined,
            fontSize: 12,
            margin: 16
        },
        gridIndex: 0,
    },
    // 下面积区域
    {
        gridIndex: 1,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
    }
];

/**
 * 双向面积图的yAxis特殊处理，yAxis为数组且length===2
 * @param {*} iChartOpt 
 */
const baseYaxis = [
    // 上面积区域
    {
        type: 'value',
        axisLabel: {
            show: true,
            color: undefined,
            fontSize: 12
        },
        nameTextStyle: {
            color: undefined
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: undefined,
                width: 2
            }
        },
        gridIndex: 0,
    },
    // 下面积区域
    {
        gridIndex: 1,
        type: 'value',
        inverse: true, //echarts Y轴翻转属性,
        axisLabel: {
            show: true,
            color: undefined,
            fontSize: 12
        },
        nameTextStyle: {
            color: undefined
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: undefined,
                width: 2
            }
        }
    }
];

export { baseOption, baseGrid, baseXaxis, baseYaxis };