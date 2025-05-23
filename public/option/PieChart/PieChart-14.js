const option = {
    theme: 'light',
    position: {
        center: ['40%', '50%'],
    },
    legend: {
        show: true,
        position:{
            right: '8%',
            top: 'center'
        },
        orient:'vertical',
        // legend.formatter 用于自定义图例文本
        formatter: (name)=>{
            let data =  [                             
                {value: 100,name: 'VPC'},
                {value: 90, name: 'IM' },
                {value: 49, name: 'EIP'},
                {value: 14, name: 'SG' },
            ]
            let total=data.reduce((a, b) => {
                return a + b.value;
            }, 0);
            let item = data.filter((item) => item.name === name)[0];
            return '{title|' + name + '}{value1|' + item.value + '}{split||}{value2|' + total + '}'
        },
    },
    label:{
        show: true,
        type:'percent',
        line: true,
    },
    data:[                             
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        {value: 10, name: 'SG' },
    ]
};