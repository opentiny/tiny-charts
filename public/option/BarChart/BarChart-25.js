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
    label: {  // 此处也可以使用 Array 对每个柱状图进行单独配置
        show: true,
        position: 'top',
        offset: [0, -6]
    },
    type: 'water-fall', // type='water-fall'柱状图为瀑布形态，此时图中会自动添加一个Total(总和)数据
    data: [
        { 'Name': 'NLE', 'Man': 25, 'Female': 5, 'Unkown': 8 },
        { 'Name': 'HIN', 'Man': 10, 'Female': 8, 'Unkown': 5 },
        { 'Name': 'FBP', 'Man': 8, 'Female': 2, 'Unkown': 12 },
        { 'Name': 'VEDIO', 'Man': 20, 'Female': 15, 'Unkown': 10 },
        { 'Name': 'SASS', 'Man': 6, 'Female': 10, 'Unkown': 5 },
        { 'Name': 'RDS', 'Man': 12, 'Female': 15, 'Unkown': 10 },
        { 'Name': 'E-SYS', 'Man': 25, 'Female': 12, 'Unkown': 8 },
    ],
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Number'
    }
};
