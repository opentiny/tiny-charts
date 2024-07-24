const option = {
    theme: 'light',
    padding: [50],
    smooth: true,
    tooltip: {
        // 可移入提示框内
        enterable: true,
        // 提示框跟随鼠标，方便更容易进入到提示框内
        position:(point)=>{
            return point
        },
        formatter: (params) => {
            let htmlString = '';
            params.forEach((item, i) => {
                if (i === 0) {
                    htmlString += (item.name + '<br/>');
                }
                htmlString +=
                    '<div>' +
                    '<span style="width:10px;display:inline-block;height:10px;border-radius:5px; background-color:' + item.color + ';">' +
                    '</span>' +
                    '<span style="margin-left:6px;>' +
                    '<span style="width:100px;display:inline-block;">' + item.seriesName + ' User</span>' +
                    '<span style="font-weight:bold"> ' + item.value + '%</span>' +
                    '<span style="color:gray"> out </span>' +
                    '<span style="color:red">' + (100 - item.value) + '%</span>' +
                    '</span>' +
                    '</div>';
            });
            return htmlString
        }
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 31, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 26, 'Abroad': 38 },
        { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 21 },
        { 'Month': 'Apr', 'Domestic': 33, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 16 },
        { 'Month': 'Jul', 'Domestic': 41, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 31 },
        { 'Month': 'Oct', 'Domestic': 45, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 43, 'Abroad': 23 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};
