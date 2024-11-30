/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
// 线的相关 入参
// 参数1
const edges = [{
  direction: 'LR', // LR RL TB BT TT BB LL RR 
  startPoint: {
    x: 0,
    y: 0,
    id: 'node-1'
  },
  endPoint: {
    x: 100,
    y: 100,
    id: 'node-2'
  },
  startNode: {
    width: 100,
    height: 100,
  },
  endNode: {
    width: 100,
    height: 100,
  },
  lineStyle: { //单独设置线的样式
    width: 1,
    color: 'red',
    type: 'Round',
    mode: 'solid'
  },
  id: 'line-1'
}]

// 参数2: 线的样式
const lineStyle = {
  width: 1,
  color: 'red',
  type: 'Round',
  mode: 'solid'
}



// 连接点相关 入参
// 参数1 节点信息
const nodeData = {
  "id": "root",
  "dom": {},
  "width": 342.015625,
  "height": 56,
  "x": 4871.9609375,
  "y": 4811.5
}
// 参数2 连接点的信息
const pointsData = [{
  position: 'top', // 连接点的位置信息
  attrs: { // 连接点的样式信息
    cicle: {
      r: 6,
      magnet: true,
      stroke: '#C2C8D5',
      strokeWidth: 1,
      fill: '#fff',
    }
  },
  parentId:"root",
  isSeparate: false, // 连接点数量大于1，是否分离显示，默认值false,非必填,
}, {
  position: 'bottom',
  attrs: {
    cicle: {
      r: 6,
      magnet: true,
      stroke: '#C2C8D5',
      strokeWidth: 1,
      fill: '#fff',
    }
  },
  parentId:"root",
  isSeparate: false,
}]

// 返回
[{
    position: "top",
    attrs: {
      "cicle": {
        "r": 6,
        "magnet": true,
        "stroke": "#C2C8D5",
        "strokeWidth": 1,
        "fill": "#fff"
      }
    },
    isSeparate: false,
    x: 150,
    y: 0,
    parentId:"root",
    pointId: "root-top-1"
  },
  {
    position: "bottom",
    attrs: {
      "cicle": {
        "r": 6,
        "magnet": true,
        "stroke": "#C2C8D5",
        "strokeWidth": 1,
        "fill": "#fff"
      }
    },
    parentId:"root" ,
    isSeparate: false,
    x: 150,
    y: 0,
    pointId: "root-bottom-2"
  }
]