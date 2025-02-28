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
import min from '../../../util/sort/min';
import { isNumber, isObject } from '../../../util/type';
import { getColor, codeToRGB } from '../../../util/color';
import chartToken from './chartToken';
import Theme from '../../../feature/token';
import { isDarkTheme } from '../handleOptipn';

// 创建一个渐变色-同名的Series，用来显示分割渐变区域
function gradientBottomArea(item, percent, colorTo, colorFrom) {
  const newSeries = {
    type: item.type,
    name: item.name,
    data: item.data,
    smooth: item.smooth,
    step: item.step,
    lineStyle: {
      width: 0,
    },
    symbol: 'none',
    areaStyle: {
      origin: 'end',
      color: {
        type: 'linear',
        x2: 0,
        y2: 1,
        x: 0,
        y: 0,
        colorStops: [
          {
            offset: 0,
            color: chartToken.colorAreaTP,
          },
          {
            offset: 1 - percent - 0.00001,
            color: chartToken.colorAreaTP,
          },
          {
            offset: 1 - percent,
            color: colorTo,
          },
          {
            offset: 1,
            color: colorFrom,
          },
        ],
      },
    },
  };
  return newSeries;
}

/**
 * 为series添加split分割区域的底部areaStyle,
 */
function splitArea(baseOption, iChartOption, YAxiMax) {
  if (iChartOption.area && iChartOption.splitLine) {
    const temp = [];
    const colors = baseOption.color;
    baseOption.series.forEach((item, index) => {
      const minValue = min(item.data);
      const percent = (iChartOption.splitLine - minValue) / (YAxiMax - minValue);
      const color = getColor(colors, index);
      const colorTo = codeToRGB(color, 0.15);
      const colorFrom = codeToRGB(color, 0.15);
      // 该series是为了实现红色特殊area的样式而加的，因此在tooltip中应该被屏蔽
      const newSeries = gradientBottomArea(item, percent, colorTo, colorFrom);
      temp.push(newSeries);
    });
    baseOption.series = baseOption.series.concat(temp);
  }
}

// 判断是否需要过滤series
function judgeFilterAreaSeries(iChartOption) {
  const { area, splitLine, markLine } = iChartOption
  return area && (splitLine || (markLine && markLine?.bottom && isNumber(markLine?.bottom)))
}

// 创建一个纯色-同名Series，用来显示红色阈值区域
function pureBottomArea(itemx, percentx, bottomColorx) {
  const seriesObj = {
    type: itemx.type,
    name: itemx.name,
    data: itemx.data,
    smooth: itemx.smooth,
    step: itemx.step,
    symbol: 'none',
    areaStyle: {
      color: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: chartToken.colorAreaTP, //解决svg渲染方式下面积图低阈值黑色背景的问题
          },
          {
            offset: 1 - percentx - 0.00001,
            color: chartToken.colorAreaTP,
          },
          {
            offset: 1 - percentx,
            color: bottomColorx,
          },
          {
            offset: 1,
            color: bottomColorx,
          },
        ],
        type: 'linear',
      },
      origin: 'end',
    },
    lineStyle: {
      width: 0,
    },
  };
  return seriesObj;
}

function markLineArea(baseOption, iChartOption, YAxiMax) {
  if (
    iChartOption.area &&
    iChartOption.markLine &&
    iChartOption.markLine.bottom &&
    isNumber(iChartOption.markLine.bottom)
  ) {
    const temp = [];
    baseOption.series.forEach(item => {
      const bottomColor = codeToRGB(iChartOption.markLine.bottomColor, 0.15) || codeToRGB(Theme.config.colorState.colorError, 0.15);
      // 黑色主题的时候把data中的阈值项data转换为object，此时找最小值需要转换回来
      const seriesData = getDataWidthNoObject(item.data)
      const minValue = min(seriesData);
      const percent = (iChartOption.markLine.bottom - minValue) / (YAxiMax - minValue);
      if (iChartOption.markLine.bottom >= minValue) {
        // 该series是为了实现红色特殊area的样式而加的，因此在tooltip中应该被屏蔽
        const newSeries = pureBottomArea(item, percent, bottomColor);
        temp.push(newSeries);
      }
    });
    baseOption.series = baseOption.series.concat(temp);
  }
}

function getDataWidthNoObject(data) {
  return data.map(item => {
    return isObject(item) ? item.value : item
  })
}

/**
 * 为series添加areaStyle
 */
function bottomArea(baseOption, iChartOption, YAxiMax) {
  // 添加markLine的areaStyle
  markLineArea(baseOption, iChartOption, YAxiMax);
  // 添加split的areaStyle
  splitArea(baseOption, iChartOption, YAxiMax);
}


export default bottomArea;
export { judgeFilterAreaSeries }
