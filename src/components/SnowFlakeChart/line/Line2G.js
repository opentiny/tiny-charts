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