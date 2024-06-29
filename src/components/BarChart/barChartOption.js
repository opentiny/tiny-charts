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
// 柱状图柱条响应式配置
const BarChartOption = (width, option) => {

  // 计算柱子宽度
  let barWidth;
  const rows = option.series[0].data.length;
  const columns = option.series.length;
  const intervalRows = rows;

  // 柱子宽度为16px的初始间距 
  const interval = (width - (rows * columns * 16 + rows * 4 * (columns - 1))) / intervalRows

  if (interval >= 16) {
    barWidth = 16;
  }
  else {
    const flag = (width - intervalRows * 16 - rows * 4 * (columns - 1)) / (rows * columns)
    barWidth = flag > 2 ? flag : 2
  }

  const barGap = `${4 / barWidth * 100}%`

  option.series.forEach(item => {
    Object.assign(item, {
      barWidth,
      barGap
    });
  });
};

// 动态计算柱条宽度更新配置项
const updateWidth = (baseOption, chartInstance, iChartOption) => {
  let width;
  if (chartInstance.getModel()) {
    if (iChartOption.direction === 'horizontal') {
      width = chartInstance.getModel().getComponent('grid').coordinateSystem.getRect().height;
    } else {
      width = chartInstance.getModel().getComponent('grid').coordinateSystem.getRect().width;
    }
    BarChartOption(width, baseOption);
  }
}

export default updateWidth;