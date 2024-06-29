[
  {
    theme: 'light',
    padding: ['10%', '10%', '15%', '15%'],
    draggable: false,
    widthSpace: [10, 30],
    nodeAlign: 'right',
    data: {
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
  }
]