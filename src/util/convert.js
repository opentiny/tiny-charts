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
const pxToNumber = pxText => {
  return pxText.split('px')[0] - 0;
};

// 日期格式化
const formatDate = (date, fmt) => {
  const padZero = (value) => (value < 10 ? `0${value}` : value);
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());
  const millisecond = padZero(date.getMilliseconds());
  return fmt.replace(/y+/, year)
    .replace(/M+/, month)
    .replace(/d+/, day)
    .replace(/h+/, hour)
    .replace(/m+/, minute)
    .replace(/s+/, second)
    .replace(/S/, millisecond);
};

export { pxToNumber, formatDate };
