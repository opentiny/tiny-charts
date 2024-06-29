const option = {
  theme: 'light',
  // 页面节点是否可被拖动，布尔值，默认值为true
  draggable: false,
  // widthSpace,自定义节点矩形宽度及每列间距,默认[10，30]
  widthSpace: [10, 30],
  // value:传递的数据值,与连接带的高度大小正相关;
  sortType: 'unset',// 设置数据的排序方式 ascend decline 
  emptyStatus: 'node', // 空节点的展示状态  churnBar
  label: {
    show: true,
    textArrange: 'horizontal', // 设置名称和数值的排列方向  vertical
    overHide: false,
    rich: {
      name: {
        fontSize: 12
      },
      value: {
        fontSize: 12
      }
    }
  },
  data: {
    nodes: [
      { name: '香菜', value: 50 },
      { name: '蒜泥', value: 20 },
      { name: '小米辣', value: 15 },
      { name: '八角', value: 0 },
      { name: '小葱', value: 10 },
      { name: '花椒', value: 0 },
      { name: '桂皮', },
      { name: '香油', value: 3 },
      { name: '花生碎', value: 6 },
      { name: '蘸料组合A', value: 45 },
      { name: '蘸料组合B', value: 40 },
      { name: '蘸料组合C', value: 10 },
      { name: '蘸料组合D', value: 9 },
      { name: '火锅蘸料', value: 104 }
    ],
    links: [
      { source: '香菜', target: '蘸料组合A', value: 36.5 },
      { source: '蘸料组合A', target: '火锅蘸料', value: 45 },
      { source: '香菜', target: '蘸料组合B', value: 12.5 },
      { source: '蘸料组合B', target: '火锅蘸料', value: 40 },
      { source: '香菜', target: '蘸料组合C', value: 0.5 },
      { source: '蘸料组合C', target: '火锅蘸料', value: 10 },
      { source: '香菜', target: '蘸料组合D', value: 0.5 },
      { source: '蘸料组合D', target: '火锅蘸料', value: 9 },
      { source: '蒜泥', target: '蘸料组合A', value: 6.5 },
      { source: '蒜泥', target: '蘸料组合B', value: 12 },
      { source: '蒜泥', target: '蘸料组合C', value: 0.5 },
      { source: '蒜泥', target: '蘸料组合D', value: 1 },
      { source: '小米辣', target: '蘸料组合B', value: 12.5 },
      { source: '小米辣', target: '蘸料组合C', value: 2.5 },
      { source: '小葱', target: '蘸料组合A', value: 2 },
      { source: '小葱', target: '蘸料组合B', value: 3 },
      { source: '小葱', target: '蘸料组合C', value: 2 },
      { source: '小葱', target: '蘸料组合D', value: 3 },
      { source: '香油', target: '蘸料组合C', value: 1.5 },
      { source: '香油', target: '蘸料组合D', value: 1.5 },
      { source: '花生碎', target: '蘸料组合C', value: 3 },
      { source: '花生碎', target: '蘸料组合D', value: 3 },
      { source: '八角', target: '蘸料组合D', value: 0 },
      { source: '花椒', target: '蘸料组合D', value: 0 },
      { source: '桂皮', target: '蘸料组合D', value: 0 }
    ]
  }
};
