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
import { pxToNumber, insertDom, getStyle, degPositive, getUnitText, getTextWidth, extractNumbersAndDots, judgeDisabled, pctToNumber, setDirection, setStyle } from '../util.js';
import { radioType, direction, interval, textStyle, tagPosition } from '../CommonConstant.js';
import LineStraight from './LineStraight.js';
import LineArrow from './LineArrow.js';
import LineDashed from './LineDashed.js';

const LineFactory = {
  [radioType.TYPE_Straight]: LineStraight,
  [radioType.TYPE_Arrow]: LineArrow,
  [radioType.TYPE_Dashed]: LineDashed,
};
export default class LineManager {
  constructor({ lineWrapper, leafNode }, data, deg, { imageList, option, centerDom, distance, drag }, isSubRoot, tagWidth) {
    this.isSubRoot = isSubRoot;
    this.container = lineWrapper;
    this.data = data;
    this.option = option;
    this.deg = degPositive(deg); // 判断方向前，控制角度在0-360区间
    this.imageList = imageList; // canvas用到的图片实例
    this.canvasWidth;
    this.canvasHeight = 150;
    this.direction = setDirection(this.deg);
    this.canvas;
    this.ctx;
    this.iconSize = 10; // 上下行速率图标尺寸
    this.distance = distance;
    this.centerDom = centerDom.dom;
    this.leafNode = leafNode.dom;
    this.drag = drag;
    this.tagWidth = isSubRoot ? 0 : tagWidth;
    this.createCanvas();
    this.draw();
  }

  // 获取canvas的宽度
  createCanvas() {
    const containerWidth = pxToNumber(getStyle(this.container, 'width')); // 连线分组容器的宽度
    let centerDomWidth = pxToNumber(getStyle(this.centerDom, 'width')); // 中心dom的宽度
    let centerparentWidth = pxToNumber(getStyle(this.centerDom.parentNode, 'width')); // 中心dom外环的宽度
    let leafNodeWidth = pxToNumber(getStyle(this.leafNode, 'width')); // 叶子dom的宽度
    this.canvasWidth = containerWidth / 2 - centerDomWidth / 2;
    if (this.isSubRoot) { // 主从网关的连线，需要考虑distance属性
      // data.distance  只是为了让巴展那边调整主网关上行设备的距离，不推荐使用
      // this.distance是主网关的最右侧到从网关圆心的距离
      this.canvasWidth = (this.data.distance || this.distance) - leafNodeWidth / 2 + centerparentWidth / 2 - centerDomWidth / 2;
    }

    const { left } = direction;
    // 判断canvas所在的角度，如果是在三四象限，修改canvas的样式(为了解决旋转导致的文本镜像问题)
    let canvasStyle;
    if (this.direction === left) {
      canvasStyle = {
        right: `calc(50% + ${centerDomWidth / 2}px)`,
        transformOrigin: `calc(100% + ${centerDomWidth / 2}px) center`,
        transform: `translate(0,-50%) rotate(${this.deg - 180}deg)`
      };
    } else {
      canvasStyle = {
        left: `calc(50% + ${centerDomWidth / 2}px)`,
        transformOrigin: `${-1 * centerDomWidth / 2}px center`,
        transform: `translate(0,-50%) rotate(${this.deg}deg)`
      };
    }

    this.canvas = insertDom(this.container,
      {
        class: 'sfc-line-item',
        width: this.canvasWidth * 2,
        height: this.canvasHeight * 2,
      },
      { ...canvasStyle }, 'canvas');
    this.ctx = this.canvas.getContext('2d');
    // 确保字体清晰
    this.canvas.style.width = this.canvasWidth + 'px';
    this.canvas.style.height = this.canvasHeight + 'px';
    this.ctx.scale(2, 2);
  }

  // 卸载canvas
  destroyCanvas() {
    this.container.removeChild(this.canvas);
  }

  // 绘制canvas连线
  draw() {
    judgeDisabled(this.option, [this.canvas]);
    // overAll视图，非次级根节点，不生成划线和文本
    if (this.option.overAll && !this.isSubRoot) {
      return;
    }
    this.ctx.clearRect(0, 0, 10000, 10000);
    this.ctx.beginPath();
    // canvas 纵向绘制起始点
    const verCenterPoint = (this.canvasHeight - this.iconSize) / 2;
    this.drawLine(verCenterPoint);
    if (!this.option.overAll && this.option.scaleAdaptive) { // 家庭视口
      const scale = this.drag.scale;
      if (scale >= 0.5 && scale <= 0.75) { // 0.5-0.75 隐藏叶子节点的canvas、文本
        !this.isSubRoot && setStyle(this.canvas, { display: 'none' });
      } else if (scale > 0.75 && scale < 0.95) { // 0.75-0.95 展示canvas不展示文本
        setStyle(this.canvas, { display: 'block' });
      } else if (scale >= 0.95 && scale <= 1.5) {
        this.drawText(verCenterPoint); // 0.95-1.5 正常展示
        setStyle(this.canvas, { display: 'block' });
      }
    } else { // 全网视口正常展示文本和canvas
      this.drawText(verCenterPoint);
      setStyle(this.canvas, { display: 'block' });
    }
    this.ctx.closePath();
  }

