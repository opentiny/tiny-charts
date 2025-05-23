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
  colorAlert: board.orange.colorOrange40,
  colorWarning: '#FDC000',
  // 成功色
  colorSuccess: board.mint.colorMint40,
  // 信息色
  colorInfo: board.blue.colorBlue40,
  // 失效色
  colorNone: '#999999',
};

// 告警色组
const colorAlarms = {
  // 暂定
  colorAlarmFatal: board.red.colorRed70,
  colorAlarmError: board.red.colorRed50,
  colorAlarmWarning: board.orange.colorOrange40,
  colorAlarmSecondary: '#FDC000',
  // 暂定
  colorAlarmOrdinary: board.yellow.colorYellow20,
}


// 图表的配色对象
const colorChart = {
  colorChart1: board.blue.colorBlue40,
  colorChart2: board.cyan.colorCyan30,
  colorChart3: board.cyan.colorCyan70,
  colorChart4: board.green.colorGreen30,
  colorChart5: board.blue.colorBlue60,
  colorChart6: '#999999',
  colorChart7: board.yellow.colorYellow60,
  colorChart8: board.mint.colorMint40,
  colorChart9: board.indigo.colorIndigo60,
  colorChart10: board.indigo.colorIndigo30,
  colorChart11: board.yellow.colorYellow80,
  colorChart12: board.orange.colorOrange40,
  colorChart13: board.mint.colorMint70,
  colorChart14: board.indigo.colorIndigo40,
  colorChart15: board.mint.colorMint100,
  colorChart16: board.purple.colorPurple40,
  colorChart17: board.green.colorGreen50,
  colorChart18: board.red.colorRed50,
};

// 图表内置的颜色组
const colorGroup = getColorGroup(colorChart);

const light = getThemeColor(gray, colorState, colorGroup, colorAlarms, board);

export default light;
