const option = {
    theme: 'light',
    title:{
        text:`{a|数量监测}\n{e|平台监测站}{d|}\n{b|373}{c|个} `,
        textStyle: {
            rich: {
                a: {
                    color: '#999',
                    fontSize: 20,
                    padding: [0, 0, 10, 0]
                },
                e: {
                    color: '#999',
                    fontSize: 16,
                    padding: [0, 10, 0, 0]
                },
                b: {
                    color: '#191919',
                    fontSize: 36,
                    fontWeight:'bold',
                    padding: [20, 8, 0, 0]
                },
                c: {
                    fontSize: 24,
                    color: '#bbbbbb',
                    padding: [20, 0, 0, 0]
                },
                d:{
                    width:12,
                    height:12,
                    backgroundColor: {
                        image: './image/Doc/ic_jiantou_hong.svg'
                    },
                    
                }
            }
        },
    },
    label:{
        show: true,
        type:'percent',
        line: false
    },
    data:[                             
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        {value: 14, name: 'SG' },
    ]
};
