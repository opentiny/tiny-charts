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
  //自定义图表布局对齐方式，默认值left,此属性只用于data数据交错情况的图表
  nodeAlign:'right',
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
      { name: '电网', value: 50 },
      { name: '光伏', value: 1.5 },
      { name: '燃气', value: 5 },
      { name: '电', value: 51.5 },
      { name: '照明', value: 10 },
      { name: '电梯', value: 5 },
      { name: 'OA设备', value: 5 },
      { name: '电脑及实验设备', value: 5 },
      { name: '其他设备', value: 2 },
      { name: '高效机房', value: 12.5 },
      { name: '自然冷源', value: 2 },
      { name: '分布式风冷', value: 10 },
      { name: '空调冷', value: 19.5 },
      { name: '空调热', value: 6 },
      { name: '热水', value: 8 },
      { name: '办公', value: 33 },
      { name: '酒店', value: 6 },
      { name: '商业', value: 6 },
      { name: '运动', value: 11.5 },
    ],
    links: [
      { source: '电网', target: '电',value: 50 },
      { source: '光伏', target: '电',value: 1.5 },
      { source: '燃气', target: '空调热',value: 1 },
      { source: '电', target: '照明',value: 10 },
      { source: '电', target: '电梯',value: 5 },
      { source: '电', target: 'OA设备',value: 5 },
      { source: '电', target: '电脑及实验设备',value: 5 },
      { source: '电', target: '高效机房',value: 12.5 },
      { source: '电', target: '分布式风冷',value: 10 },
      { source: '燃气', target: '热水',value: 4 },
      { source: '高效机房', target: '空调冷',value: 12.5 },
      { source: '空调冷', target: '热水',value: 2 },
      { source: '分布式风冷', target: '空调冷',value: 5 },
      { source: '分布式风冷', target: '空调热',value: 5 },
      { source: '照明', target: '办公',value: 10 },
      { source: '电梯', target: '办公',value: 5 },
      { source: 'OA设备', target: '办公',value: 5 },
      { source: '电脑及实验设备', target: '办公',value: 5 },
      { source: '电', target: '其他设备',value: 2 },
      { source: '其他设备', target: '办公',value: 2 },
      { source: '电', target: '自然冷源',value: 2 },
      { source: '自然冷源', target: '空调冷',value: 2 },
      { source: '热水', target: '办公',value: 2 },
      { source: '热水', target: '酒店',value: 2 },
      { source: '热水', target: '商业',value: 2 },
      { source: '热水', target: '运动',value: 2 },
      { source: '空调冷', target: '热水',value: 2 },
      { source: '空调冷', target: '办公',value: 2 },
      { source: '空调冷', target: '酒店',value: 2 },
      { source: '空调冷', target: '商业',value: 2 },
      { source: '空调冷', target: '运动',value: 9.5 },
      { source: '空调热', target: '办公',value: 2 },
      { source: '空调热', target: '酒店',value: 2 },
      { source: '空调热', target: '商业',value: 2 },
    ]
  }
};
