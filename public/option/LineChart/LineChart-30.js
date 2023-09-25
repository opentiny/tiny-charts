const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    step: true, //true属性配置阶梯线
    legend: {
        show: false,
    },
    data: [
        { 'Time': '10:10', 'status': 2, },
        { 'Time': '10:20', 'status': 1, },
        { 'Time': '10:30', 'status': 1, },
        { 'Time': '10:40', 'status': 1, },
        { 'Time': '10:50', 'status': 2, },
        { 'Time': '11:00', 'status': 0, },
        { 'Time': '11:10', 'status': 3, },
        { 'Time': '11:20', 'status': 3, },
        { 'Time': '11:30', 'status': 2, },
        { 'Time': '11:40', 'status': 2, },
    ],
    xAxis: {
        data: 'Time'
    },
    yAxis: {
        max: 4,
        axisLabel: {
            formatter: (value) => {
                let status = ['Unknow', 'Failed', 'Successed', 'Running', 'Pending'];
                return status[value];
            }
        }
    },
    tipHtml: (params, ticket, callback) => {
        let htmlString = '';
        let name = '';
        let status = ['Unknow', 'Failed', 'Successed', 'Running', 'Pending'];
        params.map((item, index) => {
            htmlString = '<div>' +
                '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;margin-right:5px;background-color:' + item.color + ';">' +
                '</span>' +
                '<span>' + item.name + ' </span>' +
                '<span style="font-weight:bold">' + status[item.data] + '</span>' +
                '</div>';

        });
        return htmlString
    },
};
