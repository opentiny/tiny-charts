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
import {
  createEl,
  appendEL,
  appendText,
  setStyle,
  appendNode,
  addClass,
  handlePercent,
  handleLeft,
  handleFillColor,
  getChartPostLabel,
  innerTooltip,
} from './util';
import * as constants from './constant';

export default class CoordinateSystem {
  wrapper = null;
  option = {};
  canvas = null;
  // 是否鼠标移动
  isMove = false;
  // 内部canva画笔对象
  canvasCtx = null;

  // 提示框是否显示
  isShow = false;

  lineSpace = 0;

  // 用来保存canvas y轴坐标
  cavasRowCoordinates = [];

  // 移动时的坐标
  mousePosition = {
    x: 0,
    y: 0,
  };
  //   提示框
  tip;
  //    提示框内容区
  tipContent;
  //   两个手柄之间的差值;
  currentTotalTime = 0;

  //   手柄选中的时间范围
  timeScope = 0;

  constructor(wrapper, option, canvasWidth, canvasHeight) {
    this.wrapper = wrapper;
    this.option = option;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  /**
   *
   * @param {string} className 类名名称
   */
  createDom(className, domName) {
    const node = createEl(domName || 'div');
    addClass(node, className);
    return node;
  }

  addClassName(node, className) {
    addClass(node, className);
  }

  addDom(container, node) {
    appendEL(container, node);
  }

  clearDom(node) {
    appendNode(node, '');
  }

  addText(node, text) {
    appendText(node, text);
  }

  renderCoordinatesAxis(body) {
    const axisWrapper = this.createDom('ev_GanttChart_axisWrapper');
    this.addDom(body, axisWrapper);

    const axis = this.createDom('ev_GanttChart_axis', 'ul');
    this.addDom(axisWrapper, axis);
    // 生成坐标轴子项
    if (this.option && this.option.data) {
      this.option.data.forEach(dataItem => {
        const axisItem = this.createDom('ev_GanttChart_axisItem', 'li');
        this.addText(axisItem, dataItem.name);
        this.addDom(axis, axisItem);
      });
    }
  }

  renderChartItem(chartItemWrapper) {
    this.option.data.forEach(() => {
      // 图表的数据子项
      const chartItem = this.createDom('ev_GanttChart_chartItem');

      // 牵引线设置
      const tractionLineWrapper = this.createDom('ev_GanttChart_tractionLineWrapper');
      // 牵引点
      const towingPoint = this.createDom('ev_GanttChart_towingPoint');
      // 牵引线
      const tractionLine = this.createDom('ev_GanttChart_tractionLine');
      this.addDom(tractionLineWrapper, towingPoint);
      this.addDom(tractionLineWrapper, tractionLine);
      // 图表的柱子
      const chartPostWrapper = this.createDom('ev_GanttChart_chartPostWrapper');

      this.addDom(chartItem, chartPostWrapper);
      this.addDom(chartItem, tractionLineWrapper);
      this.addDom(chartItemWrapper, chartItem);
    });
  }

  // 生成图表的主体
  renderBody(chartItemWrapper) {
    if (this.option && this.option.data) {
      this.renderChartItem(chartItemWrapper);
    }
  }

  canvasMove = e => {
    this.isMove = true;
    this.mousePosition.x = e.offsetX;
    this.mousePosition.y = e.offsetY;
    this.resetCanvas(this.currentTotalTime, this.timeScope);
  };

  canvasLeave = () => {
    this.isMove = false;
    setStyle(this.tip, 'visibility', 'hidden');
    setStyle(this.tip, 'opacity', 0);
    setStyle(this.canvas, 'cursor', 'default');
  };

  getLineSpace() {
    let lineSpace;
    if (this.option.data.length < 2) {
      lineSpace = 0;
    } else {
      const isOverHigh = this.canvasHeight - 28 * this.option.data.length <= 0;
      lineSpace = (isOverHigh ? 0 : this.canvasHeight - 28 * this.option.data.length) / (this.option.data.length - 1);
    }
    return lineSpace;
  }

  // 绘制圆角矩形
  drawRoundRect(x, y, width, height, radius) {
    this.canvasCtx.beginPath();
    this.canvasCtx.arc(x + radius, y + radius, radius, Math.PI, (Math.PI * 3) / 2);
    this.canvasCtx.lineTo(width - radius + x, y);
    this.canvasCtx.arc(width - radius + x, radius + y, radius, (Math.PI * 3) / 2, Math.PI * 2);
    this.canvasCtx.lineTo(width + x, height + y - radius);
    this.canvasCtx.arc(width - radius + x, height - radius + y, radius, 0, (Math.PI * 1) / 2);
    this.canvasCtx.lineTo(radius + x, height + y);
    this.canvasCtx.arc(radius + x, height - radius + y, radius, (Math.PI * 1) / 2, Math.PI);
  }

  renderRowItemPoint(rowItemWidth, postItem, xCoordinates, yCoordinates) {
    if (rowItemWidth > 8 + 4 + 8) {
      this.canvasCtx.beginPath();
      this.canvasCtx.arc(xCoordinates + 10, yCoordinates + 10, 2, 0, Math.PI * 2);
      let color;
      // 设置牵引点的颜色
      switch (postItem.status) {
        case 'during':
          color = '#DBDFF2';
          break;
        case 'success':
          color = '#AFEDCE';
          break;
        case 'stop':
          color = '#E4E4E4';
          break;
        case 'waiting':
          color = '#FCDBAA';
          break;
        default:
          color = '#F3DADA';
          break;
      }
      this.canvasCtx.fillStyle = color;
      this.canvasCtx.fill();
    }
  }

  renderRowItemLabel(differenceTime, rowItemWidth, xCoordinates, yCoordinates) {
    const label = getChartPostLabel(differenceTime);
    const labelWidth = Math.round(this.canvasCtx.measureText(label).width + 8);
    if (rowItemWidth - (8 + 4 + 8) >= labelWidth) {
      this.canvasCtx.fillStyle = '#FFF';
      this.canvasCtx.fillText(label, xCoordinates + (rowItemWidth - labelWidth), yCoordinates + 14);
    }
  }

  setTipContent(node, dataIndex, postIndex) {
    if (this.option.tipHtml) {
      appendNode(node, this.option.tipHtml(this.option.data, dataIndex, postIndex));
    } else {
      appendNode(node, innerTooltip(this.option.data, dataIndex, postIndex));
    }
  }

  renderRowItem(yCoordinates, postItem, postIndex, dataIndex, currentTotalTime, timeScope) {
    // 开始时间
    const startTime = new Date(postItem.startTime).getTime();
    // 结束时间
    const endTime = new Date(postItem.endTime).getTime();
    // 当前数据项的起止时间毫秒数
    const postItemTime = {
      startTime,
      endTime,
    };
    const differenceTime = endTime - startTime;
    const currentTime = new Date(this.option.currentTime).getTime();
    // 确定占比
    const percent = handlePercent(postItemTime, currentTime, currentTotalTime, timeScope);
    // 占比为0直接不用执行
    if (percent === 0) return;
    const chartPostWidth = this.canvasWidth * percent;
    // 处理宽度四舍五入为0的情况
    const rowItemWidth = Math.round(chartPostWidth) === 0 ? 1 : Math.round(chartPostWidth);
    const left = handleLeft(postItemTime, currentTime, currentTotalTime, timeScope);
    const xCoordinates = Math.round(left * this.canvasWidth);
    // 处理宽度过小圆角不显示
    const borderRadius = rowItemWidth < 4 ? 0 : constants.BORDER_RADIUS;
    this.drawRoundRect(xCoordinates, yCoordinates, rowItemWidth, constants.BAR_HEIGHT, borderRadius);
    // 填充颜色
    this.canvasCtx.fillStyle = handleFillColor(postItem);
    this.canvasCtx.fill();
    // 判断鼠标位移的时候是否在元素上面
    if (this.isMove) {
      if (this.canvasCtx.isPointInPath(this.mousePosition.x, this.mousePosition.y)) {
        this.isShow = true;
        if (this.isShow) {
          this.setTipContent(this.tipContent, dataIndex, postIndex);
          setStyle(this.tip, 'visibility', 'visible');
          setStyle(this.tip, 'opacity', 1);
          setStyle(this.canvas, 'cursor', 'pointer');
          const top = dataIndex * (this.lineSpace + 28) + 16 + 40;
          const transform = `translate3d(${this.mousePosition.x + 2}px, ${this.mousePosition.y - top}px, 0px)`;
          setStyle(this.tip, 'transform', transform);
        }
      } else {
        if (!this.isShow) {
          setStyle(this.tip, 'visibility', 'hidden');
          setStyle(this.tip, 'opacity', 0);
          setStyle(this.canvas, 'cursor', 'default');
        }
      }
    }
    // 绘制牵引点
    this.renderRowItemPoint(rowItemWidth, postItem, xCoordinates, yCoordinates);
    this.renderRowItemLabel(differenceTime, rowItemWidth, xCoordinates, yCoordinates);
  }

  renderChartRow(dataItem, dataIndex, yCoordinates, currentTotalTime, timeScope) {
    dataItem.data.forEach((postItem, postIndex) => {
      // 绘制每行的单项数据
      this.renderRowItem(yCoordinates, postItem, postIndex, dataIndex, currentTotalTime, timeScope);
    });
  }

  resetCanvas(currentTotalTime, timeScope) {
    if (currentTotalTime) {
      this.currentTotalTime = currentTotalTime;
    }
    if (timeScope) {
      this.timeScope = timeScope;
    }
    if (this.option.data && this.option.data.length === 0) return;
    // 清空画布
    this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    // 绘制每行数据
    this.option.data.forEach((item, index) => {
      this.renderChartRow(item, index, this.cavasRowCoordinates[index].yStart, currentTotalTime, timeScope);
    });
    // 用来重置鼠标移动tooltip出现后的判定条件
    this.isShow = false;
  }

  paintCanvas() {
    if (this.option.data) {
      const lineSpace = this.getLineSpace();
      this.lineSpace = lineSpace;
      // 计算每行的y轴坐标范围
      this.option.data.forEach((item, index) => {
        const yRow = {
          yStart: constants.SPACE * (2 * index + 1) + index * (constants.BAR_HEIGHT + lineSpace),
        };
        this.cavasRowCoordinates.push(yRow);
      });

      // 重新绘制cancas
      this.resetCanvas();
    }
  }

  tipMouseLeave = () => {
    setStyle(this.tip, 'visibility', 'hidden');
    setStyle(this.tip, 'opacity', 0);
    setStyle(this.canvas, 'cursor', 'default');
  };

  init() {
    const body = this.createDom('ev_GanttChart_body');
    this.addDom(this.wrapper, body);
    // 生成坐标轴
    this.renderCoordinatesAxis(body);
    //  右边的图表
    const chartWrapper = this.createDom('ev_GanttChart_chartWrapper');
    this.addDom(body, chartWrapper);
    // 图表的子项数据
    const chartItemWrapper = this.createDom('ev_GanttChart_chartItemWrapper');
    this.addDom(chartWrapper, chartItemWrapper);

    this.renderBody(chartItemWrapper);
    // // 生成canvas
    const cavas = this.createDom('ev_GanttChart_canvas', 'canvas');
    this.canvas = cavas;
    cavas.onmousemove = this.canvasMove;
    cavas.onmouseleave = this.canvasLeave;
    cavas.id = 'ev_GanttChart_cavs';
    // // 设置画布像素宽高
    cavas.width = this.canvasWidth;
    cavas.height = this.canvasHeight;
    this.addDom(chartWrapper, cavas);
    const ctx = cavas.getContext('2d');
    this.canvasCtx = ctx;
    // 处理绘制
    this.paintCanvas();
    // // 生成底部的tooltip

    const tooltip = this.createDom('ev_GanttChart_tooltipContainer');
    this.addDom(chartWrapper, tooltip);
    this.tip = tooltip;
    const toolTipContent = this.createDom('ev_GanttChart_toolTipContent');
    this.addDom(tooltip, toolTipContent);
    this.tipContent = toolTipContent;

    this.tip.onmouseleave = this.tipMouseLeave;
  }
}
