import base from './base';
import name from './name';
import axisLine from './axisLine';
import axisLabel from './axisLabel';
import axisMargin from './axisMargin';
import boundaryGap from './boundaryGap';
import megre from '../../../util/megre';
import { toArray } from '../../../util/type';

function xAxis(iChartOpt, chartName) {
  const theme = iChartOpt.theme;
  let xAxisResult = iChartOpt.xAxis || {};
  xAxisResult = toArray(xAxisResult).map(xAxisItem => {
    let xAxisUnit = base(theme);
    // 坐标轴名称
    name(xAxisUnit, xAxisItem, iChartOpt);
    // 坐标轴两边留白策略
    boundaryGap(xAxisUnit, xAxisItem, iChartOpt);
    // 刻度标签
    axisLabel(xAxisUnit, xAxisItem, iChartOpt);
    // 坐标轴刻度
    axisLine(xAxisUnit, xAxisItem, iChartOpt);
    // 坐标轴前后留白
    axisMargin(xAxisUnit, xAxisItem, iChartOpt);
    // 覆盖属性
    megre(xAxisUnit, xAxisItem);
    return xAxisUnit;
  });
  return xAxisResult;
}

/**
 * 配置横轴样式
 */
export default xAxis;
