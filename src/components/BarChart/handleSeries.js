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
import merge from '../../util/merge';
import defendXSS from '../../util/defendXSS';
import { getColor } from '../../util/color';
import cloneDeep from '../../util/cloneDeep';
import { isArray, isNumber } from '../../util/type';
import { getMarkLineDefault } from '../../option/config/mark';
import chartToken from './chartToken';
import Theme from '../../feature/token';

function handleYaxis(barSeries, yAxis) {
  if (Array.isArray(yAxis)) {
    yAxis.forEach((y, index) => {
      barSeries.forEach((s, indexs) => {
        if (y.dataName && y.dataName.includes(s.name)) {
          barSeries[indexs].yAxisIndex = index;
        }
      });
    });
  }
}

function handleLabel(seriesUnit, iChartOption, index) {
  const label = iChartOption.label;
  let labelOption;
  if (label && isArray(label)) {
    labelOption = label[index];
  } else {
    labelOption = label;
  }
  if (labelOption && labelOption.show) {
    merge(seriesUnit.label, labelOption);
    seriesUnit.label.show = true;
    seriesUnit.label.offset = labelOption.offset || [0, 0];
    seriesUnit.label.position = labelOption.position || 'inside';
    seriesUnit.label.formatter = labelOption.formatter;
  }
}

function handleDoubleSides(type, seriesUnit, index, legendData) {
  if (type && type === 'double-sides') {
    if (index === legendData.length - 1) {
      seriesUnit.data = seriesUnit.data.map(item => {
        if (isNumber(item)) {
          return -1 * item;
        } else {
          return item;
        }
      });
    }
  }
}

export const seriesInit = () => {
  return {
    label: {
      show: false,
      color: chartToken.labelColor,
      fontSize: chartToken.fontSize,
    },
    // 数据
    data: [],
    // 柱形
    type: 'bar',
    // 柱条宽度
    barWidth: chartToken.barWidth,
    // 不同系列的柱间距离
    barGap: '25%',
    // 阈值线
    markLine: null,
    // 峰值标志
    markPoint: null,
    // 柱形的每个样式配置项
    itemStyle: {
      borderRadius: [chartToken.borderRadius, chartToken.borderRadius, 0, 0],
    },
  };
};

function handleWaterFall(type, seriesUnit) {
  if (type && type === 'water-fall') {
    // 调整堆叠柱子圆角
    seriesUnit.itemStyle.borderRadius = [
      chartToken.borderRadius,
      chartToken.borderRadius,
      chartToken.borderRadius,
      chartToken.borderRadius,
    ];
    // 瀑布图最有有一个总体数据
    seriesUnit.data.push(
      seriesUnit.data.reduce(function (prev, curr) {
        const n = Number(curr) || 0;
        return prev + n;
      }, 0),
    );
  }
}

function handleRange(type, seriesUnit) {
  if (type && type === 'range') {
    // 调整堆叠柱子圆角
    seriesUnit.itemStyle.borderRadius = [
      chartToken.borderRadius,
      chartToken.borderRadius,
      chartToken.borderRadius,
      chartToken.borderRadius,
    ];
  }
}

function handleContain(type, seriesUnit) {
  if (type && type === 'contain') {
    seriesUnit.barGap = '-100%';
  }
}

function handleFocus(seriesUnit, iChartOption) {
  if (iChartOption.focus) {
    seriesUnit.emphasis = {
      focus: 'series',
      blurScope: 'global',
    };
  }
}

function handleItemStyle(direction, itemStyle) {
  const seriesInit_ = cloneDeep(seriesInit());
  if (direction && direction === 'horizontal') {
    seriesInit_.itemStyle.borderRadius = [0, chartToken.borderRadius, chartToken.borderRadius, 0];
  }
  if (itemStyle?.barMinHeight) {
    seriesInit_.barMinHeight = itemStyle.barMinHeight;
  }
  if (itemStyle?.barWidth) {
    seriesInit_.barWidth = itemStyle.barWidth;
  }
  if (itemStyle?.barGap) {
    seriesInit_.barGap = itemStyle.barGap;
  }
  if (itemStyle?.color) {
    seriesInit_.itemStyle.color = itemStyle.color;
  }
  merge(seriesInit_.itemStyle, itemStyle);
  return seriesInit_;
}

