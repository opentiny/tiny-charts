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
    padding: [30, 80, 50, 20],
    legend: {
        show: true,
    },
    label: {
        show: true,
        position: 'right',
        offset: [6, 0]
    },
    data: [
        { "Name": 'Elastic', "Domestic": 31, "Abroad": 20 },
        { "Name": 'Bare Metal Server', "Domestic": 30, "Abroad": 15 },
        { "Name": 'Object Store', "Domestic": 27, "Abroad": 39 },
        { "Name": 'Cloud Hard Drive', "Domestic": 33, "Abroad": 37 },
    ],
    direction: 'horizontal', // 横向柱状图
    xAxis: {
        data: "Name",
    },
    // 在横向柱状图中，Y轴的名称在右下角
    yAxis: {
        name: "Units"
    }
};
