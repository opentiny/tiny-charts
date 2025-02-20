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
import min from '../../util/sort/min';
import max from '../../util/sort/max';
import { isNumber } from '../../util/type';
import { getColor } from '../../util/color';
import Theme from '../../feature/token';
import { isDarkTheme } from './handleOptipn';
import chartToken from './chartToken'

function handleVisualMapItem({ index, topColor, top, bottom, bottomColor, vmColor, defaultColor }) {
  const visualMapItem = {
    show: false,
    type: 'piecewise',
    dimension: 1,
    seriesIndex: index,
    pieces: [
      {
        gte: top, // 大于 top 的
        color: topColor,
      },
      {
        gt: bottom,
        lt: top, // 小于 top, 大于 bottom 的，为正常颜色
        color: defaultColor,
      },
      {
        lte: bottom, // 小于 bottom
        color: bottomColor,
      },
    ],
    outOfRange: {
      color: vmColor,
    },
  };

  return visualMapItem;
}

export function setVisualMap(legendData, seriesData, iChartOpt, baseOpt) {
  const visualMap = [];
  const { color: colors, markLine } = iChartOpt
  if (markLine) {
    let topValue = markLine.top;
    let bottomValue = markLine.bottom;
    const vmColor = Theme.config.colorState.colorError;
    const topColor = markLine.topColor || vmColor;
    const bottomColor = markLine.bottomColor || vmColor;
    if (!isNumber(topValue)) {
      topValue = undefined;
    }
    if (!isNumber(bottomValue)) {
      bottomValue = undefined;
    }
    if (topValue === undefined && bottomValue === undefined) {
      return visualMap;
    }
    if (topValue !== undefined && bottomValue !== undefined && bottomValue >= topValue) {
      throw new Error('阈值线bottom的值必须小于阈值线top的值');
    }
    legendData.forEach((legendName, index) => {
      const data = seriesData[legendName];
      const minData = min(data);
      const maxData = max(data);
      const defaultColor = getColor(colors, index)
      let bottom = bottomValue;
      let top = topValue;
      if (markLine.topUse && markLine.topUse.indexOf(legendName) === -1) {
        top = undefined;
      }
      if (markLine.bottomUse && markLine.bottomUse.indexOf(legendName) === -1) {
        bottom = undefined;
      }
      if (top === undefined && bottom === undefined) {
        return;
      }
      // 阈值无下限
      if (bottom === undefined) {
        bottom = Math.min(top - 0.01, minData - 0.01);
      }
      // 阈值无上限
      if (top === undefined) {
        top = Math.max(bottom + 0.01, maxData + 0.01);
      }
      // 根据数据大小映射颜色
      const visualMapItem = handleVisualMapItem({ index, topColor, top, bottom, bottomColor, vmColor, defaultColor });
      visualMap.push(visualMapItem);
      if (isDarkTheme()) {
        const seriesUnit = baseOpt.series[index]
        //  阈值情景下hover的emphasis中itemstyle要在数据中单独设置，覆盖通用emphasis配置
        transformData(
          seriesUnit,
          data,
          defaultColor,
          {
            topColor,
            top,
            bottom,
            bottomColor
          })
      }
    });
  }
  return visualMap;
}

function transformData(seriesUnit, data, defaultColor, markLineConfig) {
  const { topColor, top, bottom, bottomColor } = markLineConfig
  const newData = data.map(item => {
    let borderColor = defaultColor
    if (bottom < item && item < top) {
      return item
    }
    if (item >= top) {
      borderColor = topColor
    }
    if (item <= bottom) {
      borderColor = bottomColor
    }
    return {
      value: item,
      emphasis: {
        itemStyle: {
          borderColor,
          color: chartToken.maskColor
        }
      }
    }
  })
  seriesUnit.data = newData
}