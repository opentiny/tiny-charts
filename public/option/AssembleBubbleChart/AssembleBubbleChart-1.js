const option = {
  // 图表类型(非嵌套式)
  type: 'non-nested',
  theme: 'hdesign-light',
  chartPosition: {
    center: ['50%', '50%'],
    radius: '80%',
  },
  // 颜色组，循环使用
  // color: ['#1F55B5', '#278661', '#B62BF7', 'rgba(31,85,181,.2)'],
  distance: 50,
  legend: {
    show: true,
    position: {
      left: 'center',
      bottom: 15
    }
  },
  tooltip: {
    formatter: (params, ticket, callback) => {
      let htmlString = '';
      var bgColor = params.data.color;
      htmlString +=
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:' +
        bgColor + ';"></span>' +
        '<span style="display:inline-block;margin-left:5px">' + params.data.type + '</span><br/>' +
        '<span style="display:inline-block;">' + params.data.label + '</span>' +
        '<span style="display:inline-block;margin-left:10px;">' + params.data.value + '</span><br/>';
      return htmlString;
    },
  },
  data: [
    { type: '亚洲', value: 960, label: '中国', showLabel: true },
    { type: '亚洲', value: 300, label: '印度', showLabel: true },
    { type: '欧洲', value: 150, label: '德国', showLabel: true },
    { type: '欧洲', value: 160, label: '法国', showLabel: true },
    { type: '澳洲', value: 700, label: '澳大利亚', showLabel: true },
    { type: '非洲', value: 100, label: '埃及' },
    { type: '非洲', value: 100, label: '南非' },
    { type: '非洲', value: 60, label: '冈比亚' },
    { type: '非洲', value: 100, label: '埃塞尔比亚' },
  ],
  // 自定义设置图表事件
  event: {
    'series': {
      click: (params) => {

      },
      dblclick: (params) => {

      }
    }
  }
};

