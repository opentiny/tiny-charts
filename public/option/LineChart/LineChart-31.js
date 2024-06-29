const option = {
    theme: 'light',
    padding: [50, 60, 50, 20],
    data: [
        { 'Month': 1710217090000, 'Domestic': 31, 'Abroad': 37 },
        { 'Month': 1710217150000, 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 1710217210000, 'Domestic': 31, 'Abroad': 21 },
        { 'Month': 1710217270000, 'Domestic': 32, 'Abroad': 15 },
        { 'Month': 1710217330000, 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 1710217390000, 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 1710217450000, 'Domestic': 42, 'Abroad': 21 },
        { 'Month': 1710217510000, 'Domestic': 21, 'Abroad': 12 },
        { 'Month': 1710217570000, 'Domestic': 17, 'Abroad': 31 },
        { 'Month': 1710217630000, 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 1710217690000, 'Domestic': 42, 'Abroad': 31 },
        { 'Month': 1710217750000, 'Domestic': 31, 'Abroad': 11 }
    ],
    xAxis: {
        name: 'Time',
        data: 'Month',
        fullGrid: true,
        formatter: (value, index) => {
            let date = new Date(Number(value));
            let day = [date.getFullYear(), date.getMonth(), date.getDate()].join('-');
            let time = [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
            return day + '\n' + time;
        }
    },
    yAxisName: 'Units',
};