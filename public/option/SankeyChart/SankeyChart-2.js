const option = {
  theme: 'light',
  padding: [70, 70, 70, 70],
  widthSpace: [10, 30],
  tooltip: {
    formatter: (params, ticket, callback) => {
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
    }
  },
  data: {
    nodes: [
      { name: '面粉', value: 152 },
      { name: '鸡蛋', value: 24 },
      { name: '油', value: 6 },
      { name: '面包', value: 108 },
      { name: '蛋糕', value: 8 },
      { name: '蛋饼', value: 9 },
      { name: '包子', value: 27 },
      { name: '手抓饼', value: 9 },
      { name: '杂粮煎饼', value: 18 },
      { name: '早餐', value: 181 },
    ],
    links: [
      { source: '面粉', target: '面包', value: 103 },
      { source: '面包', target: '早餐', value: 108 },
      { source: '面粉', target: '蛋糕', value: 3 },
      { source: '蛋糕', target: '早餐', value: 9 },
      { source: '面粉', target: '蛋饼', value: 4 },
      { source: '蛋饼', target: '早餐', value: 9 },
      { source: '面粉', target: '包子', value: 22 },
      { source: '包子', target: '早餐', value: 25 },
      { source: '面粉', target: '手抓饼', value: 4 },
      { source: '手抓饼', target: '早餐', value: 9 },
      { source: '面粉', target: '杂粮煎饼', value: 13 },
      { source: '杂粮煎饼', target: '早餐', value: 18 },
      { source: '鸡蛋', target: '面包', value: 3 },
      { source: '鸡蛋', target: '蛋糕', value: 4 },
      { source: '鸡蛋', target: '蛋饼', value: 4 },
      { source: '鸡蛋', target: '包子', value: 4 },
      { source: '鸡蛋', target: '手抓饼', value: 4 },
      { source: '鸡蛋', target: '杂粮煎饼', value: 4 },
      { source: '油', target: '面包', value: 2 },
      { source: '油', target: '蛋糕', value: 1 },
      { source: '油', target: '蛋饼', value: 1 },
      { source: '油', target: '包子', value: 1 },
      { source: '油', target: '手抓饼', value: 1 },
      { source: '油', target: '杂粮煎饼', value: 2 }
    ]
  }
};
