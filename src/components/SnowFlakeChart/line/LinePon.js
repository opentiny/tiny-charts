import { lineStyle } from '../CommonConstant';

class LinePon {
  constructor({ ctx, canvasWidth, canvasHeight }) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }
  draw() {
    this.ctx.moveTo(0, this.canvasHeight / 2);
    this.ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
    this.ctx.lineWidth = lineStyle().lineWidth;
    this.ctx.strokeStyle = lineStyle().strokeStyle;
    this.ctx.stroke();
  }
}

export default LinePon;