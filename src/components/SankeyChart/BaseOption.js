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
import chartToken from './chartToken';

const BaseOption = () => {
  return {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    animation: true,
    series: [
      {
        nodeAlign: 'left',
        orient: 'horizontal',
        right: 0,
        top: 0,
        bottom: 0,
        left: 0,
        nodeGap: 0,// 控制每列矩形的距离     
        nodeWidth: 0,// 控制矩形的宽度
        type: 'sankey',
        data: {},
        links: {},
        emphasis: {
          focus: 'adjacency',
        },
        layout: 'none',
        focusNodeAdjaceny: true,
        layoutIterations: 0,// 将节点按照data中的顺序排列，将值改为0
        levels: [// 设置第一层的文本在左侧
          {
            depth: 0,
            label: {
              position: 'left',
              align: 'right'
            },
          },
        ],
        itemStyle: {},
        lineStyle: {
          color: 'source',// 线条颜色过渡         
          opacity: 0.6,// 线条透明度         
          curveness: 0.5,// 线条弯曲度
        },
        label: {
          distance: 5,
          position: 'right',
          rich: {
            name: {
              fontSize: 12,
              color: chartToken.labelNameColor,
            },
            value: {
              fontSize: 12,
              color: chartToken.labelValueColor,
              align: 'center'
            }
          }
        },
      },
    ],
  };
};
export default BaseOption;
