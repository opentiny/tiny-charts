/*
* 多重圆环注意点：
* 1. type = 'multi-circle' 表示启动多重圆环
* 2. 在 data.children 中添加外环数据
* 3. 在 legend.offset 中添加图例偏移量，用于多组图例之间的便宜距离
*/
const option = {
    theme: 'light',
    type:'multi-circle',
    color: [
        '#fa2a2d',
        '#ff7500',
        '#ffbf00',
        '#41ba41',
        '#00aaee'
    ], 
    title:{
        text:'230',
        subtext:'总数量\n(用户数)',
        top:'40%',
        itemGap:12,
        textStyle:{
          fontSize:42,
        },
        left:'25%',
        top:'43%',
        textAlign:'center',
    },
    position:{
        center:['25%','50%']
    },
    legend: {
        show: true,
        offset: '13%', // 图例偏移量可以为绝对像素值，也可以为百分比
        position:{
            left: '45%',
            top: '10%'
        },
        orient:'vertical'
    },
    data:[
        {
            name:'VPC',
            value:100,
            children:[
                {
                    name:'VPC_S_1',
                    value:20,
                    children:[
                        {name:'VPC_T_1',value:10}, 
                        {name:'VPC_T_2',value:10},
                    ]
                },
                {
                    name:'VPC_S_2',
                    value:80,
                    children:[
                        {name:'VPC_T_3',value:40}, 
                        {name:'VPC_T_4',value:40},
                    ]
                },
            ]
        },
        {
            name:'IM',
            value:80,
            children:[
                {
                    name:'IM_S_1',
                    value:30,
                    children:[
                        {name:'IM_T_1',value:10}, 
                        {name:'IM_T_2',value:20},
                    ]
                },
                {
                    name:'IM_S_2',
                    value:50,
                    children:[
                        {name:'IM_T_3',value:20}, 
                        {name:'IM_T_4',value:30},
                    ]
                }
            ]
        },
        {
            name:'EIP',
            value:50,
            children:[
                {
                    name:'EIP_S_1',
                    value:10,
                    children:[
                        {name:'EIP_T_1',value:5}, 
                        {name:'EIP_T_2',value:5},
                    ]
                },
                {
                    name:'EIP_S_2',
                    value:40,
                    children:[
                        {name:'EIP_T_3',value:20}, 
                        {name:'EIP_T_4',value:20},
                    ]
                }
            ]
        }
    ]
};
