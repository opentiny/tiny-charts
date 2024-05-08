/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
/**
 * 获取用于token的颜色对象
 * @param {object} gray 灰阶包含透明色
 * @param {object} colorState 状态色
 * @param {Array} colorGroup 颜色组
 * @param {object} colorBoard 色板
 */
function getThemeColor(gray, colorState, colorGroup,colorBoard) {
  return {
    grayScale: {
      ...gray,
    },
    colorSet: {
      colorState,
      colorGroup,
    },
    colorBoard
  };
}

/**
 * 将图表的配色对象拉平为数组
 * @param {object} colorChart 图表的配色对象
 */

function getColorGroup(colorChart) {
  return Object.values(colorChart);
}

export { getThemeColor, getColorGroup };
