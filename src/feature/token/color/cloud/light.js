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

// 图表的状态颜色
const colorState = {
  // 紧急色
  colorError: board.red.colorRed60,
  colorAlert: board.orange.colorOrange60,
  colorWarning: board.yellow.colorYellow60,
  // 成功色
  colorSuccess: board.kelly.colorKelly60,
  // 提示色
  colorInfo: board.blue.colorBlue60,
  // 失效
  colorNone: board.gray.colorGray50,
};

// 图表配色对象 
const colorChart = {
  colorChart1: board.blue.colorBlue60,
  colorChart2: board.mint.colorMint70,
  colorChart3: board.indigo.colorIndigo50,
  colorChart4: board.kelly.colorKelly60,
  colorChart5: board.yellow.colorYellow60,
  colorChart6: board.sky.colorSky60,
  colorChart7: board.purple.colorPurple50,
  colorChart8: board.rose.colorRose60,
  colorChart9: board.blue.colorBlue40,
  colorChart10: board.mint.colorMint80,
  colorChart11: board.indigo.colorIndigo30,
  colorChart12: board.kelly.colorKelly80,
  colorChart13: board.yellow.colorYellow40,
  colorChart14: board.sky.colorSky80,
  colorChart15: board.purple.colorPurple40,
  colorChart16: board.rose.colorRose70,
  colorChart17: board.mint.colorMint50,
  colorChart18: board.blue.colorBlue80,
  colorChart19: board.kelly.colorKelly40,
  colorChart20: board.indigo.colorIndigo60,
  colorChart21: board.sky.colorSky40,
  colorChart22: board.yellow.colorYellow80,
  colorChart23: board.rose.colorRose30,
  colorChart24: board.purple.colorPurple70,
  colorChart25: board.lime.colorLime80
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const light = getThemeColor(gray, colorState, colorGroup, board);

export default light;
