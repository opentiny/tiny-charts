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
    { type: 'VPC', value: 1076, label: '1076', showLabel: true },
    { type: 'VPC', value: 362, label: '362', showLabel: true },
    { type: 'EIP', value: 530, label: '530', showLabel: true },
    { type: 'EIP', value: 183, label: '183', showLabel: true },
    { type: 'SG', value: 530, label: '530', showLabel: true },
    { type: 'WJT', value: 100, label: '100' },
    { type: 'WJT', value: 100, label: '100' },
    { type: 'WJT', value: 60, label: '100' },
    { type: 'WJT', value: 100, label: '100' },
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

