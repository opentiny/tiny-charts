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
  colorError: board.red.colorRed40,
  colorAlert: board.orange.colorOrange50,
	colorWarning: board.yellow.colorYellow40,
	// 成功色
  colorSuccess: board.mint.colorMint60,
  // 信息色
  colorInfo: board.blue.colorBlue50,
  // 失效色
  colorNone: board.gray.colorGray60,
};

// 图表的配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue50,
  colorChart2: board.green.colorGreen50,
  colorChart3: board.indigo.colorIndigo50,
  colorChart4:board.orange.colorOrange50,
  colorChart5: board.cyan.colorCyan50,
  colorChart6: board.pink.colorPink50,
  colorChart7:  board.mint.colorMint50,
  colorChart8: board.yellow.colorYellow50,
  colorChart9:  board.purple.colorPurple50,
  colorChart10: board.rose.colorRose50,
  colorChart11:board.brand.colorBrand50
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const dark = getThemeColor(gray, colorState, colorGroup,board);

export default dark;
