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
    //图表类型(非嵌套式)
    type:'non-nested',
    theme: 'light',
    //chartPosition.radius 气泡图半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
    //center默认值为['50%','50%'],radius默认值为'80%'。
    chartPosition:{
        center:['50%','50%'],
        radius:'80%',
    },
    //颜色组，循环使用
    color: ['#1F55B5', '#278661', '#B62BF7', '#1F55B5'],
    //设置气泡之间的距离，默认值为50。
    distance: 50,
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
    data:  [
        {type: 'VPC',value: 1076,label: '1076',showLabel:true},
        {type: 'VPC',value: 362,label: '362',showLabel:true},
        {type: 'EIP',value: 530,label: '530',showLabel:true},
        {type: 'EIP',value: 183,label: '183',showLabel:true},
        {type: 'SG',value: 530,label: '530',showLabel:true},
        {type: 'WJT',value: 100,label: '100'},
        {type: 'WJT',value: 100,label: '100'},
        {type: 'WJT',value: 60,label: '100'},
        {type: 'WJT',value: 100,label: '100'},
      ],
    // 自定义设置图表事件
    event:{
      'series':{
          click:(params)=>{
              console.log(params)
          },
          dblclick:(params)=>{
              
          }
      }
    }
};

