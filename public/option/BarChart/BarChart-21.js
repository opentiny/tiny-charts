/*
* label 控制柱状图上的文本标签
* label 可以为Object，也可以为Array,二者应用场景不同
* label.show 控制是否显示，默认false不显示
*
* label.position 控制label相对于柱形的位置
* label.position 默认为 inside,支持12种配置：
* top / left / right / bottom 
* inside / insideLeft / insideRight / insideTop / insideBottom 
* insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight
*
* label.offset 否对文字进行偏移，默认[0,0]不偏移
* label.offset 例如：[30, 40] 表示文字在横向偏移 30，纵向偏移 40
*/
const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    label: {
        position: 'top',
        show: true,
        offset: [0, -6]
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 21, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 21, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 21, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    }
};
