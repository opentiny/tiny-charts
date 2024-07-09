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
import base from './base';
import title from '../rectTitle';
import { isArray } from '../../../util/type';
import fluctuation from '../../../feature/fluctuation/index';
import { transformData } from '../../../feature/fluctuation/index';
import merge from '../../../util/merge';

function isNeedTitle(yAxisOpt, yAxisName) {
  if (yAxisName) {
    return true;
  }
  if (yAxisOpt.length === 1 && yAxisOpt[0] && yAxisOpt[0].position !== 'right') {
    return true;
  }
  return false;
}

function yAxis(baseOpt, iChartOpt, chartName, callback) {
  let yAxisOpt = iChartOpt.yAxis;
  const yAxisName = iChartOpt.yAxisName;
  const data = iChartOpt.data;
  if (!isArray(yAxisOpt)) {
    yAxisOpt = [yAxisOpt];
  }
  if (isNeedTitle(yAxisOpt, yAxisName)) {
    baseOpt.title = title(iChartOpt, chartName, yAxisOpt[0]?.nameTextStyle);
  }
  // 循环y轴配置
  const yAxis = [];
  yAxisOpt.forEach((item, index) => {
    let temp = base();
    if (item && item.unit) {
      temp.axisLabel.formatter = `{value} ${item.unit}`;
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
      const newdata = transformData(data);
      const value = fluctuation(newdata);
      temp.min = value[0];
      temp.max = value[1];
    }
    // 动态优化y轴范围
    if (item && item.allowRange) {
      const newdata = transformData(data);
      const value = fluctuation(newdata, item.allowRange);
      temp.min = value[0];
      temp.max = value[1];
    }
    callback && callback(temp, index)
    temp = merge(temp, item);
    if (index === 0 && yAxisOpt.length === 1 && temp.position !== 'right') {
      delete temp.name;
    }
    yAxis.push(temp);
  });
  return yAxis;
}

export default yAxis;
