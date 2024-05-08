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
import { direction } from '../CommonConstant';

class Line2G {
  constructor({ ctx, imageList, canvasWidth, direction }, verCenterPoint, interval) {
    this.ctx = ctx;
    this.imageList = imageList;
    this.verCenterPoint = verCenterPoint;
    this.canvasWidth = canvasWidth;
    this.direction = direction;
    this.interval = interval;
  }

  draw() {
    const { image2R, image2L } = this.imageList;
    const { left } = direction;
    for (let i = 0; i < this.canvasWidth; i++) {
      let image;
      if (this.direction === left) {
        image = image2L.image;
      } else {
        image = image2R.image;
      }
      if (i % this.interval === 0) {
        this.ctx.drawImage(image, i, this.verCenterPoint);
      }
    }
  }
}

export default Line2G;