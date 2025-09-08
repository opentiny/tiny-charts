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

import Token from '../../../feature/token';
import merge from '../../../util/merge';
import { isArray } from '../../../util/type';

function getThresholdMarkLineLabel() {
  const { colorError } = Token.config.colorState
  return {
    label: {
      color: colorError,
      fontSize: Token.config.markLineLabelFontSize,
      lineHeight: 20,
      position: 'insideEnd'
    },
    lineStyle: {
      color: colorError,
    },
  }
}


function setThresholdMarkLineLabel(markLine) {
  const thresholdLabel = getThresholdMarkLineLabel()
  merge(markLine, thresholdLabel)
}

// 默认场景就是阈值线
function getMarkLineDefault(isThreshold = false) {
  const lineStyle = {
    width: Token.config.markLineWidth,
  }
  if (isThreshold) lineStyle.color = Token.config.colorState.colorError
  return {
    symbol: 'none',
    silent: true,
    label: {
      show: false,
    },
    lineStyle: lineStyle,
    emphasis: {
      label: {
        show: false,
      },
      lineStyle: {
        width: Token.config.markLineEmphasisWidth,
      },
    },
    data: [],
  };
}

function getMarkPointDefault() {
  return {
    symbol: 'path://M50 0 L0 50 L100 50 Z',
    symbolSize: [10, 6],
    label: {
      show: false,
    },
    data: [],
  };
}

function setThresholdMarkLine(markLine, seriesUnit, seriesName) {
  seriesUnit.markLine = getMarkLineDefault();
  delete seriesUnit.markLine.symbol;
  markLine.forEach(item => {
    if ((item.belong && item.belong.includes(seriesName))) {
      let defMarkLineData = item.yAxis ? { yAxis: item.yAxis } : { xAxis: item.xAxis };
      // 加载规范阈值线的label配置
      setThresholdMarkLineLabel(defMarkLineData);
      defMarkLineData.label.position = 'insideEndTop';
      defMarkLineData.label.show = true;
      // 无阈值线颜色时，设置颜色
      if (!item?.lineStyle?.color) {
        if (!item.lineStyle) item.lineStyle = {};
        item.lineStyle.color = Token.config.colorState.colorError
      }
      // 合并用户数据
      merge(defMarkLineData, item);
      // 移除内部symbol
      delete defMarkLineData.symbol;
      seriesUnit.markLine.data.push(defMarkLineData)
    }
    // 设置端点
    if (item.symbol && !seriesUnit.markLine.symbol) seriesUnit.markLine.symbol = item.symbol;
  })
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
function handleMarkLineMax(baseOption, chartInstance, iChartOption) {
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



export { getMarkLineDefault, getMarkPointDefault, setThresholdMarkLineLabel, setThresholdMarkLine, handleMarkLineMax}