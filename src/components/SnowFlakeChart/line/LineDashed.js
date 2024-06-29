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
class LineDashed {
  constructor({ ctx, canvasWidth, canvasHeight }, verCenterPoint, interval, lineStrokeColor) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.lineStrokeColor = lineStrokeColor;
  }
  draw() {
    this.ctx.moveTo(0, this.canvasHeight / 2);
    this.ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = this.lineStrokeColor;
    this.ctx.setLineDash([5, 5]);
    this.ctx.stroke();
  }
}

export default LineDashed;