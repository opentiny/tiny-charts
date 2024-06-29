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
import { direction } from '../CommonConstant';

class Line2G {
  constructor({ ctx, imageList, canvasWidth, direction }, verCenterPoint, interval, lineStrokeColor, intervalType) {
    this.ctx = ctx;
    this.imageList = imageList;
    this.verCenterPoint = verCenterPoint;
    this.canvasWidth = canvasWidth;
    this.direction = direction;
    this.interval = interval;
    this.intervalType = intervalType;
  }

  draw() {
    const { image2R, image2L, image5R, image5L, wirelessR, wirelessL } = this.imageList;
    const { left } = direction;
    for (let i = 0; i < this.canvasWidth; i++) {
      let image;
      if (this.direction === left) {
        switch (this.intervalType) {
          case '2.4G':
            image = image2L.image;
            break;
          case '5G':
            image = image5L.image;
            break;
          case 'wireless':
            image = wirelessL.image;
            break;
        }
      } else {
        switch (this.intervalType) {
          case '2.4G':
            image = image2R.image;
            break;
          case '5G':
            image = image5R.image;
            break;
          case 'wireless':
            image = wirelessR.image;
            break;
        }
      }
      if (i % this.interval === 0) {
        this.ctx.drawImage(image, i, this.verCenterPoint);
      }
    }
  }
}

export default Line2G;