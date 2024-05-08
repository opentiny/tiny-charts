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
import board from '../hdesign/board';
import { getThemeColor, getColorGroup } from '../util';

const gray = {
  ...board.gray,
  ...board.transparent,
};

// 图表的状态颜色
const colorState = {
  // 错误色
  colorWarning: board.yellow.colorYellow40,
  colorError: board.red.colorRed40,
  // 信息色
  colorInfo: board.blue.colorBlue50,
  colorAlert: board.orange.colorOrange50,
  // 成功色
  colorSuccess: board.mint.colorMint60,
  // 失效色
  colorNone: board.gray.colorGray60,
};

// 图表配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue50,
  colorChart2: board.cyan.colorCyan40,
  colorChart3: board.indigo.colorIndigo50,
  colorChart4: board.brand.colorBrand30,
  colorChart5: board.pink.colorPink30,
  colorChart6: board.green.colorGreen40,
  colorChart7: board.yellow.colorYellow60,
  colorChart8: board.mint.colorMint40,
  colorChart9: board.purple.colorPurple40,
  colorChart10: board.rose.colorRose40,
  colorChart11: board.orange.colorOrange30,
  colorChart12: board.red.colorRed40,
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const dark = getThemeColor(gray, colorState, colorGroup,board);

export default dark;
