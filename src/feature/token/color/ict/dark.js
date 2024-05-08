/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
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

// 图表的状态颜色(规范不是从色板取的,来源未知)
const colorState = {
  // 错误色
  colorError: '#F43146',
  colorAlert: '#EC6F1A',
  colorWarning: '#EEBA18',
  // 成功色
  colorSuccess: '#0D9458',
  // 提示色
  colorInfo: '#5990FD',
  // 失效
  colorNone: '#818181',
};

// 图表的配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue60,
  colorChart2: board.mint.colorMint50,
  colorChart3: board.purple.colorPurple60,
  colorChart4: board.cyan.colorCyan60,
  colorChart5: board.yellow.colorYellow40,
  colorChart6: board.indigo.colorIndigo50,
  colorChart7: board.cyan.colorCyan50,
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const dark = getThemeColor(gray, colorState, colorGroup,board);

export default dark;
