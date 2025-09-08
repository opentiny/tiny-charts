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
import { title, leftRightTitle } from '../rectTitle';
import { isArray } from '../../../util/type';
import merge from '../../../util/merge';
import axisOptimization from './axisOptimization'

function isNeedTitle(yAxisOpt, yAxisName) {
  if (yAxisName) {
    return true;
  }
  if (yAxisOpt.length === 1 && yAxisOpt[0] && yAxisOpt[0].position !== 'right') {
    return true;
  }
  return false;
}

// 只存在一个右Y轴的情况
function alongRightTitle(yAxisOpt) {
  if (yAxisOpt.length === 1 && yAxisOpt[0] && yAxisOpt[0].position === 'right') {
    return true;
  }
}

// 存在两个Y轴且为一左一右
function alongLeftRightTitle(yAxisOpt) {
  const conditionOne =  yAxisOpt[0] && yAxisOpt[0].position === 'left' && yAxisOpt[1] && yAxisOpt[1].position === 'right';
  const conditionTwo =  yAxisOpt[0] && yAxisOpt[0].position === 'right' && yAxisOpt[1] && yAxisOpt[1].position === 'left';
  if (yAxisOpt.length === 2 && (conditionOne || conditionTwo)) {
    return true;
  }
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
  if (alongRightTitle(yAxisOpt)) {
    baseOpt.title = title(iChartOpt, chartName, yAxisOpt[0]?.nameTextStyle,'right');
  }
  if (alongLeftRightTitle(yAxisOpt)) {
    baseOpt.title = leftRightTitle(iChartOpt, chartName);
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
    axisOptimization(item, temp, data)
    callback && callback(temp, index)
    temp = merge(temp, item);
    if (index === 0 && yAxisOpt.length === 1) {
      delete temp.name;
    }
    if (alongLeftRightTitle(yAxisOpt)) {
      delete temp.name;
    }
    yAxis.push(temp);
  });
  return yAxis;
}

export default yAxis;
