const option = {
    //图表名称
    name: 'AssembleBubbleChart',
    //图表类型(嵌套式)
    type:'nested',
    theme: 'light',
    //chartPosition.radius 气泡图半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
    //center默认值为['50%','50%'],radius默认值为'80%'。
    chartPosition:{
        center:['50%','50%'],
        radius:'80%',
    },
    //颜色组，循环使用
    color: ['#1F55B5', '#278661', '#B62BF7', '#26616B','#FDC000','#745EF7'],
    //设置气泡之间的距离，默认值为5。
    distance: 5,
    //设置图例是否展示及位置
    legend:{
       show:true,
       position:{
         left:'center',
         bottom:15
       }
    },
    //data: 图表数据
    //value:数据数值，与气泡的大小正相关;
    //type: 数据分组，用于气泡的分类;
    //label:数据文本，展示气泡的文本信息;
    //showLabel:布尔值，默认为false，气泡文本信息是否展示;
    data:[
        {
          type: 'VPC',value:100,label: 'VPC',
          children:[
            {value: 28,label: 'UK',showLabel:true},
            {value: 23,label: 'France',showLabel:true},
            {value: 23,label: 'Belgium',showLabel:true},
            {value: 23,label: 'Finland'},
            {value: 20,label: 'Denmark'},
            {value: 23,label: 'TR',showLabel:true},
          ]
        },
        {
          type: 'EIP',value:100,label: 'EIP',
          children:[
            {value: 23,label: 'Angola',showLabel:true},
            {value: 23,label: 'Ghana',showLabel:true},
            {value: 23,label: 'Congo',showLabel:true},
            {value: 17,label: 'Kenya',showLabel:true},
            {value: 23,label: 'Libya'},
          ]
        },
        {
          type: 'SG',value:100,label: 'SG',
          children:[
            {value: 28,label: 'Brazil'},
            {value: 23,label: 'Argentina'},
            {value: 23,label: 'Bolivia',showLabel:true},
            {value: 23,label: 'Lajos',showLabel:true},
          ]
        },
        {
          type: 'XR',value:100,label: 'XR',
          children:[
            {value: 23,label: 'Australia',showLabel:true},
            {value: 17,label: 'Nauru',showLabel:true},
            {value: 26,label: 'New Zealand'},
          ]
        },
        {
          type: 'YD',value:100,label: 'YD',
          children:[
            {value: 36,label: 'China',showLabel:true},
            {value: 38,label: 'India',showLabel:true},
            {value: 38,label: 'Russia',showLabel:true},
            {value: 36,label: 'Japan'},
            {value: 20,label: 'Iran'},
          ]
        },
        {
          type: 'AJF',value:100,label: 'AJF',
          children:[
            {value: 28,label: 'USA',showLabel:true},
            {value: 23,label: 'Canada',showLabel:true},
            {value: 21,label: 'Mexico',showLabel:true},
          ]
        },     
      ]
};

