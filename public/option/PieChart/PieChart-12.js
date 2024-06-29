const option = {
    theme: 'light',
    label: {
        show: true,
        type: 'percent',
        line: true,
        labelHtml: '{a|}{b|{b}:}{c|{d}%}',
        rich: {
            a: {
                width: 12,
                height: 12,
                backgroundColor: {
                    image: './image/charts/pie/ic_jiantou_hong.svg'
                },
            },
            b: {
                padding: [2, 4, 0, 0]
            },
            c: {
                fontWeight: 'bold',
                padding: [2, 0, 0, 0]
            }
        }
    },
    data: [
        { value: 100, name: 'VPC' },
        { value: 90, name: 'IM' },
        { value: 49, name: 'EIP' },
        { value: 14, name: 'SG' },
    ]
};