function handleMarkLine(seriesUnit, iChartOption, direction) {
  const name = seriesUnit.name;
  const markLine = iChartOption.markLine;
  const isTopMarkLine = markLine && markLine.top && !(markLine.topUse && markLine.topUse.indexOf(name) === -1);
  const isBottomMarkLine =
    markLine && markLine.bottom && !(markLine.bottomUse && markLine.bottomUse.indexOf(name) === -1);
  if (isTopMarkLine || isBottomMarkLine) {
    seriesUnit.markLine = cloneDeep(getMarkLineDefault());
    merge(seriesUnit.markLine, markLine);
    seriesUnit.markLine.lineStyle.color = markLine.color || Theme.config.colorState.colorError;
  }
  if (isTopMarkLine) {
    if (direction && direction === 'horizontal') {
      seriesUnit.markLine.data.push({ xAxis: markLine.top });
    } else {
      seriesUnit.markLine.data.push({ yAxis: markLine.top });
    }
  }
  if (isBottomMarkLine) {
    if (direction && direction === 'horizontal') {
      seriesUnit.markLine.data.push({ xAxis: markLine.bottom });
    } else {
      seriesUnit.markLine.data.push({ yAxis: markLine.bottom });
    }
  }
}

function handleBothSides(type, seriesUnit, direction, index, legendData) {
  if (type && (type === 'both-sides' || type === 'double-sides')) {
    seriesUnit.stack = 'stack';
    // 调整堆叠柱子圆角
    if (direction && direction === 'horizontal') {
      if (index === 0) {
        seriesUnit.itemStyle.borderRadius = [0, chartToken.borderRadius, chartToken.borderRadius, 0];
      }
      if (index === legendData.length - 1) {
        seriesUnit.itemStyle.borderRadius = [chartToken.borderRadius, 0, 0, chartToken.borderRadius];
      }
    } else {
      if (index === 0) {
        seriesUnit.itemStyle.borderRadius = [chartToken.borderRadius, chartToken.borderRadius, 0, 0];
      }
      if (index === legendData.length - 1) {
        seriesUnit.itemStyle.borderRadius = [0, 0, chartToken.borderRadius, chartToken.borderRadius];
      }
    }
  }
}


function setStack(stack, seriesUnit) {
  for (const name in stack) {
    if (Object.hasOwnProperty.call(stack, name)) {
      const stackArray = stack[name];
      const seriesName = seriesUnit.name;
      const stackIndex = stackArray.indexOf(seriesName);
      if (stackIndex === -1) continue;
      seriesUnit.stack = name;
      if (stackIndex + 1 < stackArray.length) {
        delete seriesUnit.itemStyle.borderRadius;
      }
      break;
    }
  }
}


function handleStack(type, seriesUnit, index, legendData, iChartOption) {
  if (!(type && type === 'stack')) return
  const stack = iChartOption.stack;
  if (stack) {
    setStack(stack, seriesUnit)
    return
  }
  seriesUnit.stack = 'stack';
  if (index !== legendData.length - 1) {
    delete seriesUnit.itemStyle.borderRadius;
  }
}

/**
 * 组装echarts所需要的series
 * @param {图表数据} seriesData
 * @param {图例数据} legendData
 * @param {是否面积图} isArea
 * @param {是否曲线} isSmooth
 * @param {是否阶梯线} isStep
 * @param {阈值线} markLine
 * @param {阈值箭头} markPoint
 * @param {颜色集合} colors
 * @returns
 */
