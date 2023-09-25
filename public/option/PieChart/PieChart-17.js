const option = {
    theme: 'light',
    type:'circle', // type = 'circle' 表示为圆环图
    // 是否关闭hover态的效果，默认为false
    silent:true,
    //数据总和为0时只显示背景色
    stillShowZeroSum:false,
    title:{
        text:`{a|0}\n{b|链路总数}`,
        textStyle: {
            rich: {
                a: {
                    color: '#191919',
                    fontSize: 50,
                },
                b: {
                    fontSize: 16,
                    color: '#999',
                    padding: [10, 0, 0, 0]
                },
            }
        },
    },
    legend: {
        show: true,
    },
    label:{
        show: false,
    },
    data:[                             
        {value: 0,name: 'VPC'},
        {value: 0,name: 'EIP'},
    ],
};
