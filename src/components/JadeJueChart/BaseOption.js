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
const sum = 0;
const BaseOption = {
  tooltip: {},
  angleAxis: {
    min: 0,
    sum: 0,
    max: (sum * 4) / 3,
  },
  polar: {},
  series: []
};
// 堆叠图中首、中间、尾、背景条 四种的圆角文本占位。需要等自适应代码执行完毕，再替换成为真实的数值
const borderRadiusText = 'barWith/2';

const CHARTTYPE = {
  BASE: 'base',
  PROCESS: 'process',
  STACK: 'stack'
};

const defaultSeries = {
  type: 'bar',
  stack: 'a',
  coordinateSystem: 'polar',
  z: 2,
};

export default BaseOption;
export { borderRadiusText, CHARTTYPE, defaultSeries };