export function setSeries(seriesData, legendData, iChartOption) {
  // 柱状图类型
  const type = iChartOption.type;
  // 柱状图方向
  const direction = iChartOption.direction;
  // 覆盖用户传入的itemStyle
  const seriesInit_ = handleItemStyle(direction, iChartOption.itemStyle);
  // 拼装series
  const series = [];
  legendData.forEach((legend, index) => {
    const seriesUnit = cloneDeep(seriesInit_);
    // 数值显示
    handleLabel(seriesUnit, iChartOption, index);
    // 聚焦效果
    handleFocus(seriesUnit, iChartOption);
    // 数据 / 数据名称
    seriesUnit.name = legend;
    // 如果设置了 barMinHeight，那么就把数据里面的0设置成null
    if (iChartOption.itemStyle && iChartOption.itemStyle.barMinHeight) {
      seriesUnit.data = seriesData[legend].map((item) => {
        return item === 0 ? undefined : item;
      })
    } else {
      seriesUnit.data = seriesData[legend];
    }
    // 阈值线
    handleMarkLine(seriesUnit, iChartOption, direction);
    // 堆叠图
    handleStack(type, seriesUnit, index, legendData, iChartOption);
    // 双向图
    handleBothSides(type, seriesUnit, direction, index, legendData);
    // 数据均为正数的双向图
    handleDoubleSides(type, seriesUnit, index, legendData);
    // 瀑布图
    handleWaterFall(type, seriesUnit);
    // 区间图
    handleRange(type, seriesUnit);
    // 包含图
    handleContain(type, seriesUnit);
    series.push(seriesUnit);
  });
  // 配置多个series的y轴index
  handleYaxis(series, iChartOption.yAxis);
  return series;
}

function handleColorStops(percent, originColor, markLineColor) {
  const { colorError } = Theme.config.colorState
  const colorStops = [
    {
      offset: 0,
      color: markLineColor ? markLineColor : colorError,
    },
    {
      offset: percent,
      color: markLineColor ? markLineColor : colorError,
    },
    {
      offset: percent + 0.001,
      color: originColor,
    },
    {
      offset: 1,
      color: originColor,
    },
  ];
  return colorStops;
}

function handleTopObj(d, direction, percent, originColor, markLineColor) {
  const topObj = {
    value: d,
    itemStyle: {
      color: {
        type: 'linear',
        x: direction === 'horizontal' ? 1 : 0,
        y: direction === 'horizontal' ? 0 : 0,
        x2: direction === 'horizontal' ? 0 : 0,
        y2: direction === 'horizontal' ? 0 : 1,
        colorStops: handleColorStops(percent, originColor, markLineColor),
      },
    },
  };
  return topObj;
}

function handleBottomObj(d, direction, percent, originColor, markLineColor) {
  const bottomObj = {
    value: d,
    itemStyle: {
      color: {
        type: 'linear',
        x: direction === 'horizontal' ? 0 : 0,
        y: direction === 'horizontal' ? 0 : 1,
        x2: direction === 'horizontal' ? 1 : 0,
        y2: direction === 'horizontal' ? 0 : 0,
        colorStops: handleColorStops(percent, originColor, markLineColor),
      },
    },
  };
  return bottomObj;
}

function getColorStopsOrigin(){
return  [
  { offset: 0, color: Theme.config.colorState.colorError },
  { offset: 1, color: Theme.config.colorState.colorError },
];
}


function handleColorStopsTop(originColor, bottomPercent) {
  const { colorError } = Theme.config.colorState
  const colorStops = [
    { offset: 0, color: originColor },
    { offset: bottomPercent, color: originColor },
    { offset: bottomPercent + 0.0001, color: colorError },
    { offset: 1, color: colorError },
  ];
  return colorStops;
}

function handleColorStopsBottom(originColor, topPercent) {
  const { colorError } = Theme.config.colorState
  const colorStops = [
    { offset: 0, color: colorError },
    { offset: topPercent, color: colorError },
    { offset: topPercent + 0.0001, color: originColor },
    { offset: 1, color: originColor },
  ];
  return colorStops;
}

function handleColorStopsOther(originColor, topPercent, bottomPercent) {
  const { colorError } = Theme.config.colorState
  const colorStops = [
    { offset: 0, color: colorError },
    { offset: topPercent, color: colorError },
    { offset: topPercent + 0.0001, color: originColor },
    { offset: bottomPercent, color: originColor },
    { offset: bottomPercent + 0.0001, color: colorError },
    { offset: 1, color: colorError },
  ];
  return colorStops;
}

