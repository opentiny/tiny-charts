const option = {
    theme: 'light',
    name: '广东省',
    data: [{
        name: '深圳',
        value: 0.7
    }, {
        name: '广州',
        value: 0.6
    }, {
        name: '顺德',
        value: 0.5
    }],
    label: {
        formatter: '{a}',
        fontSize: 40,
        color: 'green',
    },
    tipHtml: (params, ticket, callback) => {
        let htmlString = `城市：${params.name}<br/>` + `购房比：${params.value}`;
        return htmlString
    },
    legend: {
        show: false,
    }
};
