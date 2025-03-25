const option = {
    theme: 'light',
    title: {
        text: '{a|数量监测}\n{b|平台监测站}{c|}\n{d|373}{e|个} ',
        textStyle: {
            rich: {
                a: {
                    color: '#999',
                    fontSize: 20,
                    padding: [0, 0, 10, 0]
                },
                b: {
                    color: '#999',
                    fontSize: 16,
                    padding: [0, 10, 0, 0]
                },
                c: {
                    width: 12,
                    height: 12,
                    backgroundColor: {
                        image: './image/charts/pie/ic_jiantou_hong.svg'
                    },
                },
                d: {
                    fontSize: 36,
                    fontWeight: 'bold',
                    padding: [10, 0, -20, 20]
                },
                e: {
                    fontSize: 24,
                    color: '#bbbbbb',
                    padding: [10, 0, -20, 0]
                },
            }
        },
    },
    label: {
        show: false,
    },
    data: [
        { value: 100, name: 'VPC' },
        { value: 90, name: 'IM' },
        { value: 49, name: 'EIP' },
        { value: 14, name: 'SG' },
    ]
};