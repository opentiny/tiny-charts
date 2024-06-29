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
// 柱子高度
const BAR_HEIGHT = 20;
// 间距
const SPACE = 4;
// 圆角
const BORDER_RADIUS = 4;

const TIMELIMIT = [
  {
    sTime: 0,
    eTime: 4 / 24,
    limit: 3,
  },
  {
    sTime: 4 / 24,
    eTime: 1,
    limit: 12,
  },
  {
    sTime: 1,
    eTime: 2,
    limit: 30,
  },
  {
    sTime: 2,
    eTime: 3,
    limit: 35,
  },
  {
    sTime: 3,
    eTime: 4,
    limit: 50,
  },
  {
    sTime: 4,
    eTime: 5,
    limit: 60,
  },
  {
    sTime: 5,
    eTime: 6,
    limit: 75,
  },
  {
    sTime: 6,
    eTime: 7,
    limit: 90,
  },
];

// 毫秒数
const SECONDS = {
  seconds: 1000,
  minuteSeconds: 60 * 1000,
  hourSeconds: 60 * 60 * 1000,
  daySeconds: 24 * 60 * 60 * 1000,
  weekSeconds: 7 * 24 * 60 * 60 * 1000,
};

export { BAR_HEIGHT, SPACE, BORDER_RADIUS, TIMELIMIT, SECONDS };
