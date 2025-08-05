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
import cloneDeep from '../../util/cloneDeep';
import { isString, isObject, isArray } from '../../util/type';
import { getMarkLineDefault, getMarkPointDefault, setThresholdMarkLineLabel, setThresholdMarkLine } from '../../option/config/mark';
import chartToken from './chartToken';
import Token from '../../feature/token';
import { getColor } from '../../util/color';


export const seriesInit = () => {
  const lineCap = Token.themeName.includes('dpui') ? 'round' : 'butt'
  return {
    label: { show: false },
    // 连线上的小圆点样式
    symbol: 'circle',
    symbolSize: chartToken.symbolSize,
    showSymbol: false,
    // 数据
    data: [],
    // 线形
    type: 'line',
    // 线条样式
    lineStyle: {
      width: chartToken.lineWidth,
      cap: lineCap,
      join: lineCap
    },
    massive: false,
    // 折线阶梯
    step: false,
    // 折线平滑
    smooth: false,
    // 阈值线
    markLine: null,
    // 峰值标志
    markPoint: null,
    // 折线点的每个样式配置项
    itemStyle: {
      //避免hover时偶现实心symbol的情况
      opacity: 0
    },
    emphasis: {
      itemStyle: {
        borderColor: undefined,
        borderWidth: chartToken.border,
        color: chartToken.maskColor,
        opacity: 1
      }
    }
  };
};

//  hover使用emphasis去变更symbol的样式
function setItemBorderColor(seriesUnit, index, colors) {
  const color = getColor(colors, index)
  seriesUnit.emphasis.itemStyle.borderColor = color
}


function handleItemStyle(seriesUnit, itemStyle) {
  if (!itemStyle) return;
  // 兼容老版本的 itemStyle.symbolSize
  if (itemStyle.symbolSize) {
    seriesUnit.symbolSize = itemStyle.symbolSize;
  }
  for (const key in itemStyle) {
    if (Object.hasOwnProperty.call(itemStyle, key)) {
      seriesUnit.itemStyle[key] = itemStyle[key];
    }
  }
}

function isTopOrBottom(markLine, seriesUnit, flag) {
  let position = '';
  let markLinePosition = '';
  let markLineLabel = '';
  let markLineColor = '';
  let markLinelLineStyle;
  let markLineData = {};
  if (flag === 'top') {
    position = markLine.top;
    markLinePosition = markLine.topPosition
    markLineLabel = markLine.topLabel;
    markLineColor = markLine.topColor;
    markLinelLineStyle = markLine.topLine
  } else {
    position = markLine.bottom;
    markLinePosition = markLine.bottomPosition
    markLineLabel = markLine.bottomLabel;
    markLineColor = markLine.bottomColor
    markLinelLineStyle = markLine.bottomLine
  }
  if (isString(position)) {
    markLineData = { type: position };
  } else {
    markLineData = { yAxis: position };
  }

  markLineData.label = { show: false, position: 'insideEndTop', lineHeight: 20 };
  markLineData.lineStyle = {};
  // 没有配置颜色，认为是阈值线，加载阈值线的label配置
  if (!markLineColor) {
    setThresholdMarkLineLabel(markLineData)
  }
  markLinePosition && (markLineData.label.position = markLinePosition);
  if (markLineLabel) {
    markLineData.label.show = true
    markLineData.label.color = 'inherit'
    markLineData.label.formatter = markLineLabel
  }
  if (markLineColor === 'auto') {
    markLineColor = undefined;
  }
  if (markLineColor) {
    markLineData.label.color = markLineColor
    markLineData.lineStyle.color = markLineColor
  }
  if (markLinelLineStyle === false) {
    markLineData.lineStyle.color = chartToken.colorNone;
  }
  seriesUnit.markLine.data.push(markLineData);
}

function handleMarkLine(markLine, seriesUnit, seriesName) {
  if(isArray(markLine)){
    setThresholdMarkLine(markLine, seriesUnit, seriesName)
  }else{
    seriesUnit.markLine = getMarkLineDefault()
    if (markLine.top && !(markLine.topUse && markLine.topUse.indexOf(seriesName) === -1)) {
      isTopOrBottom(markLine, seriesUnit, 'top')
    }
    if (markLine.bottom && !(markLine.bottomUse && markLine.bottomUse.indexOf(seriesName) === -1)) {
      isTopOrBottom(markLine, seriesUnit, 'bottom')
    }
  }
}

function handleMarkPoint(markPoint, seriesUnit, seriesName) {
  seriesUnit.markPoint = getMarkPointDefault();
  const { colorError } = Token.config.colorState
  if (markPoint.max && !(markPoint.maxUse && markPoint.maxUse.indexOf(seriesName) === -1)) {
    const max = {
      type: 'max',
      symbolOffset: [0, -11],
      itemStyle: { color: markPoint.maxColor || colorError },
    };
    if (markPoint.maxColor == 'auto') delete max.itemStyle;
    seriesUnit.markPoint.data.push(max);
  }
  if (markPoint.min && !(markPoint.minUse && markPoint.minUse.indexOf(seriesName) === -1)) {
    const min = {
      type: 'min',
      symbolOffset: [0, 11],
      symbolRotate: 180,
      itemStyle: { color: markPoint.minColor || colorError },
    };
    if (markPoint.minColor == 'auto') delete min.itemStyle;
    seriesUnit.markPoint.data.push(min);
  }
}

