const option = {
    theme: 'light',
    color: ['#1F55B5'],
    chartPadding: [50, 120, 50, 120],
    data: [
        { name: 'BRAS 01', value: 80 },
        { name: 'BRAS 02', value: 60 },
        { name: 'BRAS 03', value: 40 },
        { name: 'BRAS 04', value: 31 },
        { name: 'BRAS 05', value: 25 },
    ],
    opacity: .8,
    text: {
        fontSize: '12',
        show: true
    },
    coincide: '-100%',
    yAxisName: 'Units',
    tipHtml: (params, ticket, callback) => {
        let htmlString = '';
        htmlString +=
            `<span style="display:inline-block;margin-right:5px;height:10px;">name : ${params.name}</span>` +
            '<br/>' +
            '<span style="display:inline-block;margin-right:5px;height:10px;">' +
            'value' +
            `  :  ${params.value}</span>`;
        return htmlString;
    }
};