const option = {
  theme: 'light',
  draggable: false,
  widthSpace: [10, 30],
  nodeAlign: 'right',
  data: {
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
      { source: '电网', target: '电', value: 50 },
      { source: '光伏', target: '电', value: 1.5 },
      { source: '燃气', target: '空调热', value: 1 },
      { source: '电', target: '照明', value: 10 },
      { source: '电', target: '电梯', value: 5 },
      { source: '电', target: 'OA设备', value: 5 },
      { source: '电', target: '电脑及实验设备', value: 5 },
      { source: '电', target: '高效机房', value: 12.5 },
      { source: '电', target: '分布式风冷', value: 10 },
      { source: '燃气', target: '热水', value: 4 },
      { source: '高效机房', target: '空调冷', value: 12.5 },
      { source: '空调冷', target: '热水', value: 2 },
      { source: '分布式风冷', target: '空调冷', value: 5 },
      { source: '分布式风冷', target: '空调热', value: 5 },
      { source: '照明', target: '办公', value: 10 },
      { source: '电梯', target: '办公', value: 5 },
      { source: 'OA设备', target: '办公', value: 5 },
      { source: '电脑及实验设备', target: '办公', value: 5 },
      { source: '电', target: '其他设备', value: 2 },
      { source: '其他设备', target: '办公', value: 2 },
      { source: '电', target: '自然冷源', value: 2 },
      { source: '自然冷源', target: '空调冷', value: 2 },
      { source: '热水', target: '办公', value: 2 },
      { source: '热水', target: '酒店', value: 2 },
      { source: '热水', target: '商业', value: 2 },
      { source: '热水', target: '运动', value: 2 },
      { source: '空调冷', target: '热水', value: 2 },
      { source: '空调冷', target: '办公', value: 2 },
      { source: '空调冷', target: '酒店', value: 2 },
      { source: '空调冷', target: '商业', value: 2 },
      { source: '空调冷', target: '运动', value: 9.5 },
      { source: '空调热', target: '办公', value: 2 },
      { source: '空调热', target: '酒店', value: 2 },
      { source: '空调热', target: '商业', value: 2 },
    ]
  },
  series: [
    { layoutIterations: 32 } // 修改节点的排列顺序
  ]
};
