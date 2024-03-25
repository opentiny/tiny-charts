import { direction } from '../CommonConstant';

class Line5G {
  constructor({ ctx, imageList, canvasWidth, direction }, verCenterPoint, interval) {
    this.ctx = ctx;
    this.imageList = imageList;
    this.verCenterPoint = verCenterPoint;
    this.canvasWidth = canvasWidth;
    this.direction = direction;
    this.interval = interval;
  }

  draw() {
    const { image5R, image5L } = this.imageList;
    const { left } = direction;
    for (let i = 0; i < this.canvasWidth; i++) {
      let image;
      if (this.direction === left) {
        image = image5L.image;
      } else {
        image = image5R.image;
      }
      if (i % this.interval === 0) {
        this.ctx.drawImage(image, i, this.verCenterPoint);
      }
    }
  }
}

export default Line5G;