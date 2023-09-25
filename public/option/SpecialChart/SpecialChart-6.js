const option = {
    //图标名称
    name:'MarkerLineChart',
    theme: 'light',
    data:[
      {time:'09:00',value:40},
      {time:'10:00',value:11},
      {time:'11:00',value:15},
      {time:'12:00',value:35},
      {time:'13:00',value:37},
      {time:'14:00',value:30},
      {time:'15:00',value:18},
      {time:'16:00',value:24.5},
    ],
    smooth:false,
    color: ['#779182'],
    tooltip:{
        show:true
    },
    xAxis:'time',
    yAxis:{
      interval: 15,
      max: 45,
    },
    yAxisName:'Ad%',
    //设置特殊标记点
    mark:{
       //标记点的大小
       symbolSize:'8',
       //标记点的颜色
       itemStyle: {
        color: params => {
          return '#779182';
        },
      },
       //标记文本信息
       formatter: params => {
        if (params.dataIndex === 7) return '24.58';
        return '';
      },
       //标记文本样式
       textStyle: {
        color: 'rgba(238,238,238,0.8)',
        fontSize: 14,
      },
    },
    //设置标记区域背景
    markPoint: {
        data: [
          {
            xAxis: 7,
            yAxis: 0,
            symbolSize: [46, 119],
            symbolOffset: [0, -60],
            symbol: 'image://public/image/charts/legend/rectangle-green.png',
          },
          {
            xAxis: 7,
            yAxis: 0,
            symbolSize: [18, 13],
            symbolOffset: [0, -20],
            symbol: 'image://public/image/charts/legend/check.png',
          },
        ],
      },
      markLine:{
        //图形是否不响应鼠标事件
        silent:true,
        top:24.5,
        topLable:'目标:24.5',
        topColor:'#779182',
        labelColor:'#779182',
        //配置文本位置,默认为insideEndTop
        labelPosition:'insideStartTop',
        fontSize:12,
        //配置文本距离labelPosition的水平与垂直距离,默认[0,0]
        distance:[0,10],
    }
};

