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
import board from './board';
import { getThemeColor, getColorGroup } from '../util';

const gray = {
  ...board.gray,
  ...board.transparent,
};

const colorState = {
  // 错误色
  colorError: board.red.colorRed50,
  colorAlert: board.orange.colorOrange50,
  colorWarning: board.yellow.colorYellow50,
  // 成功色
  colorSuccess: board.mint.colorMint50,
  // 信息色
  colorInfo: board.blue.colorBlue50,
  // 失效色
  colorNone: board.gray.colorGray30,
};

// 图表的配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue50,
  colorChart2: board.green.colorGreen50,
  colorChart3: board.indigo.colorIndigo50,
  colorChart4: board.cyan.colorCyan50,
  colorChart5: board.orange.colorOrange40,
  colorChart6: board.brand.colorBrand30,
  colorChart7: board.purple.colorPurple40,
  colorChart8: board.rose.colorRose40,
  colorChart9: board.indigo.colorIndigo20,
  colorChart10: board.yellow.colorYellow60,
  colorChart11: board.brand.colorBrand10,
  colorChart12: board.green.colorGreen60,
  colorChart13: board.purple.colorPurple20,
  colorChart14: board.cyan.colorCyan60,
  colorChart15: board.orange.colorOrange20,
  colorChart16: board.rose.colorRose60,
  colorChart17: board.cyan.colorCyan20,
  colorChart18: board.blue.colorBlue60,
  colorChart19: board.green.colorGreen20,
  colorChart20: board.indigo.colorIndigo70,
  colorChart21: board.rose.colorRose10,
  colorChart22: board.cyan.colorCyan70,
  colorChart23: board.yellow.colorYellow20,
  colorChart24: board.purple.colorPurple70,
  colorChart25: board.mint.colorMint20
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const light = getThemeColor(gray, colorState, colorGroup, board);

export default light;
