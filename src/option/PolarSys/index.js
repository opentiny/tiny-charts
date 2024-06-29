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
import title from '../config/polarTitle';
import legend from '../config/legend';
import tooltip from '../config/tooltip';
import angleAxis from '../config/angleAxis';
import radiusAxis from '../config/radiusAxis';
import polar from '../config/polar';

// 极坐标系所需的基础配置
function PolarCoordSys(baseOpt, iChartOpt, chartName) {
  // 图表基础颜色
  baseOpt.color = iChartOpt.color;

  // 图表的圆环角度轴
  baseOpt.angleAxis = angleAxis(iChartOpt, chartName);

  // 图表的圆环径向轴
  baseOpt.radiusAxis = radiusAxis(iChartOpt, chartName);

  // 图表的圆环位置
  baseOpt.polar = polar(iChartOpt, chartName);

  // 图表鼠标悬浮提示框
  baseOpt.tooltip = tooltip(iChartOpt, chartName);

  // 图表中间的文字使用 title 属性实现
  baseOpt.title = title(iChartOpt, chartName);

  // 图表图例
  baseOpt.legend = legend(iChartOpt);
}

export default PolarCoordSys;
