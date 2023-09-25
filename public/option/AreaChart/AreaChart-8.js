/*
* 折线面积图(默认)、曲线面积图(smooth)、阶梯线面积图(step)均支持峰值标记
* markPoint.max 表示标记最大值
* markPoint.min 表示标记最小值
*/
const option = {
    theme: 'light',
    // step: true, 
    smooth: true,
    area: true,
    markLine: {
        top: 38,
        bottom: 20
    },
    markPoint: {
        max: true,
        min: true
    },
    tipHtml: (params, ticket, callback) => {
        let htmlString = '';
        params.map((item, index) => {
            if (index === 0) {
                htmlString += (item.name + '<br/>');
            }
            htmlString +=
                '<div>' +
                '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + item.color + ';">' +
                '</span>' +
                '<span style="margin-left:5px;color:#000000">' +
                '<span style="display:inline-block;width:100px;">' + item.seriesName + ' User</span>' +
                '<span style="font-weight:bold">' + item.value + '%</span>' +
                '<span style="color:#191919"> out </span>' +
                '<span style="font-weight:bold;color:#f43146">' + (100 - item.value) + '%</span>' +
                '</span>' +
                '</div>';
        });
        return htmlString
    },
    data: [
        { "Month": 'Jan', "Domestic": 33 },
        { "Month": 'Feb', "Domestic": 27 },
        { "Month": 'Mar', "Domestic": 31 },
        { "Month": 'Apr', "Domestic": 30 },
        { "Month": 'May', "Domestic": 37 },
        { "Month": 'Jun', "Domestic": 36 },
        { "Month": 'Jul', "Domestic": 42 },
        { "Month": 'Aug', "Domestic": 22 },
        { "Month": 'Sep', "Domestic": 17 },
        { "Month": 'Oct', "Domestic": 40 },
        { "Month": 'Nov', "Domestic": 42 },
        { "Month": 'Dec', "Domestic": 32 }
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true,
    },
    yAxis: {
        name: 'Percentage(%)'
    },
};
