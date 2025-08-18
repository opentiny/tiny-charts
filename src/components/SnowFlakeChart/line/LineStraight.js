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
import { ConnectType } from '../CommonConstant';

class LineStraight {
  constructor({ ctx, canvasWidth, canvasHeight, data }, verCenterPoint, interval, lineStrokeColor) {
    const { lineWidth, connectInterface } = data;
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.lineStrokeColor = lineStrokeColor ?? (connectInterface === ConnectType.SSID_MIX ? '#8c57af' : '');
    this.lineWidth = lineWidth ?? (connectInterface === ConnectType.SSID_MIX ? 8 : 2);
  }
  draw() {
    this.ctx.moveTo(0, this.canvasHeight / 2);
    this.ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.lineStrokeColor;
    this.ctx.stroke();
  }
}

export default LineStraight;