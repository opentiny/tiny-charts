/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
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
