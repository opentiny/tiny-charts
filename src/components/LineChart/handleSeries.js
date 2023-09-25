import Theme from '../../feature/theme';
import cloneDeep from '../../util/cloneDeep';
import { isString, isObject } from '../../util/type';
import { markLineDefault, markPointDefault } from '../../option/config/mark';

export const seriesInit = {
  label: { show: false },
  // 连线上的小圆点样式
  symbol: 'emptyCircle',
  symbolSize: 10,
  showSymbol: false,
  // 数据
  data: [],
  // 线形
  type: 'line',
  // 线条样式
  lineStyle: {
    width: 2,
  },
  // 折线阶梯
  step: false,
  // 折线平滑
  smooth: false,
  // 阈值线
  markLine: null,
  // 峰值标志
  markPoint: null,
  // 折线点的每个样式配置项
  itemStyle: {},
};

/**
 * 组装echarts所需要的series
 */
export function setSeries(params) {
  const {
    yAxis,
    theme,
    itemStyle,
  } = params;
  // 防止同一个页面的不同lineChart之间出现样式串通
  const localSeriesUnit = cloneDeep(seriesInit);
  // 根据不同的theme，生成不同的itemStyle
  handleItemStyleWithTheme(localSeriesUnit, theme);
  // 覆盖用户传入的itemStyle
  handleItemStyle(localSeriesUnit, itemStyle);
  // 拼装series
  const series = [];
  handleSeries({ ...params, series, localSeriesUnit });
  // 配置多个series的y轴index
  handleYaxis(series, yAxis);
  return series;
}

function handleItemStyleWithTheme(seriesUnit, theme) {
  if (theme.toLowerCase().indexOf('cloud-light') !== -1){
    seriesUnit.symbol = 'emptyCircle';
    seriesUnit.itemStyle = {};
  }
  if (theme.toLowerCase().indexOf('cloud-dark') !== -1){
    seriesUnit.symbol = 'circle';
    seriesUnit.itemStyle = {
      shadowBlur: 2,
      borderWidth: 3,
      borderColor: '#191919',
      shadowColor: 'rgba(0, 0, 0, .2)',
    };
  }
  if (theme === 'light'){
    seriesUnit.symbol = 'circle';
    seriesUnit.itemStyle = {
      shadowBlur: 2,
      borderWidth: 3,
      borderColor: '#FFFFFF',
      shadowColor: 'rgba(0, 0, 0, .2)',
    };
  }
  if (theme === 'dark'){
    seriesUnit.symbol = 'circle';
    seriesUnit.itemStyle = {
      shadowBlur: 2,
      borderWidth: 3,
      borderColor: '#191919',
      shadowColor: 'rgba(0, 0, 0, .2)',
    };
  }
}

function handleItemStyle(seriesUnit, itemStyle) {
  if (!itemStyle) return;
  // 兼容老版本的 itemStyle.symbolSize
  if (itemStyle.symbolSize) {
    seriesUnit.symbolSize = itemStyle.symbolSize;
  }
  for (const key in itemStyle) {
    seriesUnit.itemStyle[key] = itemStyle[key];
  }
}

function handleSeries(params) {
  const {
    theme,
    stack,
    focus,
    colors,
    isStep,
    isArea,
    series,
    isSmooth,
    markLine,
    markPoint,
    splitLine,
    legendData,
    seriesData,
    localSeriesUnit,
  } = params;
  legendData.forEach((legend, index) => {
    const seriesUnit = cloneDeep(localSeriesUnit);
    // 折线平滑
    seriesUnit.smooth = isSmooth || false;
    // 折线阶梯
    seriesUnit.step = (isStep && 'end') || false;
    // 阈值线
    markLine && handleMarkLine(markLine, seriesUnit, theme, legend);
    // 峰值标记
    markPoint && handleMarkPoint(markPoint, seriesUnit, theme, legend);
    // 聚焦效果
    focus && handleFocus(focus, seriesUnit);
    // 数据 / 数据名称
    seriesUnit.name = legend;
    seriesUnit.data = seriesData[legend];
    // 堆叠效果
    stack && handleStack(stack, seriesUnit);
    series.push(seriesUnit);
  });
}

