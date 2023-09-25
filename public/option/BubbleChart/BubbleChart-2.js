/*
* 使用气泡图时，有两点注意事项：
* 1. 数据(data属性)顺序必须严格按照指定的维度来摆放：
* [
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    ...
* ]
*/
const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
        position: {
            left: 'center',
            bottom: 15
        },
        orient: 'horizontal'
    },
    // 气泡大小范围，默认值为[10, 70]
    // 气泡半径维度决定了气泡的大小，bubbleSize决定了气泡大下的上下限
    bubbleSize: [20, 100],
    data: {
        'Bus': [
            ['Q1', 70, 10, 'Q1', 'Bus'],
            ['Q2', 80, 15, 'Q2', 'Bus'],
            ['Q3', 200, 60, 'Q3', 'Bus'],
            ['Q4', 160, 40, 'Q4', 'Bus'],
        ],
        'Car': [
            ['Q1', 95, 20, 'Q1', 'Car'],
            ['Q2', 120, 60, 'Q2', 'Car'],
            ['Q3', 180, 40, 'Q3', 'Car'],
            ['Q4', 230, 70, 'Q4', 'Car'],
        ],
        'Bicycle': [
            ['Q1', 268, 50, 'Q1', 'Bicycle'],
            ['Q2', 150, 36, 'Q2', 'Bicycle'],
            ['Q3', 110, 20, 'Q3', 'Bicycle'],
            ['Q4', 50, 20, 'Q4', 'Bicycle'],
        ]
    },
    yAxisName: 'Member'
};
