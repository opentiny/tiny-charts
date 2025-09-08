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
import { getTextWidth } from '../../../util/dom';
import merge from '../../../util/merge';

/**
 * 配置纵轴名称
 */
function title(iChartOption, chartName, nameTextStyle = {},position) {
  let name = '';
  if (iChartOption.yAxisName) {
    name = iChartOption.yAxisName;
  }
  if (iChartOption.yAxis && iChartOption.yAxis.name) {
    name = iChartOption.yAxis.name;
  }
  if (iChartOption.yAxis && iChartOption.yAxis.length === 1 && iChartOption.yAxis[0].name) {
    name = iChartOption.yAxis[0].name;
  }
  let theme = iChartOption.theme;
  let padding = iChartOption.padding;
  let title = base(theme);
  // 名称
  title.text = name;
  let chartArr = ['BarChart','BulletChart'];
  // 如果图表为柱状图，并且为横向
  if (chartArr.indexOf(chartName) !== -1 && iChartOption.direction === 'horizontal') {
    const nameLength = getTextWidth(name, 12);
    title.right = padding[1] - nameLength - 24;
    title.bottom = padding[2];
    title.textAlign = 'left';
  } else {
    // 位置
    if(position === 'right') {
      title.top = padding[0] - 30;
      title.right = padding[1];
    } else {
      title.padding[0] = padding[0] - 30;
      title.padding[3] = padding[3];
    }
  }
  // y轴文本的样式需要合并到title配置上
  merge(title.textStyle, nameTextStyle);
  merge(title.padding, nameTextStyle.padding);
  delete title.textStyle.padding;
  return title;
}

/**
 * 配置左右纵轴名称
 */
function leftRightTitle(iChartOption, chartName,) {
  let theme = iChartOption.theme;
  let padding = iChartOption.padding;
  let leftTitle = base(theme);
  let rightTitle = base(theme);
  const yAxis = iChartOption.yAxis;
  if(iChartOption.direction !== 'horizontal') {
    yAxis.length && yAxis.forEach(item => {
      if (item.position === 'left') {
        leftTitle.top =  padding[0] - 30;
        leftTitle.left =  padding[3];
        leftTitle.text = item.name;
        const leftNameTextStyle = item.nameTextStyle ? item.nameTextStyle : {};
        merge(leftTitle.textStyle, leftNameTextStyle);
        merge(leftTitle.padding, leftNameTextStyle.padding);
        delete leftTitle.textStyle.padding;
      }
      if (item.position === 'right') {
        rightTitle.top =  padding[0] - 30;
        rightTitle.right =  padding[1];
        rightTitle.text = item.name;
        const rightNameTextStyle = item.nameTextStyle ? item.nameTextStyle : {};
        merge(rightTitle.textStyle, rightNameTextStyle);
        merge(rightTitle.padding, rightNameTextStyle.padding);
        delete rightTitle.textStyle.padding;
      }
    })
  }
  return [leftTitle,rightTitle]
}

export { title, leftRightTitle};