function handleResObj(d, direction, colorStops) {
  const resObj = {
    value: d,
    itemStyle: {
      color: {
        type: 'linear',
        x: direction === 'horizontal' ? 1 : 0,
        y: direction === 'horizontal' ? 0 : 0,
        x2: direction === 'horizontal' ? 0 : 0,
        y2: direction === 'horizontal' ? 0 : 1,
        colorStops,
      },
    },
  };
  return resObj;
}

function handleSeries(iChartOption, baseOption, exclude, colors, direction) {
  // 顶部阈值
  let top = iChartOption.markLine.top;
  // 底部阈值
  let bottom = iChartOption.markLine.bottom;
  const usefullSeries = baseOption.series.filter(item => {
    return exclude.indexOf(item.name) === -1;
  });
  usefullSeries.forEach((item, index) => {
    if (exclude.indexOf(item.name) === -1) {
      const barData = item.data;
      const placeHolderData = baseOption.series[index * 2].data;
      item.data = barData.map((d, i) => {
        const pd = placeHolderData[i];
        if (top === undefined) {
          top = pd + d + 1;
        }
        if (bottom === undefined) {
          bottom = pd - 1;
        }
        const originColor = getColor(colors, index);
        let topPercent = 0;
        let bottomPercent = 1;
        topPercent = (d + pd - top) / d;
        topPercent < 0 && (topPercent = 0);
        topPercent > 1 && (topPercent = 1);
        bottomPercent = (d + pd - bottom) / d;
        bottomPercent < 0 && (bottomPercent = 0);
        bottomPercent > 1 && (bottomPercent = 1);
        let colorStops = [];
        if (topPercent === 1 || bottomPercent === 0) {
          // 纯红
          colorStops = getColorStopsOrigin()
        } else if (topPercent === 0 && bottomPercent === 1) {
          // 原色
          return d;
        } else if (topPercent === 0) {
          colorStops = handleColorStopsTop(originColor, bottomPercent);
        } else if (bottomPercent === 1) {
          colorStops = handleColorStopsBottom(originColor, topPercent);
        } else {
          colorStops = handleColorStopsOther(originColor, topPercent, bottomPercent);
        }
        const resObj = handleResObj(d, direction, colorStops);
        return resObj;
      });
    }
  });
}

// 针对阈值线以上显示红色区域的需求，图表需要进行特殊处理
export function setMarkLine(baseOption, iChartOption) {
  const type = iChartOption.type;
  const colors = baseOption.color;
  const direction = iChartOption.direction;
  const exclude = ['Placeholder'];
  if (iChartOption.markLine && type !== 'water-fall' && type !== 'range') {
    // 顶部阈值
    const top = iChartOption.markLine.top;
    const topUse = iChartOption.markLine.topUse;
    // 底部阈值
    const bottom = iChartOption.markLine.bottom;
    const bottomUse = iChartOption.markLine.bottomUse;
    // 用户自定义阈值线颜色
    const markLineColor = iChartOption.markLine.color;
    const usefullSeries = baseOption.series.filter(item => {
      return exclude.indexOf(item.name) === -1;
    });
    usefullSeries.forEach((item, index) => {
      if (exclude.indexOf(item.name) === -1) {
        const barData = item.data;
        item.data = barData.map(d => {
          const originColor = getColor(colors, index);
          // 如果该柱形高度超过阈值，侧改变其颜色
          if (top && d >= 0 && top >= 0 && d > top) {
            if (topUse && topUse.indexOf(item.name) === -1) {
              return d;
            }
            const percent = (d - top) / (d - 0);
            const topObj = handleTopObj(d, direction, percent, originColor, markLineColor);
            return topObj;
            // 如果该柱形高度低于阈值，侧改变其颜色
          } else if (bottom && d <= 0 && bottom <= 0 && d < bottom) {
            if (bottomUse && bottomUse.indexOf(item.name) === -1) {
              return d;
            }
            const percent = (bottom - d) / (0 - d);
            const bottomObj = handleBottomObj(d, direction, percent, originColor, markLineColor);
            return bottomObj;
          } else {
            return d;
          }
        });
      }
    });
  }
  //
  if (iChartOption.markLine && type === 'range') {
    handleSeries(iChartOption, baseOption, exclude, colors, direction);
  }
}

