import { getTextWidth, pxToNumber, insertDom, getStyle } from './util.js';
import * as CommonConstant from './CommonConstant.js';

export default class LineManager {
  constructor(container, data, option, deg, imageList) {
    this.container = container;
    this.data = data;
    this.deg = deg;
    this.imageList = imageList; // canvas用到的图片实例
    const containerWidth = getStyle(this.container, 'width'); // 连线分组容器的宽度
    this.canvasWidth = pxToNumber(containerWidth) / 2;
    this.canvasHeight = 150;
    this.judegDirection();
    this.initCanvas();
  }

  // 根据角度确定箭头朝向
  judegDirection() {
    this.direction = 'right';
    if (this.deg > 90 && this.deg < 270) {
      this.direction = 'left';
    }
  }

  initCanvas() {
    // 判断canvas所在的角度，如果是在三四象限，修改canvas的样式(为了解决旋转导致的文本镜像问题)
    let canvasStyle = {
      left: '50%',
      transformOrigin: 'left center',
      transform: `translate(0,-50%) rotate(${this.deg}deg)`
    };
    if (this.direction === 'left') {
      canvasStyle = {
        left: '0%',
        transformOrigin: 'right center',
        transform: `translate(0,-50%) rotate(${this.deg - 180}deg)`
      };
    }
    const canvas = insertDom(this.container,
      {
        class: 'sc-line-item',
        width: this.canvasWidth,
        height: this.canvasHeight,
      },
      { ...canvasStyle },
      'canvas');
    // 绘制canvas连线
    const ctx = canvas.getContext('2d');
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.beginPath();
    // canvas 纵向绘制起始点
    const verPoint = (this.canvasHeight - 8) / 2;
    this.drawLine(ctx, verPoint);
    this.drawText(ctx, verPoint);
    ctx.closePath();
  }

  drawLine(ctx, verPoint) {
    const { image5R, image2R, image5L, image2L } = this.imageList;
    const { radioType, connectInterface } = this.data;
    const { RADIO_TYPE: { TYPE_5G, TYPE_2G } } = CommonConstant;
    // 光纤接入
    if (connectInterface) {
      ctx.moveTo(0, this.canvasHeight / 2);
      ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#666666';
      ctx.stroke();
    } else {
      // 箭头连线
      for (let i = 0; i <= this.canvasWidth; i++) {
        let interval = 10;
        if (radioType === TYPE_2G) {
          interval = 20;
        }
        if (i % interval === 0) {
          let image = radioType === TYPE_5G ? image5R : image2R;
          if (this.direction === 'left') {
            image = radioType === TYPE_5G ? image5L : image2L;
          }
          ctx.drawImage(image, i, verPoint);
        }
      }
    }
  }

  drawText(ctx, verPoint) {
    const { imageUp, imageDown } = this.imageList;
    const { upRate = '0Kpbs', downRate = '0Kpbs' } = this.data;
    ctx.fillStyle = '#f5f5f5';
    ctx.font = '12px  PingFangSC ';
    const maxTextWidth = Math.max(getTextWidth(upRate), getTextWidth(downRate));
    // canvas 横向绘制起始点
    const horPoint = (this.canvasWidth - maxTextWidth) / 2;
    // 上行icon,文本居中往左移16
    ctx.drawImage(imageUp, horPoint - 16, verPoint - 16);
    // 下行icon
    ctx.drawImage(imageDown, horPoint - 16, verPoint + 16);
    // 上行速率，文本居中
    ctx.fillText(upRate, horPoint, verPoint - 8);
    // 下行速率
    ctx.fillText(downRate, horPoint, verPoint + 24);
  }
}