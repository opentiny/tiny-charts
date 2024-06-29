/*
* tipHtml 回调函数控制自定义悬浮框：
* ( params: Array, 
*   ticket: string, 
*   callback: (ticket: string, html: string)
* ) => string | HTMLElement | HTMLElement[]
*
* 通过回调函数的参数，自行制作一个 HTML 片段
* 详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter 
*/
const option = {
    theme: 'light',
    padding: [50, 30, 54, 20],
    smooth: true,
    tipHtml: (params, ticket, callback) => {
        let htmlString = '';
        params.forEach((item, index) => {
            if (index === 0) {
                htmlString += (item.name + '<br/>');
            }
            htmlString +=
                '<div>' +
                    '<span style="width:10px;display:inline-block;height:10px;border-radius:5px; background-color:' + item.color + ';">' +
                    '</span>' +
                    '<span style="margin-left:5px;>' +
                        '<span style="width:100px;display:inline-block;">' + item.seriesName + ' User</span>' +
                        '<span style="font-weight:bold"> ' + item.value + '%</span>' +
                        '<span style="color:gray"> out </span>' +
                        '<span style="color:red">' + (100 - item.value) + '%</span>' +
                    '</span>' +
                '</div>';
        });
        return htmlString
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 31, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 21 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 43, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};