function placeFun(index, placeholderData) {
  const a = {
    name: 'Placeholder',
    type: 'bar',
    stack: `stack${index}`,
    itemStyle: {
      borderColor: chartToken.borderColor,
      color: chartToken.color,
    },
    emphasis: {
      itemStyle: {
        borderColor: chartToken.borderColor,
        color: chartToken.color,
      },
    },
    data: placeholderData,
  };
  return a;
}

// 针对区间图表需求，图表需要进行特殊处理
export function setRange(baseOption, iChartOption) {
  const type = iChartOption.type;
  if (type && type === 'range') {
    const tempArray = [];
    baseOption.series.forEach((item, index) => {
      const barData = item.data;
      const barRealData = [];
      const placeholderData = [];
      const placeholder = placeFun(index, placeholderData);
      barData.forEach(d => {
        placeholderData.push(d[0]);
        barRealData.push(d[1] - d[0]);
      });
      item.stack = `stack${index}`;
      item.data = barRealData;
      tempArray.push(placeholder);
      tempArray.push(item);
    });
    baseOption.series = tempArray;
  }
}

// 针对瀑布图表需求，图表需要进行特殊处理
export function setWaterFall(baseOption, iChartOption) {
  const type = iChartOption.type;
  const totalName = iChartOption.totalName || 'Total';
  const totalPosition = iChartOption.totalPosition || 'end';
  if (type && type === 'water-fall') {
    const tempArray = [];
    baseOption.series.forEach((item, index) => {
      const barData = item.data;
      const placeholderData = [0];
      const placeholder = placeFun(index, placeholderData);
      if (totalPosition === 'end') {
        barData.forEach((d, i) => {
          if (i < barData.length - 1) {
            placeholderData.push((Number(d) || 0) + placeholderData[i]);
          }
        });
        placeholderData[placeholderData.length - 1] = 0;
      } else {
        barData.unshift(barData.pop());
        placeholderData[0] = barData[0];
        barData.forEach((d, i) => {
          if (i > 0) {
            placeholderData.push(placeholderData[i - 1] - (Number(d) || 0));
          }
        });
        placeholderData[0] = 0;
      }
      item.stack = `stack${index}`;
      tempArray.push(placeholder);
      tempArray.push(item);
    });
    if (totalPosition === 'end') {
      baseOption.xAxis[0].data.push(totalName);
    } else {
      baseOption.xAxis[0].data.unshift(totalName);
    }
    baseOption.series = tempArray;
  }
}

/**
 * 为了实现一些特殊的样式，增加了一些series，如柱状图中的PlaceHolder series
 * 因此在 tooltip 中应该被屏蔽这些series
 * 因此对 tooltip.formatter 进行二次封装
 */
export function setLimitFormatter(baseOption, iChartOption, seriesData) {

  const type = iChartOption.type;
  const toolTipFormatter = baseOption.tooltip.formatter;
  const exclude = ['Placeholder'];
  const colors = baseOption.color;
  baseOption.tooltip.formatter = (params, ticket, callback) => {
    const newParams = params.filter(item => {
      return exclude.indexOf(item.seriesName) === -1;
    });
    if (toolTipFormatter) {
      return toolTipFormatter(newParams, ticket, callback);
    }
    let htmlString = '';
    newParams.forEach((item, index) => {
      if (index === 0) {
        htmlString += `<div style="margin-bottom:4px;">${defendXSS(item.name)}</div>`;
      }
      const itemColor = typeof item.color === 'string' ? item.color : getColor(colors, index);
      htmlString += `
                    <div>
                        <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${defendXSS(
        itemColor,
      )};">
                        </span>
                        <span style="margin-left:5px;">
                            <span style="display:inline-block;margin-right:8px;min-width:60px;">${defendXSS(
        item.seriesName,
      )}</span>
                            <span style="font-weight:bold">
                              ${defendXSS(
        type === 'range' ?
          `${`${`[${params[index * 2].value}`}-${params[index * 2].value + item.value}`}]`
          : (item.value || seriesData[item.seriesName][item.dataIndex]),
      )}
                            </span>
                        </span>
                    </div>
                `;
    });
    return htmlString;
  };
}

