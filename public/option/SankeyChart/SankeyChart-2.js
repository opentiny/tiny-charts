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
    theme:'light',
    padding:[70,70,70,70],
    //颜色组，循环使用，从左至右纵向取色
    color: ['#1F55B5', '#278661', '#B62BF7', '#26616B','#FDC000','#745EF7'],
    //页面节点矩形是否可被拖动，布尔值，默认值为true
    draggable:true,
    //widthSpace,自定义节点矩形宽度及每列间距,默认[10，30]
    //第一个值与节点矩形宽度正相关
    //第二个值与节点距下方节点的间距正相关
    widthSpace:[10,30],
    //自定义鼠标悬浮提示框，非必选
    tipHtml:(params, ticket, callback) => {
        if (params.data.value !== 0 && params.data.valueBfb !== '0%') {
            let htmlString = '';
            if (params.name.includes('>')) {
              params.name = params.name.replace('>', '---');
            }
            var value = params.data.value || params.value;
            htmlString +=
              '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
              params.name +
              '</span>' +
              '<br/>' +
              '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
              'value' +
              '  :  ' +
              value +
              '</span>';
            return htmlString;
          }
      },
    //data:图表数据
    //nodes:页面节点集合;
    //name:节点名称;
    //value:节点的数据值,与其高度大小正相关;未定义value,则默认为0;
    //links:页面节点之间的连接关系;
    //source:节点起点;
    //target:节点终点;
    //value:传递的数据值,与连接带的高度大小正相关;
    data:{
        nodes: [
          { name: '面粉', value: 150 },
          { name: '鸡蛋', value: 24 },
          { name: '油', value: 6 },
          { name: '面包', value: 108 },
          { name: '蛋糕', value: 9 },
          { name: '蛋饼', value: 9 },
          { name: '包子', value: 27 },
          { name: '手抓饼', value: 9 },
          { name: '杂粮煎饼', value: 18 },
          { name: '早餐', value: 180 },
        ],
        links: [
          { source: '面粉', target: '面包', value: 103 },
          { source: '面包', target: '早餐', value: 108 },
          { source: '面粉', target: '蛋糕', value: 4 },
          { source: '蛋糕', target: '早餐', value: 9 },
          { source: '面粉', target: '蛋饼', value: 4 },
          { source: '蛋饼', target: '早餐', value: 9 },
          { source: '面粉', target: '包子', value: 22 },
          { source: '包子', target: '早餐', value: 27 },
          { source: '面粉', target: '手抓饼', value: 4 },
          { source: '手抓饼', target: '早餐', value: 9 },
          { source: '面粉', target: '杂粮煎饼', value: 13 },
          { source: '杂粮煎饼', target: '早餐', value: 18 },
          { source: '鸡蛋', target: '面包', value: 4 },
          { source: '鸡蛋', target: '蛋糕', value: 4 },
          { source: '鸡蛋', target: '蛋饼', value: 4 },
          { source: '鸡蛋', target: '包子', value: 4 },
          { source: '鸡蛋', target: '手抓饼', value: 4 },
          { source: '鸡蛋', target: '杂粮煎饼', value: 4 },
          { source: '油', target: '面包', value: 1 },
          { source: '油', target: '蛋糕', value: 1 },
          { source: '油', target: '蛋饼', value: 1 },
          { source: '油', target: '包子', value: 1 },
          { source: '油', target: '手抓饼', value: 1 },
          { source: '油', target: '杂粮煎饼', value: 1 }
        ]
      }
};
