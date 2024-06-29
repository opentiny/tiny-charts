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
import Theme from '../../feature/token';
import chartToken from './chartToken';
import { setChartPadding } from './handleOptipn';
import merge from '../../util/merge';

const LAYOUT_CONFIG = {
  LineTreeChart: 'orthogonal',
  RingTreeChart: 'radial'
}

/**
 * 组装series所需要的series
 */

function getSeriesUnit(type) {
  return {
    type: 'tree',
    data: undefined,
    name: undefined,
    // symbol: 'circle',
    layout: LAYOUT_CONFIG[type],
    // 文本样式
    label: {
      // 图元的距离
      distance: 10,
      fontSize: 12,
      color: chartToken.labelColor,
    },
    // 设置连线的样式
    lineStyle: {
      width: 1,
      // 连线的曲度
      curveness: 0.5,
      color: chartToken.lineColor
    },
    // 图元设置
    itemStyle: {
      color: Theme.config.colorState.colorInfo
    },
    symbolSize: 10,
    initialTreeDepth: 1,
    // 初始动画的时长，
    animationDuration: 550,
    // 数据更新动画的时长。
    animationDurationUpdate: 750,
  };
}


function setLineTree(seriesItem, iChartOpt) {
  const { lineType, direction } = iChartOpt
  seriesItem.edgeShape = lineType || 'curve';
  const dir = direction || 'left'
  const configMap = {
    top: {
      label: {
        position: "top",
        rotate: -90,
        align: 'right',
        verticalAlign: 'middle'
      },
      leaves: {
        label: {
          position: 'bottom',
          align: 'left'
        }
      },
      orient: 'TB'
    },
    right: {
      label: {
        position: 'right'
      },
      leaves: {
        label: {
          position: 'left'
        }
      },
      orient: 'RL'
    },
    bottom: {
      label: {
        position: 'bottom',
        rotate: 90,
        align: 'right',
        verticalAlign: 'middle'
      },
      leaves: {
        label: {
          position: 'top',
          align: 'left'
        }
      },
      orient: 'BT'
    },
    left: {
      label: {
        position: 'left'
      },
      leaves: {
        label: {
          position: 'right'
        }
      },
      orient: 'LR'
    }
  }
  merge(seriesItem, configMap[dir])
}

/**
 * 组装echarts所需要的series
 */
export function setSeries(baseOpt, type, iChartOpt) {
  const { data } = iChartOpt;
  if (!data) return;
  if (data && data.length !== 0) {
    const series = [];
    data.forEach(dataItem => {
      const seriesItem = getSeriesUnit(type);
      // 设置图表padding
      setChartPadding(seriesItem, type, iChartOpt);
      seriesItem.name = dataItem.name;
      // 设置数据
      seriesItem.data = dataItem.data;
      const { symbolSize, initialTreeDepth } = iChartOpt
      // 设置图元大小
      if (symbolSize) seriesItem.symbolSize = symbolSize
      // 设置初始打开层级
      if (initialTreeDepth) seriesItem.initialTreeDepth = initialTreeDepth
      // 设置具体属性
      if (type === 'LineTreeChart') setLineTree(seriesItem, iChartOpt)
      series.push(seriesItem);
    });
    baseOpt.series = series
  }
}
