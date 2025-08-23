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
import * as echarts from 'echarts';
import max from '../../../util/sort/max';
import min from '../../../util/sort/min';
import { isNumber } from '../../../util/type';
import { getColor, codeToRGB } from '../../../util/color';
import chartToken from './chartToken';
import Token from '../../../feature/token';
import { getDataWidthNoObject } from './bottomArea'

function markLineArea(baseOption, iChartOption, echartsIns, chartsIns) {
  const markLine = iChartOption.markLine;
  if (
    iChartOption.area &&
    markLine &&
    markLine.top &&
    isNumber(markLine.top) &&
    markLine.topChangeColor !== false
  ) {
    const colors = baseOption.color;
    const colorAlpha = Token.config.globalColorAlpha
    const topColor = codeToRGB(markLine.topColor, colorAlpha) || codeToRGB(Token.config.colorState.colorError, colorAlpha);
    baseOption.series.forEach((item, index) => {
      if (!item.data) return;
      const seriesName = item.name;
      if (markLine.topUse && markLine.topUse.indexOf(seriesName) === -1)  return;
      // data中的阈值项data转换为object，此时找最小值需要转换回来
      const seriesData = getDataWidthNoObject(item.data)
      const minValue = min(seriesData);
      const maxValue = max(seriesData);
      if( !maxValue && !minValue ) return;
      const yAxisIndex = item.yAxisIndex || 0;
      const YAxisMin = chartsIns.getYAxisMinValue(echartsIns, yAxisIndex) || 0;
      const color = getColor(colors, index);
      const colorTo = codeToRGB(color, 0);
      const colorFrom = codeToRGB(color, colorAlpha);
      let percent;
      let colorStops;
      if (minValue < 0) {
        percent = Math.abs((maxValue - markLine.top) / (maxValue - minValue));
        if (markLine.top < 0 && maxValue < 0) {
          percent = Math.abs((0 - markLine.top) / (0 - minValue));
        }
      } else {
        percent = Math.abs((maxValue - markLine.top) / (maxValue - YAxisMin));
      }
      colorStops = [
        {
          offset: 0,
          color: topColor,
        },
        {
          offset: percent,
          color: topColor,
        },
        {
          offset: percent + 0.00001,
          color: colorFrom,
        }]
      if (minValue < 0) {
        const zeroPercent = Math.abs((maxValue - 0) / (maxValue - minValue));
        if (maxValue > 0) {
          colorStops.push(
            {
              offset: zeroPercent,
              color: colorTo,
            }
          )
        }
        colorStops.push({
          offset: 1,
          color: colorFrom,
        }
        )
      } else {
        colorStops.push(
          {
            offset: 1,
            color: colorTo,
          }
        )
      }
      if (maxValue > markLine.top) {
        item.areaStyle = {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops
          },
        };
      }
    });
  }
}

function defaultArea(baseOption, iChartOption, echartsIns) {
  if (iChartOption.area) {
    const colors = baseOption.color;
    const colorAlpha = Token.config.globalColorAlpha;
    baseOption.series.forEach((item, index) => {
      if(!item.data) return;
      // data中的阈值项data转换为object，此时找最小值需要转换回来
      const seriesData = getDataWidthNoObject(item.data)
      const minValue = min(seriesData);
      const maxValue = max(seriesData);
      if( !maxValue && !minValue ) return;
      const color = getColor(colors, index);
      const colorTo = codeToRGB(color, 0);
      const colorFrom = codeToRGB(color, colorAlpha);
      let colorStops;
      if (minValue < 0) {
        const zeroPercent = Math.abs((maxValue - 0) / (maxValue - minValue));
        colorStops = [
          {
            offset: 0,
            color: colorFrom,
          },
          {
            offset: zeroPercent,
            color: colorTo,
          },
          {
            offset: 1,
            color: colorFrom,
          }
        ]
        if (maxValue <= 0) {
          colorStops = [
            {
              offset: 0,
              color: colorTo,
            },
            {
              offset: 1,
              color: colorFrom,
            },
          ]
        }
      } else {
        colorStops = [
          {
            offset: 0,
            color: colorFrom,
          },
          {
            offset: 1,
            color: colorTo,
          },
        ]
      }
      item.areaStyle = {
        opacity: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, colorStops),
      };
    });
  }
}

function splitArea(baseOption, iChartOption, echartsIns, chartsIns) {
  if (iChartOption.area && iChartOption.splitLine) {
    const colors = baseOption.color;
    const splitLine = iChartOption.splitLine;
    const colorAlpha = Token.config.globalColorAlpha
    baseOption.series.forEach((item, index) => {
      if(!item.data) return;
      // data中的阈值项data转换为object，此时找最小值需要转换回来
      const seriesData = getDataWidthNoObject(item.data)
      const minValue = min(seriesData);
      const maxValue = max(seriesData);
      if( !maxValue && !minValue ) return;
      const yAxisIndex = item.yAxisIndex || 0;
      const YAxisMin = chartsIns.getYAxisMinValue(echartsIns, yAxisIndex) || 0;
      const color = getColor(colors, index);
      const colorTo = codeToRGB(color, colorAlpha);
      const colorFrom = codeToRGB(color, colorAlpha);
      let percent;
      let colorStops;
      if (minValue < 0) {
        percent = Math.abs(Math.abs(maxValue - splitLine) / (maxValue - minValue));
      } else {
        percent = Math.abs((maxValue - splitLine) / (maxValue - YAxisMin));
      }
      if (percent > 1) {
        colorStops = [
          { offset: 0, color: colorFrom },
          { offset: 1, color: chartToken.colorAreaTP },
        ]
      } else {
        colorStops = [
          { offset: 0, color: colorFrom },
          { offset: percent, color: colorTo },
          { offset: percent + 0.00001, color: chartToken.colorAreaTP },
          { offset: 1, color: chartToken.colorAreaTP },
        ]
      }
      item.areaStyle = {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops
        },
      };
    });
  }
}

/**
 * 为series添加areaStyle
 */
function topArea(baseOption, iChartOption, echartsIns, chartsIns) {
  // 添加默认areaStyle
  defaultArea(baseOption, iChartOption, echartsIns, chartsIns);
  // 添加markLine的areaStyle
  markLineArea(baseOption, iChartOption, echartsIns, chartsIns);
  // 添加split的areaStyle
  splitArea(baseOption, iChartOption, echartsIns, chartsIns);
}

export default topArea;
