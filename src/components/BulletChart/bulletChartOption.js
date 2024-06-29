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
// 子弹图柱条响应式配置
const BulletChartOption = (width, option, iChartOption) => {

  // 计算柱子宽度
  let barWidth;
  let backgroundWidth;
  const rows = option.series[0].data.length;
  const intervalRows = rows;

  // 柱子宽度为16px的初始间距 
  const interval = (width - rows * 16) / intervalRows

  if (interval >= 16) {
    barWidth = 16;
  }
  else {
    const flag = (width - intervalRows * 16) / rows
    barWidth = flag > 2 ? flag : 2
  }

  // 柱子背景宽度为32px的初始间距 
  const intervalBG = (width - rows * 32) / intervalRows

  if (intervalBG >= 8) {
    backgroundWidth = 32;
  }
  else {
    const flag = (width - intervalRows * 8) / rows
    backgroundWidth = flag > 9 ? flag : 9
  }

  // 计算阈值的偏移量和阈值宽度
  let symbolOffset;
  let symbolSize;
  option.series.forEach(item => {
    if (item.type === 'scatter') {
      symbolSize = item.symbolSize;
      symbolOffset = item.symbolOffset
    }
  });
  if (iChartOption.direction === 'horizontal') {
    symbolOffset[1] = - (backgroundWidth - barWidth) / 4;
    symbolSize[1] = backgroundWidth;
  } else {
    symbolOffset[0] = - (backgroundWidth - barWidth) / 4;
    symbolSize[0] = backgroundWidth;
  }

  // 计算柱子的偏移量
  option.barGap = -((backgroundWidth - barWidth) / 2 / barWidth * 100 + 100) + '%';

  option.series.forEach(item => {
    if (item.color) {
      Object.assign(item, {
        barWidth: backgroundWidth,
      });
    } else {
      Object.assign(item, {
        barWidth
      });
    }

  });
};

const updateWidth = (baseOption, chartInstance, iChartOption) => {
  let width;
  if (chartInstance.getModel()) {
    if (iChartOption.direction === 'horizontal') {
      width = chartInstance.getModel().getComponent('grid').coordinateSystem.getRect().height;
    } else {
      width = chartInstance.getModel().getComponent('grid').coordinateSystem.getRect().width;
    }
    BulletChartOption(width, baseOption, iChartOption);
  }
}

export default updateWidth;