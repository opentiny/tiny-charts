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
// 贝塞尔曲线连线
export default class Bezier {

  // 水平直线占横向距离的百分比
  lineDistance = 0.15;

  // 贝塞尔曲线控制点
  bezierDistance = 0.6;

  // 是否是正交线
  isCrossLine = false;

  constructor(option) {
    this.lineDistance = option.lineOption.lineDistance || 0.15;
    this.bezierDistance = option.lineOption.bezierDistance || 0.6;
  }

  // 计算贝塞尔曲线所有路径的4个节点
  creatPoints(data) {
    const { startConnector, endConnector } = data;
    const startX = startConnector.absolute.x;
    const startY = startConnector.absolute.y;
    const endX = endConnector.absolute.x;
    const endY = endConnector.absolute.y;
    let hDis = endX - startX;
    let vDis = endY - startY;
    // 水平方向开始的贝塞尔线
    let xAxisBegin = ['left', 'right'].includes(startConnector.position);
    let lineDistance = xAxisBegin ? hDis * this.lineDistance : vDis * this.lineDistance;
    let bezierDistance = xAxisBegin ? hDis * this.bezierDistance : vDis * this.bezierDistance;
    // 起点和终点未在垂直或者水平线上,则需要计算贝塞尔连接点
    if (!this.isCrossLine) {
      // 贝塞尔曲线起始点
      data.bezierStartPoint = {
        x: xAxisBegin ? startX + lineDistance : startX,
        y: xAxisBegin ? startY : startY + lineDistance,
      }
      // 贝塞尔曲线第一个控制点
      data.bezierFirstControlPoint = {
        x: xAxisBegin ? data.bezierStartPoint.x + bezierDistance : data.bezierStartPoint.x,
        y: xAxisBegin ? data.bezierStartPoint.y : data.bezierStartPoint.y + bezierDistance,
      };
      // 贝塞尔曲线结束点
      data.bezierEndPoint = {
        x: xAxisBegin ? endX - lineDistance : endX,
        y: xAxisBegin ? endY : endY - lineDistance,
      };
      // 贝塞尔曲线第二个控制点
      data.bezierSecondControlPoint = {
        x: xAxisBegin ? data.bezierEndPoint.x - bezierDistance : data.bezierEndPoint.x,
        y: xAxisBegin ? data.bezierEndPoint.y : data.bezierEndPoint.y - bezierDistance,
      };
    }
  }

  creatPath(data) {
    let { startConnector, endConnector } = data;
    const startX = startConnector.absolute.x.toFixed(2);
    const startY = startConnector.absolute.y.toFixed(2);
    const endX = endConnector.absolute.x.toFixed(2);
    const endY = endConnector.absolute.y.toFixed(2);
    this.isCrossLine = startX === endX || startY === endY
    this.creatPoints(data);
    let { bezierStartPoint, bezierFirstControlPoint, bezierSecondControlPoint, bezierEndPoint } = data;
    let path;
    if (this.isCrossLine) {
      path = `M${startX} ${startY} L${endX} ${endY}`
    } else {
      let a = `M${startX} ${startY}`;
      let b = `L${bezierStartPoint.x.toFixed(2)} ${bezierStartPoint.y.toFixed(2)}`;
      let c = `C${bezierFirstControlPoint.x.toFixed(2)} ${bezierFirstControlPoint.y.toFixed(2)} ${bezierSecondControlPoint.x.toFixed(2)} ${bezierSecondControlPoint.y.toFixed(2)} ${bezierEndPoint.x.toFixed(2)} ${bezierEndPoint.y.toFixed(2)}`;
      let d = `L${endX} ${endY}`;
      path = `${a} ${b} ${c} ${d}`
    }
    return path;
  }
}


