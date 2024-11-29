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
// 半圆连线
export default class Circle {

  constructor() { }

  creatPath(data) {
    const { startConnector, endConnector } = data;
    const startX = startConnector.absolute.x;
    const startY = startConnector.absolute.y;
    const endX = endConnector.absolute.x;
    const endY = endConnector.absolute.y;
    const distance = Math.hypot(endX - startX, endY - startY);
    let m = `M${startX} ${startY}`;
    const direction = data.lineOption.style?.direction;
    let isClockwise = 1;
    // direction: top线全部渲染在上半部分，bottom线渲染在下半部分，auto起点向终点顺时针画线
    if (direction === 'top') {
      isClockwise = startX > endX ? 0 : 1;
    }else if (direction === 'bottom') {
      isClockwise = startX > endX ? 1 : 0;
    }
    let a = `A${distance / 2} ${distance / 2} 0 0 ${isClockwise} ${endX} ${endY}`;
    return `${m} ${a}`;
  }
}


