/*
* tipHtml 回调函数控制自定义悬浮框：
* ( params: Array,
*   ticket: string,
*   callback: (ticket: string, html: string)
* ) => string | HTMLElement | HTMLElement[]
*
* 通过回调函数的参数，自行制作一个 HTML 片段
* 详细参数解释见： https://echarts.apache.org/zh/option.html#tooltip.formatter
*/
const option = {
    //图表名称
    name: 'AssembleBubbleChart',
    //图表类型(非嵌套聚合式)
    type:'non-nested-aggregate',
    theme: 'light',
    //chartPosition.radius 气泡图半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
    //center默认值为['50%','50%'],radius默认值为'80%'。
    chartPosition:{
        center:['50%','50%'],
        radius:'80%',
    },
    //颜色组，循环使用
    color: ['#1F55B5', '#278661','#B62BF7', '#26616B'],
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
    // 自定义鼠标悬浮提示框，非必选
    tipHtml:(params, ticket, callback)=>{
      let htmlString = '';
      var bgColor=params.data.colorSec||params.data.color
      htmlString += 
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:'+
        bgColor+';">'+'</span>'+
        '<span style="display:inline-block;margin-left:5px">'+params.data.type+'</span>'+'<br/>'+
        '<span style="display:inline-block;">'+params.data.label+'</span>'+
        '<span style="display:inline-block;margin-left:10px;">'+params.data.value+'</span>'+'<br/>'
      return htmlString
    },
    //data: 图表数据
    //value:数据数值，与气泡的大小正相关;
    //type: 数据分组，用于气泡的分类;
    //label:数据文本，展示气泡的文本信息;
    //showLabel:布尔值，默认为false，气泡文本信息是否展示;
    data: [  
          {type: 'VPC',value: 34,label: 'turkey',showLabel:true},
          {type: 'VPC',value: 30,label: 'italy',showLabel:true},
          {type: 'VPC',value: 41,label: 'Germany',showLabel:true},
          {type: 'VPC',value: 30,label: 'poland'},
          {type: 'VPC',value: 30,label: 'France',showLabel:true},
          {type: 'VPC',value: 34,label: 'Mexico'},
          {type: 'VPC',value: 38,label: 'Finland',showLabel:true},
          {type: 'VPC',value: 36,label: 'Sweden',showLabel:true},
          {type: 'VPC',value: 28,label: 'Norway'},
          {type: 'VPC',value: 28,label: 'Iceland'},
          {type: 'VPC',value: 28,label: 'Denmark',showLabel:true},
          {type: 'VPC',value: 28,label: 'Czech',showLabel:true},
          {type: 'VPC',value: 28,label: 'Ireland'},
          {type: 'EIP',value: 45,label: 'Russia',showLabel:true},
          {type: 'EIP',value: 45,label: 'India'},
          {type: 'EIP',value: 34,label: 'Austria',showLabel:true},
          {type: 'EIP',value: 45,label: 'China',showLabel:true},
          {type: 'EIP',value: 47,label: 'Japan',showLabel:true},
          {type: 'EIP',value: 38,label: 'Korea'},
          {type: 'EIP',value: 36,label: 'Malaysia'},
          {type: 'EIP',value: 28,label: 'Thailand',showLabel:true},
          {type: 'EIP',value: 28,label: 'Mongolia'},
          {type: 'EIP',value: 28,label: 'Cambodia'},
          {type: 'EIP',value: 28,label: 'Myanmar',showLabel:true},
          {type: 'EIP',value: 28,label: 'Singapore',showLabel:true},
          {type: 'EIP',value: 41,label: 'Korea'},
          {type: 'SG',value: 39,label: 'Canada',showLabel:true},
          {type: 'SG',value: 35,label: 'Brazil'},
          {type: 'SG',value: 47,label: 'USA',showLabel:true},
          {type: 'SG',value: 38,label: 'Mexico'},
          {type: 'SG',value: 36,label: 'Greenland',showLabel:true},
          {type: 'SG',value: 28,label: 'Panama'},
          {type: 'SG',value: 28,label: 'Cuba',showLabel:true},
          {type: 'SG',value: 28,label: 'Haiti',showLabel:true},
          {type: 'SG',value: 28,label: 'Dominica'},
          {type: 'SG',value: 28,label: 'Bermuda'},
          {type: 'VPC2',value: 38,label: 'Africa',showLabel:true},
          {type: 'VPC2',value: 36,label: 'Congo',showLabel:true},
          {type: 'VPC2',value: 28,label: 'Egypt',showLabel:true},
          {type: 'VPC2',value: 28,label: 'Ghana'},
          {type: 'VPC2',value: 28,label: 'Gambia',showLabel:true},
          {type: 'VPC2',value: 28,label: 'Kenya'},
          {type: 'VPC2',value: 28,label: 'Libya'},
          {type: 'VPC2',value: 28,label: 'Mali'},
          {type: 'VPC2',value: 28,label: 'Niger',showLabel:true},
          {type: 'VPC2',value: 28,label: 'Tunisia',showLabel:true},
          {type: 'VPC2',value: 28,label: 'Uganda'},
          {type: 'VPC2',value: 28,label: 'Botswana',showLabel:true},                
    ]
};

