const option = {
  theme:'light',
  padding:['10%','10%','15%','15%'],
  //颜色组，循环使用，从左至右纵向取色
  color: ['#1F55B5', '#278661', '#B62BF7', '#26616B','#FDC000','#745EF7'],
  //页面节点是否可被拖动，布尔值，默认值为true
  draggable:false,
  //widthSpace,自定义节点矩形宽度及每列间距,默认[10，30]
  //第一个值与节点矩形宽度正相关
  //第二个值与节点距下方节点的间距正相关
  widthSpace:[10,30],
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
          { name: '香菜', value: 50 },
          { name: '蒜泥', value: 20 },
          { name: '小米辣', value: 15 },
          { name: '八角', value: 0 },
          { name: '小葱', value: 10 },
          { name: '花椒' },
          { name: '桂皮' },
          { name: '香油', value: 3 },
          { name: '花生碎', value: 2 },
          { name: '蘸料组合A', value: 45 },
          { name: '蘸料组合B', value: 40 },
          { name: '蘸料组合C', value: 8 },
          { name: '蘸料组合D', value: 7 },
          { name: '火锅蘸料', value: 100 }
        ],
        links: [
          { source: '香菜', target: '蘸料组合A', value: 36.5 },
          { source: '蘸料组合A', target: '火锅蘸料', value: 45 },
          { source: '香菜', target: '蘸料组合B', value: 12.5 },
          { source: '蘸料组合B', target: '火锅蘸料', value: 40 },
          { source: '香菜', target: '蘸料组合C', value: 0.5 },
          { source: '蘸料组合C', target: '火锅蘸料', value: 8 },
          { source: '香菜', target: '蘸料组合D', value: 0.5 },
          { source: '蘸料组合D', target: '火锅蘸料', value: 7 },
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
          { source: '花生碎', target: '蘸料组合C', value: 1 },
          { source: '花生碎', target: '蘸料组合D', value: 1 }
        ]
    }
};
