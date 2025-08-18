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
const BarChartOption = (width, option, type, stack, theme) => {

  // 计算柱子宽度
  let barWidth;
  // 定义默认列数
  let columns = option.series.length;
  // 包含柱状图/双向柱状图只有一个柱子
  if (type === 'contain' || type === 'both-sides' || type === 'double-sides') {
    columns = 1;
  }
  //堆叠柱状图的柱子需要另外判断
  else if (type === 'stack') {
    columns = stack ? Object.keys(stack).length : 1;
  }
  else if (type === 'range' || type === 'water-fall') {
    columns = option.series.length / 2;
  }

  // data的数据是异步时，option.series可能不存在，需要多场景测试
  const rows = option.series[0]?.data?.length || option.series?.length;
  // rows是数据行数，intervalRows是参与计算间距的行数
  const intervalRows = rows;

  // 初始柱宽和不同系列柱子间距 hd是16，cloud是8
  const rawBarwidth = (theme ?? '').includes('cloud') ? 8 : 16;
  const rawBarGap = (theme ?? '').includes('cloud') ? 2 : 4;
  // 需要根据主题设置柱子之间初始间距
  const interval = (width - (rows * columns * rawBarwidth + rows * rawBarGap * (columns - 1))) / intervalRows

  if (interval >= 16) {
    barWidth = rawBarwidth;
  }
  else {
    const flag = (width - intervalRows * 16 - rows * rawBarGap * (columns - 1)) / (rows * columns)
    barWidth = flag > 2 ? flag : 2
  }

  // 不同系列柱子之间的距离
  let barGap;
  if (type === 'contain') {
    barGap = `-100%`;
  }
  // 柱间距离hd规范是4px，cloud是2px
  else {
    barGap = `${rawBarGap / barWidth * 100}%`
  }

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
    BarChartOption(width, baseOption, iChartOption.type, iChartOption.stack, iChartOption.theme);
  }
}

export default updateWidth;