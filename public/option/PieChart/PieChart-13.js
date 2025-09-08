const option = {
    theme: 'hdesign-light',
    title: {
        text: '{a|225}{b|GB}',
        subtext: '总数',
        itemGap: 4,
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                },
                b: {
                    fontSize: 14,
                    padding: [15, 0, 0, 0]
                }
            }
        },
        subtextStyle: {
            fontSize: 14
        }
    },
    legend: {
        show: true,
        position: {
            right: '8%',
            top: 'center'
        },
        orient: 'vertical',
        // legend.formatter 用于自定义图例文本
        formatter: (name) => {
            let data = [
                { value: 100, name: 'VPC' },
                { value: 90, name: 'IM' },
                { value: 49, name: 'EIP' },
                { value: 14, name: 'SG' },
            ]
            let item = data.filter((item) => item.name === name)[0];
            return '{title|' + name + '}{value|' + item.value + 'GB}'
        }
    },
    tooltip: {

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