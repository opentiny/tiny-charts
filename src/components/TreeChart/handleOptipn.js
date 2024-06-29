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
import merge from '../../util/merge';
import tooltip from '../../option/config/tooltip';

/**
 * 配置鼠标悬浮提示框
 */
export function setTooltip(baseOpt, iChartOpt) {
  const basicTip = tooltip(iChartOpt);
  basicTip.trigger = 'item';
  baseOpt.tooltip = basicTip
}

/**
 * 设置ChartPadding
 */
export function setChartPadding(seriesItem, type, iChartOption) {
  let position;
  // 默认值
  if (type === 'RingTreeChart') {
    position = {
      top: 100,
      right: 150,
      bottom: 100,
      left: 150,
    }
  }
  if (type === 'LineTreeChart') {
    const positionMap = {
      left: {
        top: 100,
        right: 150,
        bottom: 100,
        left: 150,
      },
      top: {
        top: 80,
        right: 20,
        bottom: 150,
        left: 20,
      },
      bottom: {
        top: 150,
        right: 20,
        bottom: 80,
        left: 20,
      },
      right: {
        top: 20,
        right: 150,
        bottom: 20,
        left: 150,
      },

    }
    const direction = iChartOption.direction || 'left'
    position = positionMap[direction]
  }

  if (iChartOption.padding && iChartOption.padding.length > 0) {
    if (iChartOption.padding.length === 1) {
      position.top = iChartOption.padding[0];
      position.right = iChartOption.padding[0];
      position.bottom = iChartOption.padding[0];
      position.left = iChartOption.padding[0];
    }

    if (iChartOption.padding.length === 2) {
      position.top = iChartOption.padding[0];
      position.right = iChartOption.padding[1];
      position.bottom = iChartOption.padding[0];
      position.left = iChartOption.padding[1];
    }

    if (iChartOption.padding.length === 3) {
      position.top = iChartOption.padding[0];
      position.right = iChartOption.padding[1];
      position.bottom = iChartOption.padding[2];
      position.left = iChartOption.padding[1];
    }

    if (iChartOption.padding.length === 4) {
      position.top = iChartOption.padding[0];
      position.right = iChartOption.padding[1];
      position.bottom = iChartOption.padding[2];
      position.left = iChartOption.padding[3];
    }
  }
  merge(seriesItem, position);
}
