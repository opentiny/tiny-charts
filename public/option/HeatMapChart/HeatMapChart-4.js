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
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [50, 30, 20, 20],
    tooltip: {
        formatter: (params, ticket, callback) => {
            const color = params.color;
            const data = params.data;
            const [x, y, z, name, ...others] = data;
            let htmlString = '<div style="margin-bottom:4px;">自定义矩形热力图提示框</div>';
            htmlString +=
                '<div style="margin-bottom:4px;">' +
                '<span style="display:inline-block;width:10px;height:10px;margin-right:8px;border-style:solid;border-width:1px;border-color:' + color + ';background-color:' + color + ';"></span>' +
                '<span>' + name + '</span>' +
                '</div>';
            htmlString +=
                '<div>' +
                '<span style="display:inline-block;margin-right:8px;min-width:60px;">透明度维度:</span>' +
                '<span>' + z + '</span>' +
                '</div>';
            return htmlString
        },
    },
    // 矩形的颜色,默认值'#F43146'
    color: '#F43146',
    // 矩形的大小,默认值8
    rectangleSize: 8,
    yAxisName: '手机市场占比%',
    data: [
        [10, 14, 10, 'Australia'],
        [30, 20, 21, 'Canada'],
        [40, 60, 29, 'China'],
        [50, 5, 30, 'Cuba'],
        [55, 14, 31, 'Finland'],
        [15, 30, 35, 'France'],
        [32, 50, 48, 'Germany'],
        [12, 40, 55, 'Iceland'],
        [14, 33, 60, 'India'],
        [12, 58, 50, 'Japan'],
        [12, 15, 70, 'North Korea'],
        [22, 54, 82, 'South Korea'],
        [38, 60, 80, 'New Zealand'],
        [48, 30, 90, 'Norway'],
        [52, 42, 100, 'Poland'],
        [50, 10, 10, 'Australia'],
        [64, 20, 21, 'Canada'],
        [60, 60, 29, 'China'],
        [20, 5, 30, 'Cuba'],
        [30, 10, 31, 'Finland'],
        [55, 30, 35, 'France'],
        [32, 50, 48, 'Germany'],
        [48, 44, 55, 'Iceland'],
        [32, 33, 60, 'India'],
        [19, 58, 50, 'Japan'],
        [59, 15, 70, 'North Korea'],
        [4, 50, 82, 'South Korea'],
        [8, 60, 80, 'New Zealand'],
        [10, 30, 90, 'Norway'],
        [22, 42, 100, 'Poland'],
        [5, 14, 5, 'Australia'],
        [10, 30, 21, 'Canada'],
        [11, 22, 29, 'China'],
        [15, 18, 30, 'Cuba'],
        [9, 14, 100, 'Finland'],
        [10, 30, 35, 'France'],
        [12, 22, 48, 'Germany'],
        [15, 40, 100, 'Iceland'],
        [12, 14, 60, 'India'],
        [9, 26, 50, 'Japan'],
        [9, 19, 70, 'North Korea'],
        [6, 14, 82, 'South Korea'],
        [8, 26, 80, 'New Zealand'],
        [11, 29, 90, 'Norway'],
        [13, 24, 100, 'Poland'],
    ],
};

