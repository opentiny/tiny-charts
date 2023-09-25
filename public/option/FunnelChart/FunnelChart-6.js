const option = {
    theme: 'light',
    gap: 10,
    tipHtml: (params, ticket, callback) => {
        let htmlString = '<div>' +
            '<span style="display:inline-block;min-width:50px;">名称：</span>' +
            '<span style="font-weight:bold">' + params.name + '</span>' +
            '</div>';
        htmlString +=
            '<div>' +
            '<span style="display:inline-block;min-width:50px;">百分比：</span>' +
            '<span style="font-weight:bold">' + params.value + '%</span>' +
            '</div>';
        return htmlString
    },
    data: [
        { value: 100, name: 'Show' },
        { value: 80, name: 'Click' },
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' }
    ]
};
