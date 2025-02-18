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
// 目前没有黑色主题，图表配色延用白色主题
import board from './board-dark';
import { getThemeColor, getColorGroup } from '../util';

const gray = {
  ...board.gray,
  ...board.transparent,
};

// 图表的状态颜色
const colorState = {
  // 紧急色
  colorError: board.red.colorRed80,
  colorAlert: board.orange.colorOrange80,
  colorWarning: board.yellow.colorYellow70,
  // 成功色
  colorSuccess: board.green.colorGreen70,
  // 提示色
  colorInfo: board.blue.colorBlue70,
  // 失效
  colorNone: board.gray.colorGray50,
};

// 图表配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue70,
  colorChart2: board.mint.colorMint70,
  colorChart3: board.indigo.colorIndigo70,
  colorChart4: board.green.colorGreen70,
  colorChart5: board.yellow.colorYellow70,
  colorChart6: board.sky.colorSky70,
  colorChart7: board.purple.colorPurple70,
  colorChart8: board.rose.colorRose70,
  colorChart9: board.blue.colorBlue50,
  colorChart10: board.mint.colorMint90,
  colorChart11: board.indigo.colorIndigo40,
  colorChart12: board.green.colorGreen90,
  colorChart13: board.yellow.colorYellow50,
  colorChart14: board.sky.colorSky90,
  colorChart15: board.purple.colorPurple50,
  colorChart16: board.rose.colorRose90,
  colorChart17: board.mint.colorMint50,
  colorChart18: board.blue.colorBlue90,
  colorChart19: board.green.colorGreen50,
  colorChart20: board.indigo.colorIndigo90,
  colorChart21: board.sky.colorSky50,
  colorChart22: board.yellow.colorYellow90,
  colorChart23: board.rose.colorRose40,
  colorChart24: board.purple.colorPurple90,
  colorChart25: board.lime.colorLime90
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const dark = getThemeColor(gray, colorState, colorGroup, board);

export default dark;
