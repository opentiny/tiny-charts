const option = {
    theme: 'light',
    position: {
        center: ['50%', '50%'],
        radius: '45%',
    },
    color: '#5CB300',
    splitNumber: 5,
    splitLine: {
        show: false,
    },
    text: {
        offset: ['0%', '35%'],
        formatter: function (value) {
            return '{value|' + value + '}{unit|%}\n{name|任职匹配率}\n\n\n{status|正常}'
        },
        formatterStyle: {
            value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#191919',
                textShadowColor: '#ffffff',
                textShadowBlur: 1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [0, 0, 30, 0]
            },
            unit: {
                fontSize: 12,
                fontStyle: 'italic',
                color: '#191919',
                textShadowColor: '#ffffff',
                textShadowBlur: 1,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                padding: [22, 0, 30, 6],
            },
            name: {
                fontSize: 14,
                color: '#595959',
                padding: [15, 5, 5, 5],
            },
            status: {
                fontSize: 12,
                color: '#5CB300',
                backgroundColor: '#f5f5f5',
                width: 120,
                height: 32,
                borderRadius: 20,
                align: 'center',
            },
        },
    },
    data: [
        {
            value: 87.8,
            name: 'Winning Percentage',
        },
    ]
};