function handleYaxis(series, yAxis) {
  if (Array.isArray(yAxis)) {
    yAxis.forEach((y, index) => {
      series.forEach((s, indexs) => {
        if (y.dataName && y.dataName.includes(s.name)) {
          series[indexs].yAxisIndex = index;
        }
      });
    });
  }
}

function handleMarkLine(markLine, seriesUnit, theme, seriesName) {
  seriesUnit.markLine = cloneDeep(markLineDefault);
  if (markLine.top && !(markLine.topUse && markLine.topUse.indexOf(seriesName) === -1)) {
    var markLineData = {};
    if (isString(markLine.top)) {
      markLineData = { type: markLine.top };
    } else {
      markLineData = { yAxis: markLine.top };
    }
    markLineData.label = { show: false, position: 'insideEndTop' };
    markLineData.lineStyle = {};
    markLine.topPosition && (markLineData.label.position = markLine.topPosition || 'insideStartTop');
    markLine.topLabel && (markLineData.label.show = true);
    markLine.topLabel && (markLineData.label.formatter = markLine.topLabel);
    if (!markLine.topColor) { markLine.topColor = Theme.color.state.error; }
    if (markLine.topColor === 'auto') { markLine.topColor = undefined; }
    markLine.topColor && (markLineData.label.color = markLine.topColor);
    markLine.topColor && (markLineData.lineStyle.color = markLine.topColor);
    if (markLine.topLine === false) { markLineData.lineStyle.color = 'transparent' }
    seriesUnit.markLine.data.push(markLineData);
  }
  if (markLine.bottom && !(markLine.bottomUse && markLine.bottomUse.indexOf(seriesName) === -1)) {
    var markLineData = {};
    if (isString(markLine.bottom)) {
      markLineData = { type: markLine.bottom };
    } else {
      markLineData = { yAxis: markLine.bottom };
    }
    markLineData.label = { show: false, position: 'insideEndTop' };
    markLineData.lineStyle = {};
    markLine.bottomPosition && (markLineData.label.position = markLine.bottomPosition || 'insideStartTop');
    markLine.bottomLabel && (markLineData.label.show = true);
    markLine.bottomLabel && (markLineData.label.formatter = markLine.bottomLabel);
    if (!markLine.bottomColor) { markLine.bottomColor = Theme.color.state.error; }
    if (markLine.bottomColor === 'auto') { markLine.bottomColor = undefined; }
    markLine.bottomColor && (markLineData.label.color = markLine.bottomColor);
    markLine.bottomColor && (markLineData.lineStyle.color = markLine.bottomColor);
    if (markLine.bottomLine === false) { markLineData.lineStyle.color = 'transparent' }
    seriesUnit.markLine.data.push(markLineData);
  }
}

function handleMarkPoint(markPoint, seriesUnit, theme, seriesName) {
  seriesUnit.markPoint = cloneDeep(markPointDefault);
  const colorState=Theme.color.state
  if (markPoint.max && !(markPoint.maxUse && markPoint.maxUse.indexOf(seriesName) === -1)) {
    const max = { type: 'max', symbolOffset: [0, -11], itemStyle: { color: markPoint.maxColor ||colorState.error } };
    if (markPoint.maxColor == 'auto') delete max.itemStyle;
    seriesUnit.markPoint.data.push(max);
  }
  if (markPoint.min && !(markPoint.minUse && markPoint.minUse.indexOf(seriesName) === -1)) {
    const min = { type: 'min', symbolOffset: [0, 11], symbolRotate: 180, itemStyle: { color: markPoint.minColor || colorState.error } };
    if (markPoint.minColor == 'auto') delete min.itemStyle;
    seriesUnit.markPoint.data.push(min);
  }
}

function handleStack(stack, seriesUnit) {
  if(stack === true){
    seriesUnit.stack = 'Total';
    return;
  }
  if (isObject(stack)) {
    for (const name in stack) {
      if (Object.hasOwnProperty.call(stack, name)) {
        const stackArray = stack[name];
        const seriesName = seriesUnit.name;
        if(stackArray.indexOf(seriesName) !== -1){
          seriesUnit.stack = name;
        }
        break;
      }
    }
  }
}

function handleFocus(focus, seriesUnit) {
  if (focus) {
    seriesUnit.emphasis = {
      focus: 'series',
      blurScope: 'global',
    }
  }
}