/*
* 多重圆环注意点：
* 1. type = 'multi-circle' 表示启动多重圆环
* 2. 在 data.children 中添加外环数据
* 3. 在 legend.offset 中添加图例偏移量，用于多组图例之间的便宜距离
*/
const option = {
    theme: 'light',
    type:'multi-circle',
    position:{
        center:['50%','45%']
    },
    title:{
        text:'345',
        subtext:'总数量\n(用户数)',
        top:'40%',
        itemGap:12,
        textStyle:{
          fontSize:42,
        },
    },
    legend: {
        show: true,
        offset: 30, // 图例偏移量可以为绝对像素值，也可以为百分比
        position:{
            left: 'center',
            bottom: 100
        }
    },
    data:[
        {
            name:'VPC',
            value:100,
            children:[
                {name:'VPC_1',value:20},
                {name:'VPC_2',value:80},
            ]
        },
        {
            name:'IM',
            value:80,
            children:[
                {name:'IM_1',value:30},
                {name:'IM_2',value:50}
            ]
        },
        {
            name:'EIP',
            value:50,
            children:[
                {name:'EIP_1',value:10},
                {name:'EIP_2',value:40}
            ]
        }
    ]
};
