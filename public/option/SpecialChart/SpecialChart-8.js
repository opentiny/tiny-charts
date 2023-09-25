const option = {   
    //图表名称
    name: 'StackProcessBarChart',
    theme: 'light',
    //chartPadding控制图表距离容器的上、右、下、左padding值
    chartPadding: [32, 32, 0, 32], 
    //颜色组，循环使用
    color:['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41','#00aaee'],
    barWidth:25,
    calibrationValue:250,
    event:{
        'series':{
            click:(params)=>{
              // 处理逻辑
            },
        },
    },
    //数据
    data: [
    {
        name: 'China',
        children: [
        { type: 'Game', value: 30 },
        { type: 'Move', value: 20 },
        { type: 'Animation', value: 45 },
        { type: 'Fiction', value: 60 },
        ],
    },
    {
        name: 'Mexico',
        children: [
        { type: 'Game', value: 12 },
        { type: 'Move', value: 14 },
        { type: 'Animation', value: 33 },
        { type: 'Fiction', value: 44 },
        ],
    },
    {
        name: 'Canada',
        children: [
        { type: 'Game', value: 35 },
        { type: 'Move', value: 45 },
        { type: 'Animation', value: 19 },
        { type: 'Fiction', value: 33 },
        ],
    },
    {
        name: 'Sweden',
        children: [
        { type: 'Game', value: 34 },
        { type: 'Move', value: 10 },
        { type: 'Animation', value: 8 },
        { type: 'Fiction', value: 66 },
        ],
    },
    {
        name: 'Russia',
        children: [
        { type: 'Game', value: 77 },
        { type: 'Move', value: 44 },
        { type: 'Animation', value: 55 },
        { type: 'Fiction', value: 66 },
        ],
    },
    ]  
};
