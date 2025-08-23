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
import max from '../../../util/sort/max';
import { isNumber, isObject } from '../../../util/type';
import { getColor, codeToRGB } from '../../../util/color';
import chartToken from './chartToken';
import Token from '../../../feature/token';

// 创建一个渐变色-同名的Series，用来显示分割渐变区域
function gradientBottomArea(item, percent, colorTo, colorFrom, yAxisIndex) {
  let colorStops;
  if (percent > 1) {
    colorStops =  [
      {
        offset: 0,
        color: chartToken.colorAreaTP,
      },
      {
        offset: 1,
        color: colorFrom,
      },
    ]
  }else{
    colorStops =  [
      {
        offset: 0,
        color: chartToken.colorAreaTP,
      },
      {
        offset: Math.abs(1 - percent - 0.00001),
        color: chartToken.colorAreaTP,
      },
      {
        offset: Math.abs(1 - percent),
        color: colorTo,
      },
      {
        offset: 1,
        color: colorFrom,
      },
    ]
  }
  const newSeries = {
    type: item.type,
    name: item.name,
    data: item.data,
    smooth: item.smooth,
    step: item.step,
    yAxisIndex: yAxisIndex,
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
        colorStops
      },
    },
  };
  return newSeries;
}

/**
 * 为series添加split分割区域的底部areaStyle,
 */
function splitArea(baseOption, iChartOption, echartsIns, chartsIns) {
  const {area,splitLine} = iChartOption
  if (area && splitLine) {
    const temp = [];
    const colors = baseOption.color;
    const colorAlpha = Token.config.globalColorAlpha
    baseOption.series.forEach((item, index) => {
      if(!item.data) return;
      // data中的阈值项data转换为object，此时找最小值需要转换回来
      const seriesData = getDataWidthNoObject(item.data)
      const minValue = min(seriesData);
      const maxValue = max(seriesData);
      if( !maxValue && !minValue ) return;
      const yAxisIndex = item.yAxisIndex || 0;
      const YAxisMax = chartsIns.getYAxisMaxValue(echartsIns, yAxisIndex) || 0;
      let percent = Math.abs(splitLine - minValue) / (YAxisMax - minValue);
      const color = getColor(colors, index);
      const colorTo = codeToRGB(color, colorAlpha);
      const colorFrom = codeToRGB(color, colorAlpha);
      // 该series是为了实现红色特殊area的样式而加的，因此在tooltip中应该被屏蔽
      const newSeries = gradientBottomArea(item, percent, colorTo, colorFrom, yAxisIndex);
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
function pureBottomArea(itemx, percentx, bottomColorx,yAxisIndex) {
  let colorStops;
  if (percentx > 1) {
    colorStops = [
      {
        offset: 0,
        color: chartToken.colorAreaTP, //解决svg渲染方式下面积图低阈值黑色背景的问题
      },
      {
        offset: 1,
        color: bottomColorx,
      },
    ]
  }else{
    colorStops = [
      {
        offset: 0,
        color: chartToken.colorAreaTP, //解决svg渲染方式下面积图低阈值黑色背景的问题
      },
      {
        offset: Math.abs(1 - percentx - 0.00001),
        color: chartToken.colorAreaTP,
      },
      {
        offset: Math.abs(1 - percentx),
        color: bottomColorx,
      },
      {
        offset: 1,
        color: bottomColorx,
      },
    ]
  }
  const seriesObj = {
    type: itemx.type,
    name: itemx.name,
    data: itemx.data,
    smooth: itemx.smooth,
    step: itemx.step,
    symbol: 'none',
    yAxisIndex: yAxisIndex,
    areaStyle: {
      color: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops,
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

function markLineArea(baseOption, iChartOption, echartsIns, chartsIns) {
  const markLine = iChartOption.markLine;
  if (
    iChartOption.area &&
    markLine &&
    markLine.bottom &&
    isNumber(markLine.bottom)
  ) {
    const temp = [];
    const colorAlpha = Token.config.globalColorAlpha
    baseOption.series.forEach(item => {
      if(!item.data) return;
      const seriesName = item.name;
      if (markLine.bottomUse && markLine.bottomUse.indexOf(seriesName) === -1)  return;
      const bottomColor = codeToRGB(markLine.bottomColor, colorAlpha) || codeToRGB(Token.config.colorState.colorError, colorAlpha);
      // data中的阈值项data转换为object，此时找最小值需要转换回来
      const seriesData = getDataWidthNoObject(item.data)
      const minValue = min(seriesData);
      const maxValue = max(seriesData);
      if( !maxValue && !minValue ) return;
      const yAxisIndex = item.yAxisIndex || 0;
      const YAxisMax = chartsIns.getYAxisMaxValue(echartsIns, yAxisIndex) || 0;
      const percent = Math.abs((markLine.bottom - minValue) / (YAxisMax - minValue));
      if (markLine.bottom >= minValue) {
        // 该series是为了实现红色特殊area的样式而加的，因此在tooltip中应该被屏蔽
        const newSeries = pureBottomArea(item, percent, bottomColor, yAxisIndex);
        temp.push(newSeries);
      }
    });
    baseOption.series = baseOption.series.concat(temp);
  }
}

function getDataWidthNoObject(data) {
  if(!data) return data;
  return data.map(item => {
    return isObject(item) ? item.value : item
  })
}

/**
 * 为series添加areaStyle
 */
function bottomArea(baseOption, iChartOption, echartsIns, chartsIns) {
  // 添加markLine的areaStyle
  markLineArea(baseOption, iChartOption, echartsIns, chartsIns);
  // 添加split的areaStyle
  splitArea(baseOption, iChartOption, echartsIns, chartsIns);
}


export default bottomArea;
export { judgeFilterAreaSeries, getDataWidthNoObject }
