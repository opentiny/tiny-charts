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
  theme: 'hwCloud-light',
  data: [
    {
      name: '英国',
      children: [
        { type: '人口', value: 10 },
        { type: '海洋', value: 10 },
        { type: '领土', value: 20 }
      ]
    },
    {
      name: '法国',
      children: [
        { type: '人口', value: 10 },
        { type: '海洋', value: 20 },
        { type: '领土', value: 10 }
      ]
    },
    {
      name: '中国',
      children: [
        { type: '人口', value: 40 },
        { type: '海洋', value: 30 },
        { type: '领土', value: 30 }
      ]
    },
    {
      name: '俄罗斯',
      children: [
        { type: '人口', value: 20 },
        { type: '海洋', value: 30 },
        { type: '领土', value: 40 }
      ]
    },
    {
      name: '美国',
      children: [
        { type: '人口', value: 40 },
        { type: '海洋', value: 40 },
        { type: '领土', value: 40 }
      ]
    },
  ],
  //自定义最大值，用于展示data中每项数据在最大值的占据比例，一般可取value最大值。
  //未定义则data中每项数据的占比为其value值与总value值的比值。
  max: 120,
  tipHtml: (params, ticket, callback, data, max = 120) => {
    if (params.data.sum !== 0) {
      let htmlString = '';
      const value = params.data.value || params.value;
      const name = params.data.name || params.name;
      htmlString +=
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' + params.data.type + ' : ' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:' +
        params.color + '">' + '</span>' +
        '<br/>' +
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
        'name' +
        ' : ' + name + '</span>' +
        '<br/>' +
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
        'value' +
        ' : ' + value + '</span>' +
        '<br/>' +
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
        '占比' +
        ' : ' + ((value / (params.data.max || params.data.sum)) * 100).toFixed(2) + '%' + '</span>';
      return htmlString;
    }
  }
};
