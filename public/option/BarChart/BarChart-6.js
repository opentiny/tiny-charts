const option = {
    theme: 'light',
    padding: [30, 80, 50, 20],
    legend: {
        show: true,
    },
    type: 'stack',
    data: [
        { 'Name': 'Elastic', 'Domestic': 31, 'Abroad': 20, 'Other': 20 },
        { 'Name': 'Bare Metal Server', 'Domestic': 30, 'Abroad': 6, 'Other': 20 },
        { 'Name': 'Object Store', 'Domestic': 27, 'Abroad': 10, 'Other': 20 },
        { 'Name': 'Cloud Hard Drive', 'Domestic': 6, 'Abroad': 37, 'Other': 20 },
    ],
    direction: 'horizontal',
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Units'
    }
};
