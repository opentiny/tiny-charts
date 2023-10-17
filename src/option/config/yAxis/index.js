import base from './base';
import title from '../title';
import { isArray } from '../../../util/type';
import { getNewData, getAxisRangeFromData } from '../../../feature/fluctuation/index'

function yAxis(baseOpt, iChartOpt, chartName) {
  let theme = iChartOpt.theme;
  let yAxisOpt = iChartOpt.yAxis;
  let yAxisName = iChartOpt.yAxisName;
  let data = iChartOpt.data;
  if (!isArray(yAxisOpt)) {
    yAxisOpt = [yAxisOpt];
  }
  if (isNeedTitle(yAxisOpt, yAxisName)) {
    baseOpt.title = title(iChartOpt, chartName);
  }
  // 循环y轴配置
  let yAxis = [];
  yAxisOpt.forEach((item, index) => {
    let temp = base(theme);
    if (item && item.unit) {
      temp.axisLabel.formatter = `{value} ${item.unit}`;
      // delete item.unit;
    }
    if (item && item.formatter) {
      temp.axisLabel.formatter = item.formatter;
    }
    if (item && item.name) {
      item.nameTextStyle = Object.assign(temp.nameTextStyle, item.nameTextStyle);
    }
    if (item && item.labelTextStyle) {
      item.labelTextStyle = Object.assign(temp.axisLabel, item.labelTextStyle);
    }
    if (item && item.splitLine) {
      item.splitLine = Object.assign(temp.splitLine, item.splitLine);
    }
    // 静态给定y轴优化范围 
    if (item && item.fluctuation == true) {
      let newdata = getNewData(data);
      let value = getAxisRangeFromData(newdata);
      temp.min = value[0];
      temp.max = value[1];
    }
    // 动态优化y轴范围
    if (item && item.allowRange) {
      let newdata = getNewData(data);
      let value = getAxisRangeFromData(newdata, item.allowRange)
      temp.min = value[0];
      temp.max = value[1];
    }
    temp = Object.assign(temp, item);
    if (index == 0 && yAxisOpt.length == 1 && temp.position !== 'right') {
      delete temp.name;
    }
    yAxis.push(temp);
  });
  return yAxis;
}


function isNeedTitle(yAxisOpt, yAxisName) {
  if (yAxisName) {
    return true;
  }
  if (yAxisOpt.length === 1 && yAxisOpt[0] && yAxisOpt[0].position !== 'right') {
    return true;
  }
  return false;
}

export default yAxis;


