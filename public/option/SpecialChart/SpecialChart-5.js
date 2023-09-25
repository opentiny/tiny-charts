const option = {
    //图标名称
    name:'MarkerLineChart',
    theme: 'light',
    data:[
      {time:'09:00',value:35},
      {time:'10:00',value:35},
      {time:'11:00',value:24},
      {time:'12:00',value:24},
      {time:'13:00',value:24},
      {time:'14:00',value:30},
      {time:'15:00',value:30},
      {time:'16:00',value:30},
    ],
    smooth:false,
    color: ['#245BB7'],
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
          if (params.name === '11:00' || params.name === '14:00') return '#2070F3';
          return 'transparent';
        },
      },
       //标记文本信息
       formatter:params=>{
        if (params.name === '11:00') return '-0.23'+'\n煤质变化';
        if (params.name === '14:00') return '+0.17'+'\n煤质变化';
        return '';
       },
       //标记文本样式
       textStyle:{
        color: 'rgba(238,238,238,0.8)',
        fontSize: 12,
        lineHeight: 16,
       },
    },
    //设置标记区域背景
    markPoint: {
        data: [
          {
            //图表标注的xAxis、yAxis,可使用索引
            xAxis: '11:00',
            yAxis: 0,
            //图表标注的宽度及高度,默认[50,50]
            symbolSize: [30, 119], 
            //图表标注的位移值,默认[0,0]
            symbolOffset: [0, -60], 
            //图表标注的背景,默认为pin,可使用base64编码的路径格式
            symbol: 'image://public/image/charts/legend/rectangle-blue.png',
          },
          {
            xAxis: 5,
            yAxis: 0,
            symbolSize: [30, 119],
            symbolOffset: [0, -60],
            symbol: 'image://public/image/charts/legend/rectangle-blue.png',
          },
        ],
      }
};

