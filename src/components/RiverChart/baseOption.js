function baseOption() {
  return {
    // 图表宽度
    width: undefined,
    // 图表高度
    height: undefined,
    // 各个阶段的宽度占比
    depthWidth: ['25%', '50%', '25%'],
    // 连接处的间隙
    space: 0,
    // 节点颜色
    background: '#0067D1',
    marginWidth: [
      {
        left: 50,
        right: 50,
      },
      {
        left: 100,
        right: 100,
      },
      {
        left: 50,
        right: 50,
      },
    ],
    // 节点之间的垂直间距
    nodeSpace: 40,
    scaleBar: 8,
    statusColor: {
      1: '#0067D1',
      2: '#BBC0C7',
      3: '#0067D1',
    },
    smoothingCurves: false,
    // 控制河流和顶部的距离
    offsetY: 0,
  };
}
export default baseOption;
