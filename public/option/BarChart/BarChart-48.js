const option = {
    theme: 'light',
    padding: [50, 30, 20, 20],
    legend: {
        show: false,
    },
    color: ['#5CB300'],
    data: [
        { "Month": 'Jan', "Domestic": 28, },
        { "Month": 'Feb', "Domestic": 25, },
        { "Month": 'Mar', "Domestic": 35, },
        { "Month": 'Apr', "Domestic": 30, },
        { "Month": 'May', "Domestic": 37, },
        { "Month": 'Jun', "Domestic": -14, },
        { "Month": 'Jul', "Domestic": 20, },
        { "Month": 'Aug', "Domestic": 22, },
        { "Month": 'Sep', "Domestic": 29, },
        { "Month": 'Oct', "Domestic": 27, },
        { "Month": 'Nov', "Domestic": 30, },
        { "Month": 'Dec', "Domestic": 26, }
    ],
    xAxis: {
        data: "Month",
    },
    yAxis: {
        name: "Percent(%)"
    },
    series: [
        {
            name: 'Domestic',
            data: [
                28, 25, 35, 30, 37,
                {
                    value: -14,
                    itemStyle: {
                        color: '#F23030',
                        borderRadius: [0, 0, 5, 5],
                    }
                }
                , 20, 22, 29, 27, 30, 26
            ],
        }
    ]
};