function setStack(stack, seriesUnit) {
  for (const name in stack) {
    if (Object.hasOwnProperty.call(stack, name)) {
      const stackArray = stack[name];
      const seriesName = seriesUnit.name;
      if (stackArray.indexOf(seriesName) !== -1) {
        seriesUnit.stack = name;
      }
      break;
    }
  }
}

function handleStack(stack, seriesUnit) {
  if (stack === true) {
    seriesUnit.stack = 'Total';
    return;
  }
  if (isObject(stack)) {
    setStack(stack, seriesUnit)
  }
}

function handleFocus(focus, seriesUnit) {
  if (focus) {
    seriesUnit.emphasis = {
      ...seriesUnit.emphasis,
      focus: 'series',
      blurScope: 'global',
    };
  }
}

function handleSeries(params) {
  const {
    stack,
    focus,
    massive,
    isStep,
    series,
    isSmooth,
    markLine,
    markPoint,
    legendData,
    seriesData,
    localSeriesUnit,
    colors
  } = params;
  legendData.forEach((legend, index) => {
    const seriesUnit = cloneDeep(localSeriesUnit);
    // 折线平滑
    seriesUnit.smooth = isSmooth || false;
    // 大数据
    seriesUnit.large = massive || false;
    seriesUnit.sampling = massive ? 'lttb' : false;
    // 折线阶梯
    seriesUnit.step = (isStep && 'middle') || false;
    // 阈值线
    markLine && handleMarkLine(markLine, seriesUnit, legend);
    // 峰值标记
    markPoint && handleMarkPoint(markPoint, seriesUnit, legend);
    // 聚焦效果
    focus && handleFocus(focus, seriesUnit);
    // 数据 / 数据名称
    seriesUnit.name = legend;
    seriesUnit.data = seriesData[legend];
    setItemBorderColor(seriesUnit, index, colors)
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

/**
 * 组装echarts所需要的series
 */
export function setSeries(params) {
  const { yAxis, itemStyle } = params;
  // 防止同一个页面的不同lineChart之间出现样式串通
  const localSeriesUnit = seriesInit();
  // 覆盖用户传入的itemStyle
  handleItemStyle(localSeriesUnit, itemStyle);
  // 拼装series
  const series = [];
  handleSeries({ ...params, series, localSeriesUnit });
  // 配置多个series的y轴index
  handleYaxis(series, yAxis);
  return series;
}

// 自定义dataset和series
export function setDatasetSeries(baseOpt, iChartOpt) {
  let seriesItem = cloneDeep(seriesInit());
  if (iChartOpt.series) {
    baseOpt.series = [];
    baseOpt.dataset = iChartOpt.dataset;
    baseOpt.series = iChartOpt.series.map(item => {
      seriesItem.data = undefined;
      return Object.assign({}, seriesItem, item)
    })
  }
}

function roundUpToStep(num,step = 0.1) {
  // 计算基数
  const base = Math.floor(num / step) * step;

  // 如果数字正好在基数上，直接返回
  if(num === base) {
    return num;
  }
  // 否则返回下一个基数
  return base + step;
}

// 针对设置的阈值线大于y轴显示，设置max值来保证阈值线能够显示
export function handleMarkLineMax(baseOption, chartInstance, iChartOption) {
  const direction = iChartOption.direction;
  const markLine = iChartOption.markLine;
  let handleAxis = direction === 'horizontal' ? baseOption.xAxis : baseOption.yAxis;
  // 数组格式的markLine
  if(isArray(markLine)) {
      let markLineValue = [];
      markLine.forEach(item => {
        markLineValue.push({
          belong: item.belong,
          value: direction === 'horizontal' ? item.xAxis : item.yAxis
        })
      })
      
      // 单轴处理
      if(handleAxis.length == 1) {
        const markLineValueMax = Math.max(...markLineValue.map(item => {return item.value}));
        // 获取单轴显示的最大值
        const maxValue = chartInstance.getModel().getComponent( direction === 'horizontal' ? 'xAxis' : 'yAxis',0).axis.scale.getExtent()[1];
        if(maxValue < markLineValueMax && !handleAxis[0].max ) {
          handleAxis[0].max = (roundUpToStep(markLineValueMax / maxValue ) * maxValue).toFixed(2);
        }
      } else {
        handleAxis.forEach((item,index) => {
          const dataName = item.dataName;
          let markLineValueArr = [];
          let currentHandleAxis = handleAxis[index];
          dataName.forEach(name => {
            markLineValue.forEach(item => {
              if(item.belong.indexOf(name) != -1) {
                markLineValueArr.push(item.value)
              }
            })
          })
          const markLineValueMax = Math.max(...markLineValueArr);
          const maxValue = chartInstance.getModel().getComponent( direction === 'horizontal' ? 'xAxis' : 'yAxis',index).axis.scale.getExtent()[1];
          if(maxValue < markLineValueMax && !currentHandleAxis.max ) {
            currentHandleAxis.max = (roundUpToStep(markLineValueMax / maxValue ) * maxValue).toFixed(2);
          }
        })
      }
  }
  // 对象格式的markLine
  else {
    const markLineValueMax = markLine.top ? markLine.top : markLine.bottom;
    handleAxis.forEach((item,index) => {
      const maxValue = chartInstance.getModel().getComponent( direction === 'horizontal' ? 'xAxis' : 'yAxis',index).axis.scale.getExtent()[1];
      if(maxValue < markLineValueMax && !handleAxis[index].max ) {
        handleAxis[index].max = (roundUpToStep(markLineValueMax / maxValue ) * maxValue).toFixed(2);
      }
    })
    
  }
  
}