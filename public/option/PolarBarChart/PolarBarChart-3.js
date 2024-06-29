const option = {
    theme: 'light',
    position: {
        radius: ['8%', '60%'],
    },
    tipHtml: (params) => {
        let name = params.name;
        let value = params.value;
        let htmlString = '<div>' +
            '<span style="display:inline-block;min-width:50px;">名称：</span>' +
            '<span style="font-weight:bold">' + name + '</span>' +
            '</div>';
        htmlString +=
            '<div>' +
            '<span style="display:inline-block;min-width:50px;">数值：</span>' +
            '<span style="font-weight:bold">' + value + '</span>' +
            '</div>';
        return htmlString
    },
    legend: {
        show: false,
    },
    data: [
        {
            name: 'cluster-1',
            value: 9,
        },
        {
            name: 'cluster-2',
            value: 8,
        },
        {
            name: 'cluster-3',
            value: 7,
        },
        {
            name: 'cluster-4',
            value: 6,
        },
        {
            name: 'cluster-5',
            value: 4,
        }
    ],
};