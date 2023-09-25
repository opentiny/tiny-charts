const option = {
    theme: 'light',
    title:{
        text:'128',
        subtext:'总计',
        textStyle:{
            fontSize:42,
        },
        top:'45%',
    },
    legend: {
        show: true,
        //可滚动的图例,生成切换按钮
        type:'scroll',
        //切换按钮在图例的位置
        pageButtonPosition:'end',
        //图例的宽度
        width:'80%',
        position:{
            left: 'center',
            bottom:40
        },
    },
    label:{
        show: true,
        type:'percent',
        line: false
    },
    data:[     
        {value: 20, name: '一般告警' },
        {value: 9, name: '一般告警2' },
        {value: 14, name: '一般告警3' },
        {value: 8, name: '提示告警' },
        {value: 16, name: '提示告警2' },
        {value: 10, name: '提示告警3' },       
        {value: 16, name: '提示告警4' },      
        {value: 4,name: '严重告警'},                              
        {value: 6, name: '严重告警2' },
        {value: 13, name: '严重告警3'},
    ]
};

