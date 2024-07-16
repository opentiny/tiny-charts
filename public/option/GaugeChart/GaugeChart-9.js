const option = {
    theme: 'light',
    tooltip: {
        formatter: (params, ticket, callback) => {
            let htmlString =
                '<div>' +
                '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + params.color + ';">' +
                '</span>' +
                '<span style="margin-left:5px;">' +
                '<span style="display:inline-block;min-width:110px;">' + params.name + '</span>' +
                '<span style="font-weight:bold">' + params.value + '%</span>' +
                '<span style="color:gray"> out </span>' +
                '<span style="color:red">' + (100 - params.value) + '%</span>' +
                '</span>' +
                '</div>';
            return htmlString
        },
    },
    data: [
        {
            value: 71,
            name: 'Utilization rate'
        }
    ]
};