  drawLine(verCenterPoint) {
    const { connectInterface, lineStrokeColor } = this.data;
    let lineType;
    let intervalType;
    if (connectInterface.indexOf('SSID') !== -1) {
      lineType = 'Arrow';
      intervalType = connectInterface.slice(5);
    } else if (connectInterface.indexOf('wireless') !== -1) {
      lineType = 'Arrow';
      intervalType = 'wireless';
    } else if (connectInterface.indexOf('Dashed') !== -1) {
      lineType = 'Dashed';
    } else {
      lineType = 'Straight';
    }
    const line = new LineFactory[lineType](this, verCenterPoint, interval[intervalType], lineStrokeColor, intervalType);
    line.draw();
  }

  // 待调整  提到drawline内部
  drawText(verCenterPoint) {
    const { imageUp, imageDown } = this.imageList;
    const { upRate, downRate } = this.data;
    const { left } = direction;
    const maxTextWidth = Math.max(getTextWidth(upRate), getTextWidth(downRate));
    // canvas 横向绘制起始点  // 设备取居中往内偏位置
    let actualCanvasRatio = (100 - (100 - tagPosition) * 2) / 100; // 文本在tag和中心点之间的位置
    let horCenterPoint;
    if (this.direction === left) {
      horCenterPoint = this.canvasWidth - maxTextWidth - (this.canvasWidth * actualCanvasRatio - maxTextWidth - this.tagWidth) / 2;
    } else {
      horCenterPoint = (this.canvasWidth * actualCanvasRatio - maxTextWidth - this.tagWidth) / 2;
    }
    // let horCenterPoint = (this.canvasWidth - maxTextWidth) / (this.direction === left ? 2 * 0.6 : 2 / 0.6);
    if (this.isSubRoot) {  // 主从网关默认去居中位置
      horCenterPoint = (this.canvasWidth - maxTextWidth) / 2;
    }
    const { font, bgStyle, fillStyle, unitStyle } = textStyle(this.option.theme);
    this.ctx.font = font;

    // // 上文字背景块，文字居中往左移24
    // this.ctx.roundRect(horCenterPoint - 24, verCenterPoint - 28, maxTextWidth + 24 + 8, 24, 12);
    // // 下文字背景块
    // this.ctx.roundRect(horCenterPoint - 24, verCenterPoint + 12, maxTextWidth + 24 + 8, 24, 12);
    // this.ctx.fillStyle = bgStyle;
    // this.ctx.fill();

    if (upRate) {
      this.ctx.fillStyle = fillStyle;
      // 上行icon,文本居中往左移16
      this.ctx.drawImage(imageUp.image, horCenterPoint - 16, verCenterPoint - 12, this.iconSize, this.iconSize);
      // 上行速率，文本居中
      this.ctx.fillText(extractNumbersAndDots(upRate), horCenterPoint, verCenterPoint - 2);
      // 上行单位
      this.ctx.fillStyle = unitStyle;
      this.ctx.fillText(getUnitText(upRate), horCenterPoint + getTextWidth(extractNumbersAndDots(upRate)) + 4, verCenterPoint - 2);
    }
    if (downRate) {
      this.ctx.fillStyle = fillStyle;
      // 下行icon,文本居中往左移16
      this.ctx.drawImage(imageDown.image, horCenterPoint - 16, verCenterPoint + 12, this.iconSize, this.iconSize);
      // 下行速率,文本居中
      this.ctx.fillText(extractNumbersAndDots(downRate), horCenterPoint, verCenterPoint + 22);
      // 下行单位
      this.ctx.fillStyle = unitStyle;
      this.ctx.fillText(getUnitText(downRate), horCenterPoint + getTextWidth(extractNumbersAndDots(downRate)) + 4, verCenterPoint + 22);
    }
  }

  // 刷新数据的方法
  refreshData(data) {
    this.data = data !== undefined ? data : this.data;
    this.draw();
  }
}