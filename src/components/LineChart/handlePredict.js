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
import chartToken from './chartToken';

function setDashedLineVisualMap(seriesIndex, lineColor, predictIndex) {
  const vm = {
    type: 'piecewise',
    seriesIndex,
    dimension: 0,
    show: false,
    pieces: [
      {
        gte: 0,
        lte: predictIndex,
        color: chartToken.colorNone,
      },
      {
        gt: predictIndex,
        color: lineColor,
      },
    ],
  };
  return vm;
}

/**
 * 针对预测值图表需求，图表需要进行特殊处理
 */
export function handlePredict(option, iChartOpt) {
  const { predict, lineStyle } = iChartOpt
  if (!predict) return
  // VisualMap只能处理线的颜色，不能处理面积的颜色
  let dashColor = chartToken.maskColor;
  if (lineStyle && lineStyle.dashColor) {
    dashColor = lineStyle.dashColor;
  }
  // 取出数据
  const data = option.series;
  const dataLength = data.length;
  const xAxisDataLength = option.xAxis[0].data.length;
  const predictIndex = option.xAxis[0].data.indexOf(predict);
  // 制作虚线的series(只有匹配成功即predictIndex>-1时，才设置阈值线的样式)
  if (predictIndex > -1) {
    for (let index = 0; index < dataLength; index++) {
      const temp = cloneDeep(data[index]);
      temp.lineStyle = {
        // 为了视觉上看不见盖住粗细+1
        width: chartToken.lineWidth + 1,
        type: [5, 8],
      };
      temp.itemStyle = {
        opacity: 0,
      };
      temp.silent = true;
      temp.showSymbol = false;
      temp.showAllSymbol = false;
      // 插入虚线的series
      option.series.push(temp);
      // 虚线颜色
      option.visualMap.push(setDashedLineVisualMap(dataLength + index, dashColor, predictIndex, xAxisDataLength));
    }
  }
}
