/*
* 使用矩形热力图时：
* 数据(data属性)顺序必须严格按照指定的维度来摆放：
*[
*    [维度X数据 维度Y数据 矩形透明度维度数据 单项数据名称] 
*]
*/
const option = {
    theme: 'light',
    // 图表类型(矩形热力图)
    type: 'RectangularHeatMapChart',
    // 矩形的颜色,默认值'#F43146'
    color: '#F43146',
    // 矩形的大小,默认值8
    rectangleSize: 8,
    yAxisName: '手机市场占比%',
    data: [
        [10, 10, 10, 'Australia'],
        [30, 20, 21, 'Canada'],
        [40, 60, 29, 'China'],
        [50, 5, 30, 'Cuba'],
        [55, 10, 31, 'Finland'],
        [15, 30, 35, 'France'],
        [32, 50, 48, 'Germany'],
        [12, 40, 55, 'Iceland'],
        [12, 33, 60, 'India'],
        [12, 58, 50, 'Japan'],
        [12, 15, 70, 'North Korea'],
        [22, 50, 82, 'South Korea'],
        [38, 60, 80, 'New Zealand'],
        [48, 30, 90, 'Norway'],
        [52, 42, 100, 'Poland'],
        [50, 10, 10, 'Australia'],
        [60, 20, 21, 'Canada'],
        [60, 60, 29, 'China'],
        [20, 5, 30, 'Cuba'],
        [30, 10, 31, 'Finland'],
        [55, 30, 35, 'France'],
        [32, 50, 48, 'Germany'],
        [48, 40, 55, 'Iceland'],
        [32, 33, 60, 'India'],
        [19, 58, 50, 'Japan'],
        [59, 15, 70, 'North Korea'],
        [6, 50, 82, 'South Korea'],
        [8, 60, 80, 'New Zealand'],
        [10, 30, 90, 'Norway'],
        [22, 42, 100, 'Poland'],
        [5, 15, 5, 'Australia'],
        [10, 30, 21, 'Canada'],
        [11, 22, 29, 'China'],
        [15, 18, 30, 'Cuba'],
        [9, 19, 100, 'Finland'],
        [10, 30, 35, 'France'],
        [12, 22, 48, 'Germany'],
        [15, 40, 100, 'Iceland'],
        [12, 13, 60, 'India'],
        [9, 26, 50, 'Japan'],
        [9, 19, 70, 'North Korea'],
        [6, 18, 82, 'South Korea'],
        [8, 26, 80, 'New Zealand'],
        [11, 29, 90, 'Norway'],
        [13, 21, 100, 'Poland'],
    ],
};
